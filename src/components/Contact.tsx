
import React from "react";
import {
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-header">
          <span className="contact-label">
            HUBUNGI KAMI
          </span>

          <h2>
            Mari Bangun Distribusi
            <span> yang Lebih Efisien</span>
          </h2>

          <p>
            Siap membantu kebutuhan transportasi dan logistik
            perusahaan Anda. Hubungi tim kami untuk mendiskusikan
            kebutuhan pengiriman dan distribusi bisnis Anda.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">
                <MessageCircle
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>WhatsApp</span>
                <h3>+62 8XX XXXX XXXX</h3>
                <p>Hubungi kami melalui WhatsApp</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>Email</span>
                <h3>info@namaperusahaan.com</h3>
                <p>Kirim pertanyaan melalui email</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>Alamat</span>
                <h3>Alamat perusahaan</h3>
                <p>Lokasi kantor akan ditambahkan</p>
              </div>
            </div>

          </div>


          <div className="contact-cta">

            <div className="contact-cta-content">
              <span>SIAP BERKOLABORASI?</span>

              <h3>
                Konsultasikan kebutuhan
                transportasi Anda.
              </h3>

              <p>
                Tim kami siap membantu memberikan solusi
                transportasi dan distribusi yang sesuai
                dengan kebutuhan bisnis Anda.
              </p>

              <a
                href="https://wa.me/628XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <MessageCircle size={19} />

                <span>Chat WhatsApp</span>

                <ArrowUpRight size={18} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

