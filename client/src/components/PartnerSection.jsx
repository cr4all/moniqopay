import { useTranslation } from 'react-i18next';

export default function PartnerSection() {
  const { t } = useTranslation();

  return (
    <section className="partner">
      <div className="partner__inner">
        <img src="/assets/spiral-C7cDjvMt.webp" alt="" className="partner__spiral" aria-hidden="true" />
        <div className="partner__grid">
          <h2 className="partner__title">
            {t('partner.title').split('MoniqoPay').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-blue">MoniqoPay</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h2>
          <p className="partner__subtitle">{t('partner.subtitle')}</p>
          <div className="partner__description">
            <span className="partner__blue-line" aria-hidden="true" />
            <p className="partner__text">{t('partner.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
