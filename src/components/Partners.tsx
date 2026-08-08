
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
      title: "Perusahaan Manufaktur",
      description:
        "Mendukung kebutuhan transportasi dan distribusi produk industri.",
      icon: Factory,
    },
    {
      title: "Distributor Nasional",
      description:
        "Membantu kelancaran distribusi ke berbagai wilayah Indonesia.",
      icon: Truck,
    },
    {
      title: "Perusahaan Retail",
      description:
        "Menunjang kebutuhan pengiriman dan distribusi produk retail.",
      icon: Store,
    },
    {
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

          <h2>Mitra Kami</h2>

          <p>
            Kami dipercaya oleh berbagai perusahaan dalam mendukung
            kebutuhan transportasi dan distribusi secara profesional
            dan tepat waktu.
          </p>
        </div>

        <div className="partner-list">
          {partners.map((partner) => {
            const Icon = partner.icon;

            return (
              <div className="partner-item" key={partner.title}>

                <div className="partner-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <div>
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
