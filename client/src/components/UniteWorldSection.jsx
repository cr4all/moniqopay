import { useTranslation } from 'react-i18next';

export default function UniteWorldSection() {
  const { t } = useTranslation();

  return (
    <section className="unite">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto' }}>
          {t('unite.title')}
        </h2>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '1.6rem auto 0' }}>
          {t('unite.subtitle')}
        </p>
        <img src="/assets/two-phones-BjcTngaR.jpeg" alt="Mobile payments" className="unite__phones" />
        <div className="unite__cards">
          <img src="/assets/topCard-D2BZCzME.svg" alt="" className="unite__card-img" aria-hidden="true" />
          <img src="/assets/bottomCard-BiXWVzVi.svg" alt="" className="unite__card-img" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
