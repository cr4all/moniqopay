import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { submitContact } from '../api/client';

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', telegram: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      await submitContact(form);
      setMessage(t('contact.success'));
      setForm({ name: '', telegram: '', email: '' });
    } catch {
      setError(t('contact.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__wrapper">
        <div className="contact__info">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
          {message && <div className="form-success">{message}</div>}
          {error && <div className="form-error">{error}</div>}
          <form onSubmit={handleSubmit} className="contact__form-grid">
            <div className="form-group">
              <label htmlFor="name" className='text-white'>{t('contact.name')}</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="telegram">{t('contact.telegram')}</label>
              <input id="telegram" name="telegram" type="text" value={form.telegram} onChange={handleChange} />
            </div>
            <div className="form-group form-group--full">
              <label htmlFor="email">{t('contact.email')}</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group--full">
              <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
                {loading ? '...' : t('contact.submit')}
              </button>
            </div>
            <p className="contact__consent">{t('contact.consent')}</p>
          </form>
        </div>

        <div className="contact__form-box">
        <div class="_form_image_1q2ua_68">
          <img alt="two-phones" src="/assets/two-phones-BjcTngaR.jpeg"/>
          </div>
        </div>
      </div>
    </section>
  );
}
