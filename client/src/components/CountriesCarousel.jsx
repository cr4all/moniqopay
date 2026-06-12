import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { COUNTRY_FLAGS, MARQUEE_FLAGS } from '../data/assets';

export default function CountriesCarousel() {
  const { t } = useTranslation();
  const trackRef = useRef(null);
  const countryNames = t('countries.items', { returnObjects: true });

  const scroll = (direction) => {
    trackRef.current?.scrollBy({ left: 220 * direction, behavior: 'smooth' });
  };

  return (
    <section className="countries" id="payment-systems">
      <div className="blue-circle-glow countries__glow" aria-hidden="true" />
      <div className="countries__inner">
        <div className="countries__header">
          <h2 className="countries__title">{t('countries.title')}</h2>
          <p className="countries__hint">{t('countries.swipeHint')}</p>
          <img src="/assets/pearl-BvSftNjY.webp" alt="" className="countries__pearl" aria-hidden="true" />
        </div>

        <div className="countries__carousel">
          <div className="countries__track" ref={trackRef}>
            {COUNTRY_FLAGS.map(({ nameKey, flag }) => (
              <div key={nameKey} className="countries__card">
                <img src={flag} alt="" className="countries__flag" />
                <div className="countries__name">{countryNames[nameKey]}</div>
              </div>
            ))}
          </div>
          <div className="countries__nav">
            <button type="button" className="countries__nav-btn" onClick={() => scroll(-1)} aria-label="Previous">
              ‹
            </button>
            <button type="button" className="countries__nav-btn" onClick={() => scroll(1)} aria-label="Next">
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="flags-marquee" aria-hidden="true">
        <div className="flags-marquee__track">
          {[...MARQUEE_FLAGS, ...MARQUEE_FLAGS, ...MARQUEE_FLAGS].map((flag, i) => (
            <img key={i} src={flag} alt="" className="flags-marquee__item" />
          ))}
        </div>
      </div>
    </section>
  );
}
