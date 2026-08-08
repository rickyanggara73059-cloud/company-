
import React from "react";
import {
  Truck,
  Clock3,
  UserCheck,
  Route,
  MapPinned,
  Headphones,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      number: "01",
      title: "Armada Terawat",
      description:
        "Armada dijaga dalam kondisi baik dan siap mendukung kebutuhan operasional.",
      icon: Truck,
    },
    {
      number: "02",
      title: "Tepat Waktu",
      description:
        "Mengutamakan ketepatan waktu dalam setiap proses pengiriman dan distribusi.",
      icon: Clock3,
    },
    {
      number: "03",
      title: "Driver Profesional",
      description:
        "Didukung tenaga pengemudi yang berpengalaman dan memahami kebutuhan operasional.",
      icon: UserCheck,
    },
    {
      number: "04",
      title: "Distribusi Terencana",
      description:
        "Setiap proses distribusi direncanakan agar berjalan lebih efektif dan terorganisir.",
      icon: Route,
    },
    {
      number: "05",
      title: "Jangkauan Luas",
      description:
        "Mendukung kebutuhan pengiriman untuk berbagai wilayah dan sektor bisnis.",
      icon: MapPinned,
    },
    {
      number: "06",
      title: "Support Responsif",
      description:
        "Tim customer support siap membantu memberikan informasi dan solusi dengan cepat.",
      icon: Headphones,
    },
  ];

  return (
    <section id="why-us" className="why-us">
      <div className="why-us-container">

        <div className="why-header">
          <span className="why-label">
            KEUNGGULAN KAMI
          </span>

          <h2>
            Mengapa Memilih Kami?
            <br />
            <span>Partner Logistik yang Dapat Diandalkan</span>
          </h2>

          <p>
            Kami mengutamakan keamanan, ketepatan waktu,
            dan kualitas layanan untuk membantu kebutuhan
            transportasi dan distribusi bisnis Anda.
          </p>
        </div>

        <div className="why-list">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div className="why-item" key={item.number}>

                <div className="why-top">
                  <span className="why-number">
                    {item.number}
                  </span>

                  <div className="why-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <div className="why-content">
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

