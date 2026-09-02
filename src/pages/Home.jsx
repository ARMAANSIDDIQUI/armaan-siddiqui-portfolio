import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Mail, Github, Linkedin, Trophy, Mail as MailIcon } from 'lucide-react'
import { FaLaptopCode, FaRocket } from 'react-icons/fa'
import GlassCard from '../components/ui/GlassCard'
import '../CSS/Home.css'
import '../CSS/Contact.css'
import '../index.css'

export default function Home() {
  const professions = [
    'Software Engineer',
    'Full Stack Developer',
    'Generative AI & RAG Engineer',
    'Machine Learning Practitioner',
    'B.Tech CS Graduate',
  ]

  const quickLinks = [
    { img: "/github.png", title: "GitHub", link: "https://github.com/ARMAANSIDDIQUI" },
    { img: "/linkedin.png", title: "LinkedIn", link: "https://www.linkedin.com/in/armaan-siddiqui-6902ba294" },
    { img: "/leetcode.svg", title: "LeetCode", link: "https://leetcode.com/u/armaansiddiqui/" },
    { img: "/gmail.png", title: "Email", link: "mailto:armaansiddiqui.pms@gmail.com" },
    { img: "/whatsapp.png", title: "WhatsApp", link: "https://wa.me/917017086408" },
  ];

  return (
    <section className="home-container">
      <div className="home-grid">
        {/* Left: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="home-info-section"
        >
          <div className="intro-text">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="greeting"
            >
              HELLO THERE, I'M
            </motion.div>

            <h1 className="main-title">
              <span className="text-gradient">Armaan Siddiqui</span>
            </h1>

            <p className="typing-description">
              Full Stack Developer | ML & DS Enthusiast | Tech Explorer
            </p>
          </div>

          {/* Profession Tags */}
          <div className="profession-pills">
            {professions.map((role, i) => (
              <span key={i} className="profession-tag">
                {role}
              </span>
            ))}
          </div>

          <div className="cta-buttons">
            <button className="vote-btn agree" onClick={() => window.location.href = '#contact'}>Contact Me</button>
            <button className="vote-btn disagree" onClick={() => window.location.href = '/projects'}>View Work</button>
          </div>

          {/* Interactive Info Cards */}
          <div className="info-cards-grid">
            <GlassCard className="info-card achievement">
              <div className="info-card-content">
                <Trophy size={20} color="#fbbf24" />
                <div>
                  <small>GATE 2025</small>
                  <strong>AIR 4358 (DA)</strong>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="info-card">
              <div className="info-card-content">
                <MapPin size={20} color="var(--secondary)" />
                <div>
                  <small>Location</small>
                  <strong>Moradabad, India</strong>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="info-card">
              <div className="info-card-content">
                <Briefcase size={20} color="var(--primary)" />
                <div>
                  <small>Status</small>
                  <strong>Available for Hire</strong>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Right: Floating Photo */}
        <motion.div
          className="home-photo-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="photo-wrapper">
            {/* Rotating Conic Gradient Aura */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="photo-aura"
            />

            {/* Orbital Dashed Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="orbital-ring"
            >
              {/* Orbital Nodes */}
              <div className="orbital-node primary" />
              <div className="orbital-node secondary" />
            </motion.div>

            {/* Glass Container */}
            <GlassCard className="photo-glass-card">
              <img
                src="/armaan2.png"
                alt="Armaan Siddiqui"
                className="profile-img"
              />
            </GlassCard>

            {/* Floating Elements (Decorations) */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="float-icon-top"
            >
              <GlassCard className="icon-badge">
                <FaLaptopCode size={24} color="var(--primary)" />
              </GlassCard>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="float-icon-bottom"
            >
              <GlassCard className="icon-badge">
                <FaRocket size={24} color="var(--secondary)" />
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Socials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="socials-footer"
      >
        <div className="contact-links">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="social-icon"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}