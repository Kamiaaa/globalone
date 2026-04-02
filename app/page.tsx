import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import ForHome from "./components/ForHome";
import PromotionalBanner from "./components/PromotionalBanner";
import Work from "./components/Work";


export default function Home() {
  return (
    <>
      <Carousel />
      <Work />
      <ForHome />
      <PromotionalBanner />
      <Banner />
      
    </>
  );
}
