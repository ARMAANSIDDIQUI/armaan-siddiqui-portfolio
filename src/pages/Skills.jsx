import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Cpu, Server, Layers, Terminal, Cloud, PenTool, Layout } from "lucide-react";
import "../CSS/Skills.css";

const SKILLS = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
];

const ROWS = [
  [
    { title: "Languages", icon: <Code size={20} />, items: ["Python", "C", "C++", "JavaScript (ES6+)", "TypeScript"] },
    { title: "Frontend", icon: <Layout size={20} />, items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux"] },
    { title: "Backend", icon: <Server size={20} />, items: ["Node.js", "Express", "REST APIs", "FastAPI"] },
    { title: "Databases", icon: <Database size={20} />, items: ["MongoDB", "MySQL", "Firebase", "SQL Server"] },
  ],
  [
    {
      title: "Machine Learning & DS",
      icon: <Cpu size={20} />,
      items: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Deep Learning",
        "Neural Networks",
        "EDA",
      ],
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud size={20} />,
      items: ["AWS (EC2, Lambda)", "Google Cloud", "Git/GitHub", "Postman", "Vercel", "VS Code", "Docker", "Linux"],
    },
    {
      title: "Core Concepts",
      icon: <Layers size={20} />,
      items: ["Data Structures & Algorithms", "System Design", "Responsive Design", "Database Testing", "OOPs"],
    },
  ],
];

export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 20; // Reduced padding for tighter packing
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 200);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 60;
      const dy = (Math.random() - 0.5) * 60;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 4000 + Math.random() * 3000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section className="skills-container" id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Particles/Grid Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 50%, #111 0%, #000 100%)'
      }}>
         {/* Simple CSS Grid overlay */}
         <div style={{
           position: 'absolute',
           width: '200%',
           height: '200%',
           backgroundSize: '50px 50px',
           backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
           transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
           animation: 'gridMove 20s linear infinite'
         }}></div>
         <style>{`
            @keyframes gridMove {
              0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
              100% { transform: perspective(500px) rotateX(60deg) translateY(50px) translateZ(-200px); }
            }
         `}</style>
      </div>

      <div style={{ position: 'relative', zIndex: 1, paddingBottom: 60, maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <Terminal size={40} className="text-cyan-400" />
            <h2 className="text-5xl text-cyan-400 font-semibold mb-0">My Skills</h2>
          </div>
          <div className="w-28 h-[2px] bg-cyan-400 mx-auto my-6"></div>
          <p className="text-gray-400 text-lg text-center max-w-xl mx-auto">
             Technical expertise blended with creativity — explore my core competencies below.
          </p>
        </motion.div>

        {/* Floating Orbs */}
        <motion.div
          className="skills-stage relative mx-auto mb-20"
          ref={stageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "600px",
            borderRadius: "25px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            overflow: "hidden",
            boxShadow: "inset 0 0 60px rgba(0,0,0,0.8)",
            position: "relative",
          }}
        >
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill-circle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "backOut" }}
              whileHover={{
                scale: 1.25,
                zIndex: 10,
                boxShadow: "0 0 25px 5px rgba(0,255,255,0.4)",
                background: "rgba(20,20,20,0.95)",
                border: "1px solid rgba(0,255,255,0.5)"
              }}
              style={{
                width: "90px", // Slightly smaller to fit more
                height: "90px",
                borderRadius: "50%",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(30,30,30,0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(4px)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={s.logo}
                alt={s.name}
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                  marginBottom: "4px",
                }}
              />
              <span
                style={{
                  color: "#e5e5e5",
                  fontSize: "11px",
                  fontWeight: 600,
                  textAlign: 'center',
                  lineHeight: 1.2
                }}
              >
                {s.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Table (Text Section) */}
        <div className="skills-table">
          {ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="skills-row">
              {row.map((col, colIndex) => (
                <motion.div
                  key={col.title}
                  className="skill-box"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.04)" }}
                  transition={{
                    duration: 0.5,
                    delay: (rowIndex + colIndex) * 0.1,
                  }}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    padding: "24px",
                    borderRadius: "16px"
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 10 }}>
                    <span style={{ color: '#0ea5e9' }}>{col.icon}</span>
                    <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>{col.title}</h3>
                  </div>
                  <ul style={{ paddingLeft: 20 }}>
                    {col.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        whileHover={{ x: 6, color: "#0ea5e9" }}
                        style={{ marginBottom: 6, color: '#aaa', fontSize: '0.95rem' }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}