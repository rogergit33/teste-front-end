import Shield from "../../assets/shield-check.svg";
import Truck from "../../assets/truck.svg";
import Credit from "../../assets/credit-card.svg";
import Logo from "../../assets/logo-econverse.png";
import Vector from "../../assets/vector.svg";
import Search from "../../assets/search.svg";
import Heart from "../../assets/heart.svg";
import User from "../../assets/user-circle.svg";
import ShoppingCart from "../../assets/shopping-cart.svg";
import Crown from "../../assets/crown-simple.svg";

import "./header.scss";
import { useState } from "react";
import SearchInput from "../search-input/search-input";

const Header = () => {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  function closeMenu() {
    setMenu(false);
  }

  return (
    <header>
      <div className="container">
        <div className="info-container">
          <div className="infos">
            <img src={Shield} alt="Icon Shield" />
            <p>
              Compra <span>100% segura</span>
            </p>
          </div>
          <div className="infos">
            <img src={Truck} alt="Icon Truck" />
            <p>
              <span>Frete Grátis </span>acima de R$ 200
            </p>
          </div>
          <div className="infos">
            <img src={Credit} alt="Icon Credit Card" />
            <p>
              <span>Parcele </span> suas compras
            </p>
          </div>
        </div>
        <nav>
          <div className="first-container">
            <div>
              <img
                src={Logo}
                alt="Logo Econverse"
                title="Econverse"
                width="139"
                height="41"
                loading="lazy"
                className="responsive-img"
              />
            </div>
            <div className="input-container">
              <SearchInput />
              <button>
                <img src={Search} alt="Icon Search" />
              </button>
            </div>

            <div className="menu-buttons">
              {menu ? (
                <button aria-label="close menu" onClick={closeMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#9F9F9F"
                    viewBox="0 0 256 256"
                  >
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                  </svg>{" "}
                </button>
              ) : (
                <button
                  aria-label="open menu"
                  className="menu-btn"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#9F9F9F"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                  </svg>{" "}
                </button>
              )}
            </div>

            <div className="icons">
              <img src={Vector} alt="Icon Vector" className="vector" />
              <img src={Heart} alt="Icon Heart" className="heart" />
              <img src={User} alt="Icom User" className="user" />
              <img src={ShoppingCart} alt="Icon Shopping Cart" />
            </div>
          </div>

          <div className="container-category">
            <ul>
              <li>
                <a href="#" title="Todas Categorias">
                  Todas Categorias
                </a>
              </li>
              <li>
                <a href="#" title="Supermercado">
                  Supermercado
                </a>
              </li>
              <li>
                <a href="#" title="Livros">
                  Livros
                </a>
              </li>
              <li>
                <a href="#" title="Moda">
                  Moda
                </a>
              </li>
              <li>
                <a href="#" title="Lançamentos">
                  Lançamentos
                </a>
              </li>
              <li>
                <a href="#" className="offer" title="Ofertas do dia">
                  <span>Ofertas do dia</span>
                </a>
              </li>
              <li>
                <a href="#" title="Assinatura" className="container-crown">
                  <img src={Crown} alt="Icon Crown" />
                  Assinatura
                </a>
              </li>
            </ul>
          </div>

          {menu && (
            <div className="menu">
              <ul>
                <li>
                  <a href="#" title="Todas Categorias">
                    Todas Categorias
                  </a>
                </li>
                <li>
                  <a href="#" title="Supermercado">
                    Supermercado
                  </a>
                </li>
                <li>
                  <a href="#" title="Livros">
                    Livros
                  </a>
                </li>
                <li>
                  <a href="#" title="Moda">
                    Moda
                  </a>
                </li>
                <li>
                  <a href="#" title="Lançamentos">
                    Lançamentos
                  </a>
                </li>
                <li>
                  <a href="#" className="offer" title="Ofertas do dia">
                    <span>Ofertas do dia</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Assinatura" className="container-crown">
                    <img src={Crown} alt="Icon Crown" />
                    Assinatura
                  </a>
                </li>
                <li>
                  {" "}
                  <img src={Vector} alt="Icon Vector" />
                </li>
                <li>
                  <img src={Heart} alt="Icon Heart" />
                </li>
                <li>
                  <img src={User} alt="Icom User" />
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
