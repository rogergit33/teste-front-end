import Logo from "../../assets/logo-econverse.png";

import "./brands.scss";

const Brands = () => {
  const items = Array.from({ length: 5 });

  return (
    <section className="brands">
      <div className="container">
        <h2>Navegue por marcas</h2>
        <div className="card-container-econverse">
          {items.map((_, index) => (
            <div className="card-econverse" key={index}>
              <img
                src={Logo}
                alt="Logo Econverse"
                title="Econverse"
                loading="lazy"
                className="responsive-img"
                width="117"
                height="34"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
