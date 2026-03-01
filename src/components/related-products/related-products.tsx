import { useEffect, useRef, useState } from "react";
import productsData from "../../json/products.json";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import ProductModal from "../product-modal/product-modal";
import "./related-products.scss";
import type { Product } from "../../types";

const RelatedProducts = () => {
  const products: Product[] = productsData.products;

  const carouselRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(304);
  const [visibleCards, setVisibleCards] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setVisibleCards(1);
        setCardWidth(carouselRef.current?.offsetWidth || width);
      } else if (width <= 1024) {
        setVisibleCards(2);
        setCardWidth(260);
      } else {
        setVisibleCards(4);
        setCardWidth(304);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const maxIndex = products.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="related-products">
      <button
        className="nav-btn prev"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <img src={ArrowLeft} alt="Anterior" />
      </button>

      <div className="carousel" ref={carouselRef}>
        <div
          className="track"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`
          }}
        >
          {products.map((product) => (
            <div key={product.productName} className="card-product">
              <img src={product.photo} alt={product.productName} />

              <h3>{product.productName}</h3>

              <p className="desconto">R$ 30,90</p>
              <span>R$ {product.price.toLocaleString()}</span>
              <p className="juros">ou 2x de R$ 49,95 sem juros</p>
              <p className="frete-gratis">Frete grátis</p>

              <button
                onClick={() => setSelectedProduct(product)}
                title="Comprar"
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        className="nav-btn next"
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
      >
        <img src={ArrowRight} alt="Próximo" />
      </button>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default RelatedProducts;
