import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { register, setAuthToken } from '../api/client';

export default function Register({ onAuth }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError(t('auth.passwordMismatch'));
      return;
    }

    setLoading(true);

    try {
      const data = await register({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      setAuthToken(data.token);
      onAuth(data.user);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || t('auth.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>{t('auth.registerTitle')}</h1>
        {error && <div className="form-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('auth.name')}</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('auth.email')}</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">{t('auth.password')}</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">{t('auth.confirmPassword')}</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              minLength={6}
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? '...' : t('auth.register')}
          </button>
        </form>
        <p className="auth-footer">
          {t('auth.hasAccount')}{' '}
          <Link to="/sign-in">{t('auth.signInLink')}</Link>
        </p>
      </div>
    </div>
  );
}
