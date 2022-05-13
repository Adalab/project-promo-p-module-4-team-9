import landingImage from '../images/tarjetas-molonas.png';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <section className="landing">
        <div className="landing__logo">
          <img className="landing__image" src={landingImage} alt="" />
        </div>

        <div className="landing__content">
          <h1 className="landing__title">Crea tu tarjeta de visita</h1>

          <p className="landing__text">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>

          <ul className="landing__rectangle">
            <li className="landing__rectangle--item">
              <i className="fa fa-object-ungroup"></i>
              <span className="words">Diseña</span>
            </li>

            <li className="landing__rectangle--item">
              <i className="fa-solid fa-keyboard"></i>
              <span className="words">Rellena</span>
            </li>

            <li className="landing__rectangle--item">
              <i className="fa fa-share-alt"></i>
              <span className="words">Comparte</span>
            </li>
          </ul>

          <button className="landing__button">
            <Link className="landing__button--link" to="/create">
              Comenzar
            </Link>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
