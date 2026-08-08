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

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-badge">
          TRANSPORTATION & LOGISTICS
        </span>

        <h1>
          Pengiriman Aman,
          <br />
          Cepat & Tepat Waktu
        </h1>

        <p>
          Solusi transportasi dan logistik profesional untuk
          mendukung kebutuhan distribusi bisnis Anda secara
          aman, efisien, dan terpercaya.
        </p>

        <div className="hero-button">
          <button>
            Hubungi Kami
          </button>

          <a
            href="/document/company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Download Company Profile
          </a>
        </div>
      </div>
    </section>
  );
};