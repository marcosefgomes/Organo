import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="blank">
              <img src="../../../public/imagens/fb.png" alt="Facebook" />
            </a>
          </li>

          <li>
            <a href="twitter.com" target="blank">
              <img src="../../../public/imagens/tw.png" alt="Twitter" />
            </a>
          </li>

          <li>
            <a href="instagram.com" target="blank">
              <img src="../../../public/imagens/ig.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <img src="../../../public/imagens/logo.png" alt="Logo Organo" />
      </section>

      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
