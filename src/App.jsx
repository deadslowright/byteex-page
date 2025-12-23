import { Hero } from './components/Hero';
import { ProductBenefits } from './components/ProductBenefits';
import { AboutFounder } from './components/AboutFounder';
import { HowToOrder } from './components/HowToOrder';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { InfoBanner } from './components/InfoBanner';
import { CTA } from './components/CTA';

export const App = () => {

  return (
    <>
      <Hero />
      <ProductBenefits />
      <AboutFounder />
      <HowToOrder />
      <Reviews />
      <FAQ />
      <InfoBanner />
      <CTA />
    </>
  )
};
