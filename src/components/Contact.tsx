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
            perusahaan Anda. Hubungi tim PT. ALTRAN GUNA USAHA
            untuk mendiskusikan kebutuhan pengiriman, distribusi,
            maupun pindahan rumah dan kantor.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            {/* WHATSAPP */}

            <div className="contact-item">
              <div className="contact-icon">
                <MessageCircle
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>WhatsApp / Phone</span>

                <h3>
                  +62 811-2222-6808
                </h3>

                <p>
                  Hubungi tim kami melalui WhatsApp
                </p>
              </div>
            </div>


            {/* EMAIL */}

            <div className="contact-item">
              <div className="contact-icon">
                <Mail
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>Email</span>

                <h3>
                  altran.gunausaha@gmail.com
                </h3>

                <p>
                  Kirim pertanyaan melalui email
                </p>
              </div>
            </div>


            {/* OFFICE */}

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>Office</span>

                <h3>
                  Banyuwangi
                </h3>

                <p>
                  Jl. Diponegoro No. 50,
                  Waringin Agung, Gambiran,
                  Banyuwangi – Jawa Timur
                </p>
              </div>
            </div>


            {/* BRANCH BALIKPAPAN */}

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>Branch Office</span>

                <h3>
                  Balikpapan
                </h3>

                <p>
                  Jl. Mulawarman, Ruko Mulawarman
                  Asri No. 5D, Manggar, Balikpapan
                </p>
              </div>
            </div>


            {/* BRANCH DEPOK */}

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>Branch Office</span>

                <h3>
                  Depok
                </h3>

                <p>
                  Jl. Raden Saleh, Depok
                </p>
              </div>
            </div>

          </div>


          {/* CTA */}

          <div className="contact-cta">

            <div className="contact-cta-content">

              <span>
                SIAP BERKOLABORASI?
              </span>

              <h3>
                Konsultasikan kebutuhan
                transportasi Anda.
              </h3>

              <p>
                Tim PT. ALTRAN GUNA USAHA siap membantu
                memberikan solusi transportasi dan distribusi
                yang sesuai dengan kebutuhan bisnis Anda.
              </p>

              <a
                href="https://wa.me/6281122226808"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <MessageCircle size={19} />

                <span>
                  Chat WhatsApp
                </span>

                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};