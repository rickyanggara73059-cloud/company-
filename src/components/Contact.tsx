import React from "react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Hubungi Kami</h2>

      <p>
        Siap membantu kebutuhan transportasi dan logistik
        perusahaan Anda.
      </p>

      <div className="contact-list">
        <div className="contact-item">
          <h3>WhatsApp</h3>
          <p>+62 8XX XXXX XXXX</p>
        </div>

        <div className="contact-item">
          <h3>Email</h3>
          <p>info@namaperusahaan.com</p>
        </div>

        <div className="contact-item">
          <h3>Alamat</h3>
          <p>Alamat perusahaan akan ditambahkan</p>
        </div>
      </div>

      <a
        href="https://wa.me/628XXXXXXXXXX"
        target="_blank"
        className="whatsapp-button"
      >
        Chat WhatsApp Sekarang
      </a>
    </section>
  );
};