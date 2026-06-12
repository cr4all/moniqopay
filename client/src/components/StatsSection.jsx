import { useTranslation } from 'react-i18next';

const STAT_KEYS = ['support', 'experts', 'countries', 'projects', 'market'];

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="stats">
      <div className="stats__inner">
        <div>
        <h2 className="stats__title">{t('stats.title')}</h2>
        <div className="stats__dots">
          {STAT_KEYS.map((key) => (
            <div key={key} className="stats__dot">
              <div className="stats__dot-value">{t(`stats.items.${key}.value`)}</div>
              <div className="stats__dot-label">{t(`stats.items.${key}.label`)}</div>
            </div>
          ))}
        </div>
        </div>
        <div>
           <img
          src="/assets/laptop-CLGIMbbB.jpeg"
          alt="Analytics dashboard"
          className="stats__laptop"
        />
        </div>
      </div>
    </section>
  );
}
