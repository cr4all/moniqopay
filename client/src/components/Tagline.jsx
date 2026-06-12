import { useTranslation } from 'react-i18next';

export default function Tagline() {
  const { t } = useTranslation();
  return (
    <section className="tagline">
      <p className="tagline__text">{t('tagline.text')}</p>
    </section>
  );
}
