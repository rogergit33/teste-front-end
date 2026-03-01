import { categories } from "../../constants";

import "./shop-by-category.scss";

const ShopByCategory = () => {
  return (
    <section className="shop-by-category">
      <div className="container">
        <div className="cards-container">
          {categories.map((category) => (
            <div className="card" key={category.id} title={category.title}>
              <div
                className="image-container"
                style={{
                  backgroundColor:
                    category.title === "Tecnologia" ? "#FFFFFF" : "#F4F4F4"
                }}
              >
                <img src={category.image} alt={`Icon ${category.title}`} />
              </div>
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
