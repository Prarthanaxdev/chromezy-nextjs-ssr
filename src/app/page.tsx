import HeroSection from '../containers/heroSection';
import Ad from '../containers/Ad';
import Products from '../containers/Products';
import ClientStories from '../containers/clientStories';
import SuccessStories from '../containers/successStories';
import Service from '../containers/Service';
import ExploreAI from '../containers/exploreAI';
import ContactUs from '../containers/contactUs';
import Footer from '../containers/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Ad />
      <Products />
      <ClientStories />
      <SuccessStories />
      <Service />
      <ExploreAI />
      <ContactUs />
      <Footer />
    </div>
  );
}
