import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logoImg from "../../assets/logo.jpg";

const Navbar = ({ link }: { link: string }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="nav">
      <Link className="link flex-row align-center" to={link}>
        <div className="logo-container">
          <img src={logoImg} alt="logo" className="responsive-img" />
        </div>
        <h1 className="nav-heading m-0-5">PAS</h1>
      </Link>
      <ul className="ml-auto list-style-none m-0-5">
        <div className="pos-rel">
          <FaUser
            className="nav-dropdown-link icon nav-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          <div
            className={`nav-dropdown ${
              showDropdown ? "disp-block" : "hidden"
            } pos-abs`}
          >
            <ul className="list-style-none">
              <Link to="/" className="link">
                <li className="nav-dropdown-item">Profile</li>
              </Link>
              <Link to="/" className="link">
                <li className="nav-dropdown-item">Login</li>
              </Link>
              <Link to="/" className="link">
                <li className="nav-dropdown-item">Logout</li>
              </Link>
            </ul>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export { Navbar };
