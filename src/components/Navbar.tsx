import React, { useState } from "react";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">PT Nama Perusahaan</h2>

      {/* Tombol hamburger mobile */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Menu */}
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
      </ul>
    </nav>
  );
};