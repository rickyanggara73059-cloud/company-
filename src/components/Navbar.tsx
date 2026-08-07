import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <h2>PT Nama Perusahaan</h2>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Tentang Kami</a></li>
        <li><a href="#services">Layanan</a></li>
        <li><a href="#fleet">Armada</a></li>
        <li><a href="#partners">Mitra</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  );
};