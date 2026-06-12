import Hero from '../components/Hero';
import Tagline from '../components/Tagline';
import PartnerSection from '../components/PartnerSection';
import StatsSection from '../components/StatsSection';
import CountriesCarousel from '../components/CountriesCarousel';
import AdvantagesSection from '../components/AdvantagesSection';
import UniteWorldSection from '../components/UniteWorldSection';
import IndustriesSection from '../components/IndustriesSection';
import ContactForm from '../components/ContactForm';
import TelegramSection from '../components/TelegramSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Tagline />
      <PartnerSection />
      <StatsSection />
      <CountriesCarousel />
      <AdvantagesSection />
      <UniteWorldSection />
      <IndustriesSection />
      <ContactForm />
      <TelegramSection />
    </>
  );
}
