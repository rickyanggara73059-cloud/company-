import React from "react";

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    "Armada Terawat & Siap Operasional",
    "Pengiriman Tepat Waktu",
    "Driver Profesional & Berpengalaman",
    "Sistem Distribusi Terencana",
    "Jangkauan Pengiriman Luas",
    "Layanan Customer Support Responsif",
  ];

  return (
    <section className="why-us">
      <h2>Mengapa Memilih Kami?</h2>

      <div className="why-list">
        {advantages.map((item) => (
          <div className="why-item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};