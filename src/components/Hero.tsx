import React from "react";
import heroImage from "../assets/hero/hero.png";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <img 
        src={heroImage}
        alt="Transportasi dan Logistik"
        className="hero-image"
      />

      <div className="hero-content">
        <h2>Pengiriman Aman, Cepat, dan Tepat Waktu</h2>

        <h2>
          Solusi Transportasi & Logistik Profesional
        </h2>

        <p>
          Kami menyediakan layanan transportasi darat,
          distribusi barang, dan solusi logistik untuk
          kebutuhan bisnis Anda.
        </p>

        <div className="hero-button">
  <button>
    Hubungi Kami
  </button>

  <a 
    href="/document/company-profile.pdf"
    target="_blank"
    className="download-button"
  >
    Download Company Profile
  </a>
</div>
      </div>
    </section>
  );
};