import "./footer.scss";

import Logo from "../../assets/logo-econverse.png";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="first-container">
          <img
            src={Logo}
            alt="econverse logo"
            className="responsive-img"
            title="Econverse"
            width="164"
            height="48"
            loading="lazy"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="icons">
            <img src={Instagram} alt="Instagram icon" title="Instagram" />
            <img src={Facebook} alt="Facebook icon" title="Facebook" />
            <img src={Linkedin} alt="Linkedin icon" title="Linkedin" />
          </div>
        </div>

        <div className="line"></div>

        <div className="column">
          <h3>Institucional</h3>
          <ul>
            <li>
              <a href="" title="Sobre Nós">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="" title="Movimento">
                Movimento
              </a>
            </li>
            <li>
              <a href="" title="Trabalhe conosco">
                Trabalhe conosco
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Ajuda</h3>
          <ul>
            <li>
              <a href="" title="Suporte">
                Suporte
              </a>
            </li>
            <li>
              <a href="" title="Fale Conosco">
                Fale Conosco
              </a>
            </li>
            <li>
              <a href="" title="Perguntas Frequentes">
                Perguntas Frequentes
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Termos</h3>
          <ul>
            <li>
              <a href="" title="Termos e Condições">
                Termos e Condições
              </a>
            </li>
            <li>
              <a href="" title="Política de Privacidade">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="" title="Troca e Devolução">
                Troca e Devolução
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="box">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
