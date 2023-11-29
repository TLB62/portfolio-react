import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 flex w-full justify-between h-48">
      <div className="w-14"></div>
      <nav className="w-full">
        <ul  className="md:flex hidden justify-around">
          <Link to="/accueil">accueil</Link>
          <Link to="/a-propos">a propos</Link>
          <Link to="/experiences">experiences</Link>
          <Link to="/projets">projets</Link>
          <Link to="/contact">contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
