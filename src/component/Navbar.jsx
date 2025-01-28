import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <header>
        <img
          id="pic"
          src="https://media.wired.com/photos/6414bc988a80ebacb760001c/master/pass/Best-SMS-Apps-for-Android-Gear-GettyImages-1329185604.jpg"
        ></img>
        <h2>Mec Confessions</h2>
      </header>
      <ul>
        <li>
          <Link id="a" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link id="b" to="/add">
            Add
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
