import { body, validationResult } from 'express-validator';
import { Router } from 'express';
import prisma from '../db/prisma.js';
import { ValidationError } from '../middleware/errorHandler.js';

const router = Router();

const contactValidation = [
  body('name').trim().isLength({ min: 1 }),
  body('email').isEmail().normalizeEmail(),
  body('telegram').optional().trim(),
];

router.post('/', contactValidation, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError('Validation failed', errors.array());
    }

    const { name, email, telegram } = req.body;

    const contact = await prisma.contactRequest.create({
      data: { name, email, telegram: telegram || null },
    });

    res.status(201).json({
      message: 'Request received. We will contact you within 15 minutes.',
      id: contact.id,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
