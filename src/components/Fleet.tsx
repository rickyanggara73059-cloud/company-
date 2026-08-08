import React from "react";

import foto1 from "../assets/fleet/foto1.png";
import foto2 from "../assets/fleet/foto2.png";
import foto3 from "../assets/fleet/foto3.png";

export const Fleet: React.FC = () => {
  const fleets = [
    {
      number: "01",
      name: "Armada Transportasi",
      image: foto1,
    },
    {
      number: "02",
      name: "Armada Distribusi",
      image: foto2,
    },
    {
      number: "03",
      name: "Armada Logistik",
      image: foto3,
    },
  ];

  return (
    <section id="fleet" className="fleet">
      <div className="fleet-container">

        <div className="fleet-header">
          <span className="fleet-label">
            ARMADA KAMI
          </span>

          <h2>
            Armada Siap Mendukung
            <br />
            <span>Setiap Kebutuhan Anda</span>
          </h2>

          <p>
            Didukung armada yang terawat dan siap beroperasi
            untuk menunjang kebutuhan transportasi, distribusi,
            dan logistik bisnis Anda.
          </p>
        </div>

        <div className="fleet-list">
          {fleets.map((fleet) => (
            <div className="fleet-item" key={fleet.number}>

              <img
                src={fleet.image}
                alt={fleet.name}
              />

              <div className="fleet-overlay">

                <span className="fleet-number">
                  {fleet.number}
                </span>

                <h3>
                  {fleet.name}
                </h3>

                <span className="fleet-arrow">
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