import { useState } from "react";
import "./hero.scss";
import ProductModal from "../product-modal/product-modal";

import IphoneImage from "../../assets/iphone.png";

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const product = {
    productName: "LOREM IPSUM DOLOR SIT AMET",
    price: 1499.9,
    descriptionShort:
      "Many desktop publishing packages and web page editors now many desktop publishing",
    photo: IphoneImage
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>Venha conhecer nossas promoções</h1>
        <h2>
          <span>50% Off</span> nos produtos
        </h2>
        <button onClick={() => setIsOpen(true)} title="Ver produto">
          Ver produto
        </button>
      </div>

      {isOpen && (
        <ProductModal product={product} onClose={() => setIsOpen(false)} />
      )}
    </section>
  );
};

export default Hero;
