import logoFontAwesome from "../images/tarjetas-molonas.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__image-brand"
          src={logoFontAwesome}
          alt="imagen awesome profile cards"
        />
      </Link>
    </header>
  );
};

export default Header;
