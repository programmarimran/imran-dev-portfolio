import React from "react";
import { jsPDF } from "jspdf";

const DownloadFullCV = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 15;

    const highlightColor = "#1565c0"; // nice blue color for headings

    // Title: Name
    doc.setFontSize(24);
    doc.setTextColor(highlightColor);
    doc.setFont("helvetica", "bold");
    doc.text("Md Imran Hasan", 20, y);
    y += 12;

    // Subtitle: Role & education
    doc.setFontSize(14);
    doc.setTextColor("#000000");
    doc.setFont("helvetica", "normal");
    doc.text("MERN Stack Developer | B.S.S. (Honours), Political Science – 2nd Year", 20, y);
    y += 18;

    // Contact Information Header
    doc.setFontSize(16);
    doc.setTextColor(highlightColor);
    doc.setFont("helvetica", "bold");
    doc.text("Contact Information:", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor("#000000");
    const contacts = [
      "Address: Gazipur, Dhaka, Bangladesh",
      "Mobile: +880‑1715994657",
      "Email: programmarimran@gmail.com",
      "Portfolio: https://imran-dev-portfolio.web.app",
      "LinkedIn: https://www.linkedin.com/in/md-imran-hasan-664907354/",
      "GitHub: https://github.com/programmarimran",
    ];
    contacts.forEach(line => {
      doc.text(line, 25, y);
      y += 8;
    });

    y += 12;
    // Professional Summary Header
    doc.setFontSize(16);
    doc.setTextColor(highlightColor);
    doc.setFont("helvetica", "bold");
    doc.text("Professional Summary:", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor("#000000");
    doc.setFont("helvetica", "normal");
    const summary =
      "Passionate MERN‑stack developer with hands‑on experience building scalable, user‑centric web applications using MongoDB, Express.js, React, and Node.js. Adept at crafting clean UI with Tailwind CSS / DaisyUI and implementing efficient backend APIs. Currently pursuing a B.S.S. (Honours) in Political Science (2nd year) and actively contributing to several full‑stack and frontend projects.";
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, y);
    y += splitSummary.length * 8 + 10;

    // Technical Skills Header
    doc.setFontSize(16);
    doc.setTextColor(highlightColor);
    doc.setFont("helvetica", "bold");
    doc.text("Technical Skills:", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor("#000000");
    doc.setFont("helvetica", "normal");
    const skills = [
      "Languages & Frameworks: JavaScript (ES6+), React, Node.js, Express.js",
      "Frontend: HTML5, CSS3, Tailwind CSS, DaisyUI, Bootstrap, React Router, React Icons",
      "Backend / Database: REST API, MongoDB, Mongoose, Firebase Auth",
      "Tools: Git & GitHub, VS Code, JSON, Context API, DaisyUI Theme Switcher",
      "Others: Responsive Design, SPA Architecture, JWT, CRUD operations",
    ];
    skills.forEach(skill => {
      doc.text("• " + skill, 25, y);
      y += 8;
    });

    y += 12;
    // Key Projects Header
    doc.setFontSize(16);
    doc.setTextColor(highlightColor);
    doc.setFont("helvetica", "bold");
    doc.text("Key Projects:", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor("#000000");
    const projects = [
      { name: "HireNest (Service hiring platform)", desc: "Service booking,  downloadable PDF invoice" },
      { name: "Diverse Dish (Multinational recipe app)", desc: "Browse, update, and view recipes and filtering" },
      { name: "CurioBox (Kids Surprise Store)", desc: "Playful UI for kids; dynamic cart & fun animations" },
      { name: "Delivery Parcel Monitoring App", desc: "Unique parcel ID generation, district JSON integration, location tracking" },
      { name: "Portfolio Website", desc: "Personal portfolio, responsive layout, GitHub integration" },
      { name: "Admin Dashboard UI", desc: "Clean UI with responsive grid layout for admin interfaces" },
      { name: "Restaurant Landing Page", desc: "Hero, services, contact sections with full responsiveness" },
    ];
    projects.forEach(proj => {
      doc.setFont("helvetica", "bold");
      doc.text("• " + proj.name, 25, y);
      y += 8;

      doc.setFont("helvetica", "normal");
      const descLines = doc.splitTextToSize(proj.desc, 160);
      doc.text(descLines, 30, y);
      y += descLines.length * 8 + 6;
    });

    y += 8;
    // Education Header
    doc.setFontSize(16);
    doc.setTextColor(highlightColor);
    doc.setFont("helvetica", "bold");
    doc.text("Education:", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor("#000000");
    const education = [
      "B.S.S. (Honours), Political Science – 2nd Year | Abdul Awal University College (National University Affiliated) | 2022 – Present",
      "Higher Secondary Certificate (HSC) | Mymensingh Board | 2022",
      "Secondary School Certificate (SSC) | Mymensingh Board | 2020",
    ];
    education.forEach(edu => {
      doc.setFont("helvetica", "normal");
      doc.text(edu, 25, y);
      y += 8;
    });

    y += 8;
    // Languages Header
    doc.setFontSize(16);
    doc.setTextColor(highlightColor);
    doc.setFont("helvetica", "bold");
    doc.text("Languages:", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor("#000000");
    const langs = [
      "Bengali – Native",
      "English – Intermediate (practising daily)",
      "Arabic – Reading (Qur'an)",
    ];
    langs.forEach(lang => {
      doc.text("• " + lang, 25, y);
      y += 8;
    });

    y += 10;
    // Extracurricular & Leadership Header
    doc.setFontSize(16);
    doc.setTextColor(highlightColor);
    doc.setFont("helvetica", "bold");
    doc.text("Extracurricular & Leadership:", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor("#000000");
    const extra = [
      "Active content creator on Facebook & YouTube (coding tutorials)",
      "Volunteer accounts management at local mosque (printable ledger design using Bengali fonts)",
      "Quran study & practice",
    ];
    extra.forEach(item => {
      doc.text("• " + item, 25, y);
      y += 8;
    });

    y += 10;
    // Achievements Header
    doc.setFontSize(16);
    doc.setTextColor(highlightColor);
    doc.setFont("helvetica", "bold");
    doc.text("Achievements:", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor("#000000");
    const achv = [
      "Completed 8+ personal & team projects, including 3 full-stack MERN applications",
      "Consistently ranked among top learners in Programming Hero bootcamp",
    ];
    achv.forEach(item => {
      doc.text("• " + item, 25, y);
      y += 8;
    });

    y += 20;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor("#444444");
    doc.text("References: Available on request", 20, y);

    // Save the PDF
    doc.save("Md_Imran_Hasan_Professional_CV.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="btn btn-primary"
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      Resume
      
    </button>
  );
};

export default DownloadFullCV;
