import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <div className="container">
        <h1>{t('legal.privacyTitle')}</h1>
        <p>{t('legal.privacyContent')}</p>
        <p style={{ marginTop: 24 }}>
          <Link to="/" className="btn btn-outline">← Home</Link>
        </p>
      </div>
    </div>
  );
}
