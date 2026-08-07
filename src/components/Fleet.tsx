import React from "react";

import foto1 from "../assets/fleet/foto1.png";
import foto2 from "../assets/fleet/foto2.png";
import foto3 from "../assets/fleet/foto3.png";

export const Fleet: React.FC = () => {
  const fleets = [
    {
      name: "Armada Transportasi",
      image: foto1,
    },
    {
      name: "Armada Distribusi",
      image: foto2,
    },
    {
      name: "Armada Logistik",
      image: foto3,
    },
  ];

  return (
    <section id="fleet" className="fleet">
      <h2>Armada Kami</h2>

      <div className="fleet-list">
        {fleets.map((fleet) => (
          <div className="fleet-item" key={fleet.name}>
            <img
              src={fleet.image}
              alt={fleet.name}
            />

            <h3>{fleet.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};