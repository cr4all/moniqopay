# MoniqoPay

MoniqoPay is a full-stack payment solutions landing page inspired by [AmPay](https://ampay.su/), built with React and Node.js.

## Features

- Dark fintech landing page with 12 sections
- Multi-language support (RU, EN, FR, ES)
- User registration and sign-in with JWT
- Contact form with backend persistence
- Responsive design

## Tech Stack

- **Frontend:** React 19, Vite, React Router, i18next, Axios
- **Backend:** Node.js, Express, Prisma, SQLite
- **Auth:** bcryptjs + JWT

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

### Database Setup

```bash
cd server
npx prisma migrate dev --name init
cd ..
```

### Development

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/me` | Get current user (JWT) |
| POST | `/api/contact` | Submit contact form |

## Project Structure

```
moniqopay/
├── client/     # React frontend
├── server/     # Express API
└── package.json
```

## Environment Variables

Copy `server/.env.example` to `server/.env`:

```
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret"
PORT=3001
CLIENT_URL=http://localhost:5173
```

## License

Private project.
