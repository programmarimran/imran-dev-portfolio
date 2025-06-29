import React from "react";

const educations = [
  {
    degree: "B.S.S. (Honours), Political Science",
    institution: "Abdul Awal University College (NU Affiliated)",
    year: "2022 – Present",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mymensingh Board",
    year: "2022",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Mymensingh Board",
    year: "2020",
  },
];

const EducationSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
        Education
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="card bg-[#5a4f85] shadow-md border-l-4 border-primary p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-sm text-gray-300">{edu.institution}</p>
            <p className="text-sm text-gray-400">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
