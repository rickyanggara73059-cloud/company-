import React from "react";

export const Partners: React.FC = () => {
  const partners = [
  "Perusahaan Manufaktur",
  "Distributor Nasional",
  "Perusahaan Retail",
  "Pelaku Industri",
];

  return (
    <section id="partners" className="partners">
      <h2>Mitra Kami</h2>

      <p>
        Kami dipercaya oleh berbagai perusahaan dalam
        mendukung kebutuhan transportasi dan distribusi.
      </p>

      <div className="partner-list">
        {partners.map((partner) => (
          <div className="partner-item" key={partner}>
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
};