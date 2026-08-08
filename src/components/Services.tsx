
import React from "react";
import {
  Truck,
  Package,
  Boxes,
  Settings,
  Warehouse,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Transportasi Darat",
      description:
        "Layanan transportasi darat untuk kebutuhan pengiriman barang secara aman dan efisien.",
      icon: Truck,
    },
    {
      number: "02",
      title: "Pengiriman Barang",
      description:
        "Solusi pengiriman barang dengan mengutamakan keamanan, ketepatan waktu, dan kondisi barang.",
      icon: Package,
    },
    {
      number: "03",
      title: "Distribusi Logistik",
      description:
        "Mendukung proses distribusi barang agar lebih teratur, cepat, dan sesuai kebutuhan bisnis.",
      icon: Boxes,
    },
    {
      number: "04",
      title: "Manajemen Armada",
      description:
        "Pengelolaan armada secara profesional untuk memastikan kendaraan siap mendukung operasional.",
      icon: Settings,
    },
    {
      number: "05",
      title: "Pergudangan",
      description:
        "Solusi penyimpanan dan pengelolaan barang untuk membantu menjaga kelancaran rantai distribusi.",
      icon: Warehouse,
    },
    {
      number: "06",
      title: "Door to Door Delivery",
      description:
        "Layanan pengiriman langsung dari lokasi pengambilan hingga ke tujuan dengan proses yang praktis.",
      icon: MapPin,
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
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                className="service-item"
                key={service.number}
              >
                <div className="service-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="service-link">
                    <span>Lihat layanan</span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

