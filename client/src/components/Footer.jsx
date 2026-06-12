import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { href: '#who-we-are', label: t('footer.whoWeAre') },
    { href: '#payment-systems', label: t('footer.paymentSystems') },
    { href: '#advantages', label: t('footer.advantages') },
    { href: '#industries', label: t('footer.withWhom') },
    { href: '#contact', label: t('footer.contactUs') },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <Logo className="footer__logo-img" />
            <p className="footer__tagline">{t('footer.tagline')}</p>
          </div>
          <nav className="footer__nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <nav className="footer__nav">
            <Link to="/sign-in">{t('header.signIn')}</Link>
            <Link to="/register">{t('hero.registration')}</Link>
          </nav>
        </div>
        <div className="footer__bottom">
          <div className="footer__legal">
            <Link to="/terms">{t('footer.terms')}</Link>
            <Link to="/privacy">{t('footer.privacy')}</Link>
          </div>
          <span className="footer__copyright">{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  );
}
