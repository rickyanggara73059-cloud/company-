
import React from "react";
import {
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Aman & Terpercaya",
      description:
        "Menjaga keamanan barang dan memastikan proses pengiriman berjalan dengan baik.",
    },
    {
      icon: Truck,
      title: "Armada Handal",
      description:
        "Didukung armada yang siap operasional untuk memenuhi kebutuhan distribusi.",
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description:
        "Ditangani oleh tenaga profesional yang mengutamakan kualitas pelayanan.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-header">
          <span className="about-label">
            TENTANG PERUSAHAAN
          </span>

          <h2>
            Solusi Transportasi & Logistik
            <span> untuk Kebutuhan Bisnis</span>
          </h2>

          <p>
            Kami adalah perusahaan yang bergerak di bidang transportasi
            dan logistik dengan komitmen memberikan layanan pengiriman
            yang aman, cepat, dan terpercaya.
          </p>

          <p>
            Dengan dukungan armada yang handal dan tenaga profesional,
            kami membantu memenuhi kebutuhan distribusi barang untuk
            berbagai sektor bisnis.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="about-highlight" key={item.title}>
                <div className="about-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

