import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <Link to="/" className="brand" onClick={closeMenu}>

       <img src={logo} alt="Alaghna Technologies" className="brand-mark" />

        <div className="brand-copy">
          <strong
 style={{
  fontFamily: "'Lobster', cursive",
  fontWeight: 600,
  fontSize: "25px"
}}
>
  Alaghna Technologies
</strong>
        </div>

      </Link>

      {/* DESKTOP NAVIGATION */}
      <nav className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={
              location.pathname === item.path
                ? "nav-link active"
                : "nav-link"
            }
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <Link to="/contact" className="nav-cta">
        <span>LET&apos;S BUILD</span>
        <span className="nav-arrow">↗</span>
      </Link>

      {/* MOBILE MENU BUTTON */}
      <button
        className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE NAVIGATION */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={
              location.pathname === item.path
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
            onClick={closeMenu}
          >
            <span>{item.name}</span>
            <span>↗</span>
          </Link>
        ))}
      </nav>

    </header>
  );
}