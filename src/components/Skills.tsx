import React from "react";

export const Skills: React.FC = () => {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML & CSS",
    "Supabase",
    "Vercel",
    "UI Design",
    "Business System Development",
  ];

  return (
    <section className="skills">
      <h2>Keahlian</h2>

      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};