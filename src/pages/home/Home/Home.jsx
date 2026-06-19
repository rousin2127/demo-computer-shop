import HeroSlider from "../../../components/home/HeroSlider";
import { FeaturesBar } from "../../../components/home/Hero";
import CategorySection from "../../../components/home/CategorySection";
import FeaturedProducts from "../../../components/home/FeaturedProducts";
import DealsBanner from "../../../components/home/DealsBanner";
import GamingSection from "../../../components/home/GamingSection";
import NewArrivalSection from "../../../components/home/NewArrivalSection";
import ComponentsSection from "../../../components/home/ComponentsSection";
import FAQSection from "../../../components/home/FAQSection";
import {
  getFeaturedProducts,
  getGamingProducts,
  getNewArrivals,
  getComponentProducts,
  products,
} from "../../../data/products";

const Home = () => {
  const featured = getFeaturedProducts();
  const gaming = getGamingProducts();
  const newArrivals = getNewArrivals();
  const components = getComponentProducts();
  const laptops = products.filter((p) => p.category === "laptops").slice(0, 5);

  return (
    <main>
      <HeroSlider />
      <FeaturesBar />
      <CategorySection />
      <FeaturedProducts title="Hot Deals" products={featured} />
      <GamingSection products={gaming} />
      <NewArrivalSection products={newArrivals} />
      <ComponentsSection products={components} />
      <DealsBanner />
      <FeaturedProducts
        title="Best Laptops"
        products={laptops}
        viewAllLink="/shop?category=laptops"
      />
      <FAQSection />
    </main>
  );
};

export default Home;
