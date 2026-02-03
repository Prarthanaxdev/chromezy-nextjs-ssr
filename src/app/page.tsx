import HeroSection from '../containers/heroSection';
import Ad from '../containers/Ad';
import Products from '../containers/Products';
import ClientStories from '../containers/clientStories';
import SuccessStories from '../containers/successStories';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Ad />
      <Products />
      <ClientStories />
      <SuccessStories />
    </div>
  );
}
