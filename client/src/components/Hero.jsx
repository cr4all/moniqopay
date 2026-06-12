import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="who-we-are">
      <div className="hero__content">
        <h1 className="hero__title">
          {t('hero.title').split('MoniqoPay').map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="text-blue">MoniqoPay</span>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h1>
        <p className="hero__description">{t('hero.description')}</p>
        <div className="hero__actions">
          <Link to="/register" className="btn btn-primary">
            {t('hero.registration')}
          </Link>
          <a href="#contact" className="btn btn-outline">
            {t('hero.contactUs')}
          </a>
        </div>
      </div>
    </section>
  );
}
