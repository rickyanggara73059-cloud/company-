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
            <span>PT. ALTRAN GUNA USAHA</span>
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
          <a href="#fleet">Armada</a>
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
          <a href="#services">Project Cargo</a>
          <a href="#services">Sewa Armada</a>
          <a href="#services">Pindahan Rumah & Kantor</a>
        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h4>Kontak</h4>

          <div className="footer-contact-item">
            <MessageCircle size={17} />

            <a
              href="https://wa.me/6281122226808"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 811-2222-6808
            </a>
          </div>

          <div className="footer-contact-item">
            <Mail size={17} />

            <a href="mailto:altran.gunausaha@gmail.com">
              altran.gunausaha@gmail.com
            </a>
          </div>

          <div className="footer-contact-item">
            <MapPin size={17} />

            <span>
              Jl. Diponegoro No. 50,
              Waringin Agung, Gambiran,
              Banyuwangi – Jawa Timur
            </span>
          </div>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © {currentYear} PT. ALTRAN GUNA USAHA.
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