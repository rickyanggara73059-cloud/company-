import React from "react";

export const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Transportasi Darat",
      description:
        "Layanan transportasi darat untuk kebutuhan pengiriman barang secara aman dan efisien.",
    },
    {
      number: "02",
      title: "Pengiriman Barang",
      description:
        "Solusi pengiriman barang dengan mengutamakan keamanan, ketepatan waktu, dan kondisi barang.",
    },
    {
      number: "03",
      title: "Distribusi Logistik",
      description:
        "Mendukung proses distribusi barang agar lebih teratur, cepat, dan sesuai kebutuhan bisnis.",
    },
    {
      number: "04",
      title: "Manajemen Armada",
      description:
        "Pengelolaan armada secara profesional untuk memastikan kendaraan siap mendukung operasional.",
    },
    {
      number: "05",
      title: "Pergudangan",
      description:
        "Solusi penyimpanan dan pengelolaan barang untuk membantu menjaga kelancaran rantai distribusi.",
    },
    {
      number: "06",
      title: "Door to Door Delivery",
      description:
        "Layanan pengiriman langsung dari lokasi pengambilan hingga ke tujuan dengan proses yang praktis.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <span className="services-label">
            LAYANAN KAMI
          </span>

          <h2>
            Solusi Logistik Untuk
            <br />
            <span>Kebutuhan Bisnis Anda</span>
          </h2>

          <p>
            Kami menyediakan berbagai layanan transportasi dan
            logistik yang dirancang untuk membantu bisnis Anda
            menjalankan proses distribusi secara aman, efisien,
            dan tepat waktu.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <div
              className="service-item"
              key={service.number}
            >
              <span className="service-number">
                {service.number}
              </span>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-arrow">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};