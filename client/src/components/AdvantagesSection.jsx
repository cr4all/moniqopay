import { useTranslation } from 'react-i18next';
import { ADVANTAGE_ICONS } from '../data/assets';

const ADVANTAGE_LAYOUT = [
  { key: 'tech', className: 'advantages__card--wide2' },
  { key: 'international', className: 'advantages__card--wide2' },
  { key: 'team', className: 'advantages__card--tall' },
  { key: 'security', className: 'advantages__card--wide2' },
  { key: 'support', className: 'advantages__card--wide2' },
  { key: 'independent', className: 'advantages__card--wide3' },
];

export default function AdvantagesSection() {
  const { t } = useTranslation();

  return (
    <section className="advantages" id="advantages">
      <div className="advantages__inner">
        <h2 className="section-title">
          {t('advantages.title').split('MoniqoPay').map((part, i, arr) =>
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
        <p className="section-subtitle">{t('advantages.subtitle')}</p>
        <div className="advantages__grid">
          {ADVANTAGE_LAYOUT.map(({ key, className }) => (
            <div key={key} className={`advantages__card ${className}`}>
              <img src={ADVANTAGE_ICONS[key]} alt="" className="advantages__card-icon" />
              <h3 className="advantages__card-title">{t(`advantages.items.${key}.title`)}</h3>
              <p className="advantages__card-text">{t(`advantages.items.${key}.text`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
