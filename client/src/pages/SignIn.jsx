import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { login, setAuthToken } from '../api/client';

export default function SignIn({ onAuth }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await login(form);
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
        <h1>{t('auth.signInTitle')}</h1>
        {error && <div className="form-error">{error}</div>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? '...' : t('auth.signIn')}
          </button>
        </form>
        <p className="auth-footer">
          {t('auth.noAccount')}{' '}
          <Link to="/register">{t('auth.registerLink')}</Link>
        </p>
      </div>
    </div>
  );
}
