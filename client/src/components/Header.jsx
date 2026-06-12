import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LANGUAGES, changeLanguage } from '../i18n';
import Logo from './Logo';
import '../styles/header.css';

export default function Header({ user, onSignOut }) {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <Logo className="header__logo-img" />
          <span className="header__since">{t('header.since')}</span>
        </Link>

        <div className="header__actions">
          <div className="header__lang">
            {LANGUAGES.map((lang, i) => (
              <span key={lang.code}>
                {i > 0 && <span className="header__lang-sep">|</span>}
                <button
                  type="button"
                  className={`header__lang-btn ${i18n.language === lang.code ? 'header__lang-btn--active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.label}
                </button>
              </span>
            ))}
          </div>

          {user ? (
            <button type="button" className="header__sign-in" onClick={onSignOut}>
              {t('header.signOut')}
            </button>
          ) : (
            <Link to="/sign-in" className="header__sign-in">
              {t('header.signIn')}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
