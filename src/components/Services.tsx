import React from "react";

export const Services: React.FC = () => {
  const services = [
    "Transportasi Darat",
    "Pengiriman Barang",
    "Distribusi Logistik",
    "Manajemen Armada",
    "Pergudangan",
    "Door to Door Delivery",
  ];

  return (
    <section id="services" className="services">
      <h2>Layanan Kami</h2>

      <div className="service-list">
        {services.map((service) => (
          <div className="service-item" key={service}>
            {service}
          </div>
        ))}
      </div>
    </section>
  );
};