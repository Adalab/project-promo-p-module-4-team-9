import logoAdalab from '../images/logo-adalab.png';

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer__title">Awesome profile-cards @2018</h4>
      <nav className="footer__logo">
        <a href="https://adalab.es/" title="adalab.es">
          <img src={logoAdalab} alt="logo Adalab" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
