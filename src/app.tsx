import Header from "./components/header/header";
import ShopByCategory from "./components/category/shop-by-category";
import Tabs from "./components/tabs/tabs";
import Hero from "./components/hero/hero";
import RelatedProducts from "./components/related-products/related-products";
import Brands from "./components/brands/brands";
import Newsletter from "./components/newsletter/newsletter";
import Footer from "./components/footer/footer";
import RelatedProductsHeader from "./components/related-products-header/related-products-header";
import Partners from "./components/partners/partners";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShopByCategory />
        <RelatedProductsHeader />
        <Tabs />
        <RelatedProducts />
        <Partners />
        <RelatedProductsHeader />
        <RelatedProducts />
        <Partners />
        <Brands />
        <RelatedProductsHeader />
        <RelatedProducts />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
