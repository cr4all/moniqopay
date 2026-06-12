import { useTranslation } from 'react-i18next';

export default function IndustriesSection() {
  const { t } = useTranslation();
  const col1 = t('industries.col1', { returnObjects: true });
  const col2 = t('industries.col2', { returnObjects: true });
  const col3 = t('industries.col3', { returnObjects: true });

  const featured = ['products', 'dating', 'investment'];

  return (
    <section className="section industries" id="industries">
      <div className="container">
        <h2 className="section-title">{t('industries.title')}</h2>
        <div className="industries__featured">
          {featured.map((key) => (
            <div key={key} className="industries__featured-card">
              <h3 className="industries__featured-title">{t(`industries.${key}.title`)}</h3>
              <p className="industries__featured-text">{t(`industries.${key}.text`)}</p>
            </div>
          ))}
        </div>
        <p className="industries__also">{t('industries.also')}</p>
        <div className="industries__lists">
          {[col1, col2, col3].map((col, i) => (
            <ul key={i} className="industries__list">
              {col.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <p className="industries__customize">{t('industries.customize')}</p>
      </div>
    </section>
  );
}
