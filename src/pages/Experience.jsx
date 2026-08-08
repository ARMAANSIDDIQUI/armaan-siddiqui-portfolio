import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Rocket } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";

const EXPERIENCES = [
  {
    role: "Software Development Engineer Intern",
    company: "GoZoom Technologies",
    date: "July 2025 – June 2026",
    location: "Remote",
    desc: [
      "Migrated client-side logic to the backend and optimised MongoDB aggregation with pagination, achieving a 30–40% improvement in system performance.",
      "Delivered 5+ end-to-end full-stack web and mobile applications for international clients, independently managing requirements gathering, development with React.js and Node.js, and AWS deployment."
    ],
    type: "internship"
  },
  {
    role: "Summer Internship Trainee",
    company: "Softpro India Computer Technologies",
    date: "July 2025 - Aug 2025",
    location: "Lucknow (Remote/Hybrid)",
    desc: [
      "Domain: Python with Data Science.",
      "Achieved an 'A+' Grade (Very Good/Excellent).",
      "Successfully completed the 45-day program administered by an ISO 9001:2015 certified company."
    ],
    type: "training"
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    date: "2025 - Present",
    location: "Remote",
    desc: [
      "Building custom websites and delivering impactful tech solutions for diverse clients.",
      "Delivered projects like 'House of Specials', 'Rotary Club Sanskriti', and 'Jyotidham Toronto'.",
      "Managing end-to-end development from requirements gathering to deployment."
    ],
    type: "freelance"
  }
];

export default function Experience() {
  return (
    <section className="container" style={{ padding: "60px 20px", maxWidth: "1000px", margin: "0 auto", minHeight: '100vh' }}>
      <GlassCard style={{ padding: "40px 20px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
            <Rocket size={32} className="text-cyan-400" color="var(--primary)" />
            <h2 className="text-gradient" style={{ fontSize: "2.5rem", fontWeight: 800, margin: 0 }}>
              Professional Journey
            </h2>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            My timeline of internships, freelance work, and training.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", paddingLeft: "10px" }}>

          {/* Vertical Line */}
          <div
            style={{
              position: "absolute",
              left: "29px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--primary), var(--secondary), #22c55e)",
              opacity: 0.3
            }}
          />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              style={{
                position: "relative",
                marginBottom: 50,
                paddingLeft: "40px"
              }}
            >
              {/* Timeline Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: exp.type === 'internship' ? 'var(--primary)' : exp.type === 'freelance' ? '#22c55e' : 'var(--secondary)',
                  border: "4px solid #020617",
                  boxShadow: `0 0 10px ${exp.type === 'internship' ? 'var(--primary)' : exp.type === 'freelance' ? '#22c55e' : 'var(--secondary)'}`,
                  zIndex: 2
                }}
              />

              {/* Content Card */}
              <GlassCard
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: "24px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))"
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: 'center',
                      gap: 6,
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      background: "rgba(255,255,255,0.05)",
                      color: "var(--text-muted)",
                      border: "1px solid rgba(255,255,255,0.1)"
                    }}
                  >
                    <Calendar size={12} /> {exp.date}
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: 'center',
                      gap: 6,
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      background: "rgba(255,255,255,0.05)",
                      color: "var(--text-muted)",
                      border: "1px solid rgba(255,255,255,0.1)"
                    }}
                  >
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>

                <h3 style={{ color: "var(--text-main)", fontSize: "1.4rem", margin: "0 0 4px 0", display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Briefcase size={20} className="text-gray-400" /> {exp.role}
                </h3>
                <h4 style={{ color: exp.type === 'internship' ? 'var(--primary)' : exp.type === 'freelance' ? '#22c55e' : 'var(--secondary)', fontSize: "1.1rem", margin: "0 0 15px 0" }}>
                  {exp.company}
                </h4>

                <ul style={{ paddingLeft: "20px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                  {exp.desc.map((point, idx) => (
                    <li key={idx} style={{ marginBottom: "6px" }}>{point}</li>
                  ))}
                </ul>
              </GlassCard>

            </motion.div>
          ))}

        </div>

      </GlassCard>
    </section>
  );
}