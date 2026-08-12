import React from "react";

export const Partners: React.FC = () => {
  const partners = [
    "PT. Titian Anugerah Jaya",
    "PT. Bosag Anugerah Sukses",
    "Putra Jaya Tekhnik",
    "PT. Adhi Putra Jaya Tekhnik",
    "Cahaya Kembar Tekhnik",
    "PT. Pama Persada Nusantara",
    "PT. Indomarco Prismatama",
    "PT. Arkananta Apta Prastista",
    "PT. Sinergi Argo Industri",
    "PT. Chipta Paratama",
    "PT. Sefas Pelindo Utama",
    "PT. Borneo Investama Mandiri",
  ];

  return (
    <section id="partners" className="partners">
      <div className="partners-container">

        <div className="partners-header">
          <span className="partners-label">
            MITRA & KLIEN
          </span>

          <h2>
            Mitra yang
            <span> Mempercayai Kami</span>
          </h2>

          <p>
            Kami dipercaya oleh berbagai perusahaan dalam mendukung
            kebutuhan transportasi dan distribusi secara profesional,
            aman, dan tepat waktu.
          </p>
        </div>

        <div className="partner-list">
          {partners.map((partner, index) => (
            <div
              className="partner-item"
              key={partner}
            >
              <div className="partner-top">
                <span className="partner-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="partner-content">
                <h3>{partner}</h3>

                <p>
                  Mitra PT. ALTRAN GUNA USAHA
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};