import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SLIDES } from '../data/assets';

export default function TelegramSection() {
  const { t } = useTranslation();
  const [slideIndex, setSlideIndex] = useState(0);

  const prev = () => setSlideIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1));
  const next = () => setSlideIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1));

  return (
    <section className="telegram">
      <div className="blue-circle-glow telegram__glow" aria-hidden="true" />
      <div className="telegram__box">
        <div className="telegram__slider">
          <img src={SLIDES[slideIndex]} alt="" className="telegram__slide-img" />
          <div className="countries__nav" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            <button type="button" className="countries__nav-btn" onClick={prev} aria-label="Previous slide">
              ‹
            </button>
            <button type="button" className="countries__nav-btn" onClick={next} aria-label="Next slide">
              ›
            </button>
          </div>
        </div>
        <div className="telegram__content">
          <h3 className="telegram__title">{t('telegram.title')}</h3>
          <p className="telegram__subtitle">{t('telegram.subtitle')}</p>
          <a href="#contact" className="btn btn-tg">
            {t('telegram.cta')}
          </a>
          <img src="/assets/circle-BN6b35CM.webp" alt="" className="telegram__circle" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
