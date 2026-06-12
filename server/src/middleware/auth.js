import jwt from 'jsonwebtoken';
import { UnauthorizedError } from './errorHandler.js';

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return next(new UnauthorizedError('No token provided'));
  }

  const token = authHeader.slice(7);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    next(new UnauthorizedError('Invalid token'));
  }
}
