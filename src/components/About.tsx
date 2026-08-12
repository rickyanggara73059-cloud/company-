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
        "Didukung armada pickup, Fuso, Colt Diesel, dan Long Bed yang dirawat dan diremajakan secara berkala.",
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description:
        "Didukung tim yang profesional dan berpengalaman dalam memberikan layanan transportasi dan logistik.",
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
            PT. ALTRAN GUNA USAHA
            <span> Solusi Transportasi & Logistik</span>
          </h2>

          <p>
            PT. ALTRAN GUNA USAHA adalah perusahaan yang bergerak
            pada bidang jasa sarana angkutan/transportasi yang
            terintegrasi, dalam menangani pengiriman barang,
            pindahan rumah dan kantor.
          </p>

          <p>
            Kami telah bergerak dalam bidang Ekspedisi sejak tahun
            2017 untuk melayani konsumen dengan berbagai pengiriman
            secara pribadi. Atas tingginya permintaan dan motivasi
            untuk menjadi lebih baik, pada tahun 2022 didirikan
            PT. ALTRAN GUNA USAHA dengan fokus pada bisnis pengiriman
            barang.
          </p>

          <p>
            Kami menggunakan armada pickup, Fuso, Colt Diesel, dan
            Long Bed. Penambahan, perawatan, dan peremajaan unit
            dilakukan secara berkala untuk memastikan ketepatan
            waktu pengiriman barang, kondisi barang saat diterima,
            serta kepuasan customer terhadap pelayanan PT. ALTRAN.
          </p>

          <p>
            Dengan didukung oleh tim yang profesional dan
            berpengalaman, kami siap bersaing dalam memberikan
            layanan jasa transportasi logistik serta senantiasa
            memberikan solusi terbaik untuk membantu kebutuhan dan
            keinginan pelanggan kami.
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