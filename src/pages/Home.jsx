import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Mail, Github, Linkedin, Mail as MailIcon } from 'lucide-react'
import { FaLaptopCode, FaRocket } from 'react-icons/fa'
import GlassCard from '../components/ui/GlassCard'
import '../CSS/Contact.css'
import '../index.css'

export default function Home() {
  const professions = [
    'Full Stack Developer',
    'Machine Learning Enthusiast',
    "Data Science Aspirant",
    'B.Tech CSE Student',
    'React Developer',
  ]

  const quickLinks = [
    { img: "/github.png", title: "GitHub", link: "https://github.com/ARMAANSIDDIQUI" },
    { img: "/linkedin.png", title: "LinkedIn", link: "https://www.linkedin.com/in/armaan-siddiqui-6902ba294" },
    { img: "/gmail.png", title: "Email", link: "mailto:armaansiddiqui.pms@gmail.com" },
    { img: "/whatsapp.png", title: "WhatsApp", link: "https://wa.me/917017086408" },
  ];

  return (
    <section className="home-container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>

        {/* Left: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="home-info"
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '8px', letterSpacing: '1px' }}
            >
              HELLO THERE, I'M
            </motion.div>

            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '16px' }}>
              <span className="text-gradient">Armaan Siddiqui</span>
            </h1>

            <p className="typing-effect" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '500px', borderLeft: '3px solid var(--secondary)', paddingLeft: '16px' }}>
              Full Stack Developer | ML & DS Enthusiast | Tech Explorer
            </p>
          </div>

          {/* Profession Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {professions.map((role, i) => (
              <span
                key={i}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '0.9rem',
                  color: 'var(--highlight)'
                }}
              >
                {role}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
            <button className="vote-btn agree" onClick={() => window.location.href = '#contact'}>Contact Me</button>
            <button className="vote-btn disagree" onClick={() => window.location.href = '/projects'}>View Work</button>
          </div>

          {/* Interactive Info Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '20px' }}>
            <GlassCard style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                <MapPin size={20} color="var(--secondary)" />
                <div>
                  <small style={{ display: 'block', fontSize: '12px' }}>Location</small>
                  <strong style={{ color: 'var(--text-main)' }}>Moradabad, India</strong>
                </div>
              </div>
            </GlassCard>

            <GlassCard style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                <Briefcase size={20} color="var(--primary)" />
                <div>
                  <small style={{ display: 'block', fontSize: '12px' }}>Status</small>
                  <strong style={{ color: 'var(--text-main)' }}>Available for Hire</strong>
                </div>
              </div>
            </GlassCard>
          </div>

        </motion.div>


        {/* Right: Floating Photo */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ position: 'relative', width: '380px', height: '380px' }}>
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
              opacity: 0.2,
              filter: 'blur(30px)',
              zIndex: 0
            }} />

            {/* Glass Container */}
            <GlassCard
              className="photo-card"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))'
              }}>
              <img
                src="/armaan.png"
                alt="Armaan Siddiqui"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              />
            </GlassCard>

            {/* Floating Elements (Decorations) */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: '-20px', right: '-20px', zIndex: 2 }}
            >
              <GlassCard style={{ padding: '12px', borderRadius: '12px' }}>
                <FaLaptopCode size={24} color="var(--primary)" />
              </GlassCard>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', bottom: '40px', left: '-30px', zIndex: 2 }}
            >
              <GlassCard style={{ padding: '12px', borderRadius: '12px' }}>
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
        style={{ marginTop: '60px', textAlign: 'center' }}
      >
        <motion.div className="contact-links" style={{ marginBottom: 0 }}>
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
        </motion.div>
      </motion.div>

    </section>
  )
}