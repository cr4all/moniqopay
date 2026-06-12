import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'moniqopay-api' });
});

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`MoniqoPay API running on http://localhost:${PORT}`);
});
