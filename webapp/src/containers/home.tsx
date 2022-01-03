import withPublicLayout from '@/components/hof/with-public-layout';
import Faq from '@/components/home/faq';
import StepSection from '@/components/home/step-section';
import CallToAction from '@/components/home/call-to-action';
import FeaturedCategories from '@/components/home/featured-categories';
import Hero from '@/components/home/hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <StepSection />
      <FeaturedCategories />
      <CallToAction />
    </div>
  );
};

export default withPublicLayout(Home, { title: 'Home' });
