
import React from "react";
import {
  Factory,
  Truck,
  Store,
  Boxes,
} from "lucide-react";

export const Partners: React.FC = () => {
  const partners = [
    {
      number: "01",
      title: "Perusahaan Manufaktur",
      description:
        "Mendukung kebutuhan transportasi dan distribusi produk industri.",
      icon: Factory,
    },
    {
      number: "02",
      title: "Distributor Nasional",
      description:
        "Membantu kelancaran distribusi ke berbagai wilayah Indonesia.",
      icon: Truck,
    },
    {
      number: "03",
      title: "Perusahaan Retail",
      description:
        "Menunjang kebutuhan pengiriman dan distribusi produk retail.",
      icon: Store,
    },
    {
      number: "04",
      title: "Pelaku Industri",
      description:
        "Menyediakan solusi transportasi sesuai kebutuhan operasional.",
      icon: Boxes,
    },
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
          {partners.map((partner) => {
            const Icon = partner.icon;

            return (
              <div
                className="partner-item"
                key={partner.number}
              >
                <div className="partner-top">
                  <span className="partner-number">
                    {partner.number}
                  </span>

                  <div className="partner-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <div className="partner-content">
                  <h3>{partner.title}</h3>

                  <p>{partner.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

