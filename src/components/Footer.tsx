
import React from "react";
import {
  Truck,
  ArrowUpRight,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Truck size={22} strokeWidth={2} />
            <span>PT Nama Perusahaan</span>
          </div>

          <p>
            Solusi transportasi dan logistik terpercaya
            untuk mendukung kebutuhan distribusi bisnis
            secara aman, efisien, dan tepat waktu.
          </p>

          <a
            href="#contact"
            className="footer-cta"
          >
            Hubungi Kami
            <ArrowUpRight size={17} />
          </a>
        </div>


        {/* NAVIGATION */}
        <div className="footer-column">
          <h4>Navigasi</h4>

          <a href="#home">Beranda</a>
          <a href="#about">Tentang Kami</a>
          <a href="#services">Layanan</a>
          <a href="#why-us">Keunggulan</a>
          <a href="#partners">Mitra & Klien</a>
          <a href="#contact">Kontak</a>
        </div>


        {/* SERVICES */}
        <div className="footer-column">
          <h4>Layanan</h4>

          <a href="#services">Transportasi Darat</a>
          <a href="#services">Pengiriman Barang</a>
          <a href="#services">Distribusi Logistik</a>
          <a href="#services">Manajemen Armada</a>
          <a href="#services">Pergudangan</a>
          <a href="#services">Door to Door Delivery</a>
        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h4>Kontak</h4>

          <div className="footer-contact-item">
            <MessageCircle size={17} />
            <span>+62 8XX XXXX XXXX</span>
          </div>

          <div className="footer-contact-item">
            <Mail size={17} />
            <span>info@namaperusahaan.com</span>
          </div>

          <div className="footer-contact-item">
            <MapPin size={17} />
            <span>Alamat perusahaan</span>
          </div>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © {currentYear} PT Nama Perusahaan.
            Semua hak dilindungi.
          </p>

          <p>
            Transportasi & Logistik Profesional
          </p>

        </div>
      </div>

    </footer>
  );
};

