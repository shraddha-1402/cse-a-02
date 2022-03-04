import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="nav">
      <Link className="link" to="/">
        <h1 className="nav-heading m-0-5">NAF Dashboard</h1>
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
