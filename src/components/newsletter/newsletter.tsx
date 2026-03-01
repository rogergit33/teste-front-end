import "./newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="container">
          <div className="newsletter-container-text">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>
          <form>
            <div className="input">
              <input type="text" placeholder="Digite seu nome" />
              <div className="checkbox-container">
                <input type="checkbox" />
                <label>Aceito os termos e condições</label>
              </div>
            </div>
            <input type="email" placeholder="Digite seu e-mail" />
            <a href="#" title="Inscrever">
              Inscrever
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
