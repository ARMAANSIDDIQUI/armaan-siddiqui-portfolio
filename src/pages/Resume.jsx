import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, User, MapPin, Mail, Phone, GraduationCap, Briefcase, Rocket, Settings, Code, Linkedin, Download } from "lucide-react";

export default function Resume() {
  const [activeResume, setActiveResume] = useState("fullstack");

  const resumes = {
    fullstack: {
      title: "Full Stack Resume",
      file: "/resume_fullstack.pdf", // Placeholder: User needs to upload resume_fullstack.pdf
    },
    ml: {
      title: "ML/DS Resume",
      file: "/resume_ml_ds.pdf", // Placeholder: User needs to upload resume_ml.pdf
    },
    combined: {
      title: "Combined Resume",
      file: "/resume_combined.pdf", // Using existing resume.pdf
    },
  };

  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
        >
          <FileText size={28} className="text-cyan-400" />
          <h2 style={{ fontSize: 28, color: "#00b4ff", margin: 0 }}>
            Resume
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <User size={24} className="text-cyan-400" />
                <h3 style={{ fontSize: 24, color: "#00b4ff", margin: 0 }}>
                ARMAAN SIDDIQUI
                </h3>
            </div>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              B.Tech CSE Student | Full Stack Developer | ML Enthusiast
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: "4px 0", fontSize: 14, color: "#aaa" }}>
               <MapPin size={14} /> Moradabad, Uttar Pradesh, India
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15, margin: "4px 0", fontSize: 14, color: "#aaa" }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Mail size={14} /> armaansiddiqui.pms@gmail.com</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Phone size={14} /> +91 7017086408</span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Aspiring full-stack developer with a focus on creating responsive and scalable mobile and web apps. 
              Enthusiastic about utilising frameworks, databases, and cloud platforms to implement cutting-edge solutions 
              and create flawless UI/UX. Also passionate about Machine Learning and Data Science.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
             <GraduationCap size={20} className="text-cyan-400" />
             <h4 style={{ fontSize: 20, color: "#00b4ff", margin: 0 }}>
                Education
             </h4>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech in Computer Science</strong> — MIT Moradabad (AKTU), 2022–2026 <br />
              <span style={{ color: "#aaa" }}>Percentage (till 6th sem): 74.06%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board — P.M.S. Public School</strong> (CBSE, 2022) <br />
              <span style={{ color: "#aaa" }}>Percentage: 82.8%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — P.M.S. Public School</strong> (CBSE, 2020)
              <br />
              <span style={{ color: "#aaa" }}>Percentage: 79.4%</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
             <Briefcase size={20} className="text-cyan-400" />
             <h4 style={{ fontSize: 20, color: "#00b4ff", margin: 0 }}>
                Experience
             </h4>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Software Engineer Intern (Leading to Full-Time)</strong> — Gozoom Technologies (July 2025 - Present) <br />
              <span style={{ color: "#aaa" }}>Full-stack development, UI components, API integrations. Transitioning to Full-Time July 2026.</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Summer Internship Trainee</strong> — Softpro India Computer Technologies (July 2025 - Aug 2025) <br />
              <span style={{ color: "#aaa" }}>Python with Data Science. Achieved "A+" Grade.</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Freelance Web Developer</strong> — Self-employed (2025 - Present) <br />
              <span style={{ color: "#aaa" }}>Building custom websites and delivering impactful tech solutions.</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
             <Rocket size={20} className="text-cyan-400" />
             <h4 style={{ fontSize: 20, color: "#00b4ff", margin: 0 }}>Key Projects</h4>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}> <span style={{ color: '#00b4ff' }}>1.</span> <strong>RADMIC</strong>: Radar-based Drone-Bird Classification using Micro-Doppler.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}> <span style={{ color: '#00b4ff' }}>2.</span> <strong>CODE++</strong>: DSA platform with Judge0 API & social mechanics.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}> <span style={{ color: '#00b4ff' }}>3.</span> <strong>HeartDiseasePredictor</strong>: CV Risk Classifier (86% acc) using ANN.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}> <span style={{ color: '#00b4ff' }}>4.</span> <strong>GraphXpert</strong>: ML app for trend prediction and visualization.</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
             <Settings size={20} className="text-cyan-400" />
             <h4 style={{ fontSize: 20, color: "#00b4ff", margin: 0 }}>Skills</h4>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "C",
              "C++",
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "SQL",
              "Tailwind CSS",
              "AWS",
              "Git",
              "Scikit-learn",
              "Pandas",
              "NumPy",
              "Deep Learning"
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "LeetCode", link: "https://leetcode.com/u/armaansiddiqui/", icon: <Code size={18} /> },
            { name: "GitHub", link: "https://github.com/ARMAANSIDDIQUI", icon: <Code size={18} /> },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/armaan-siddiqui-6902ba294", icon: <Linkedin size={18} /> },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              {site.icon} {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Resume PDF Viewer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 60,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 40
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
            <FileText size={28} className="text-white" />
            <h4 style={{ fontSize: 24, color: "#fff", margin: 0 }}>
              View Resume
            </h4>
          </div>

          {/* Resume Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: 15, marginBottom: 20, flexWrap: "wrap" }}>
            {Object.keys(resumes).map((key) => (
              <button
                key={key}
                onClick={() => setActiveResume(key)}
                style={{
                  background: activeResume === key ? "#00b4ff" : "rgba(255,255,255,0.05)",
                  color: activeResume === key ? "#fff" : "#aaa",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "all 0.3s ease"
                }}
              >
                {resumes[key].title}
              </button>
            ))}
          </div>

          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "#111",
              height: "650px"
            }}
          >
            <iframe
              src={resumes[activeResume].file}
              title={resumes[activeResume].title}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>

          {/* Download Button */}
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <motion.a
              href={resumes[activeResume].file}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: 'center',
                gap: 8,
                background: "#00b4ff",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: 0.3,
              }}
            >
              <Download size={18} /> Download {resumes[activeResume].title}
            </motion.a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
