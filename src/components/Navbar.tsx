import React, { useState } from "react";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home" onClick={closeMenu} className="navbar-logo">
          <strong>PT. ALTRAN GUNA USAHA</strong>
          <span>TRANSPORTATION & LOGISTICS</span>
        </a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            Tentang Kami
          </a>
        </li>

        <li>
          <a href="#services" onClick={closeMenu}>
            Layanan
          </a>
        </li>

        <li>
          <a href="#fleet" onClick={closeMenu}>
            Armada
          </a>
        </li>

        <li>
          <a href="#partners" onClick={closeMenu}>
            Mitra
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Kontak
          </a>
        </li>

        <li className="nav-cta-wrapper">
          <a
            href="#contact"
            onClick={closeMenu}
            className="nav-cta"
          >
            Hubungi Kami
          </a>
        </li>
      </ul>
    </nav>
  );
};