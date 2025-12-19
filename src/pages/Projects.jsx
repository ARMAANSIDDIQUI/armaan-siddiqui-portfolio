import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Rocket, Layers, Cpu, Globe } from 'lucide-react'

// Projects reordered by Category and "Worth"

const REAL_WORLD_PROJECTS = [
  {
    title: 'Adarsh Dham',
    desc: 'Full-stack ashram management portal with booking calendars and real-time tree-view.',
    tech: ['React', 'Node', 'AWS EC2', 'Elastic IP'],
    live: 'https://adarshdham.com/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Chatorzzz',
    desc: 'Wholesale E-commerce platform for food products designed for B2B transactions.',
    tech: ['E-commerce', 'Web Development'],
    live: 'https://chatorzzz.in/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Rotary Club Sanskriti',
    desc: 'Dynamic website with admin panel, CRUD operations, and automated emails.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind'],
    live: 'https://www.rotaryclubsanskritimoradabad.org/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Jyotidham Toronto',
    desc: 'Ashram Portal for updates, dynamic content, and Maps API.',
    tech: ['React', 'Maps API', 'Dynamic Content'],
    live: 'https://jyotidham.ca/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'House of Specials',
    desc: 'Business website with static content, automated emails, and AWS EC2 deployment.',
    tech: ['Static', 'AWS EC2', 'Email Automation'],
    live: 'https://houseofspecials.in/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  }
]

const FULL_STACK_PROJECTS = [
  // Tier 1: Major Full Stack / Complex Logic
  {
    title: 'CODE++',
    desc: 'DSA programming platform with Judge0 API, real-time social mechanics, and global leaderboards.',
    tech: ['MERN', 'Tailwind', 'ShadcnUI', 'Judge0 API'],
    live: 'https://codeplusplus-lake.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Kanban Board App',
    desc: 'Interactive drag-and-drop Kanban board with column-based task management and Redux state.',
    tech: ['React', 'Redux Toolkit', 'Tailwind', 'DnD'],
    live: 'https://kanan-board-app.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'EZ-Shop-n-Ship',
    desc: 'Responsive e-commerce frontend with 5-theme switcher, Framer Motion animations, and admin dashboard.',
    tech: ['React.js', 'Tailwind', 'Framer Motion', 'Context API'],
    live: 'https://ez-shop-n-ship.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Crop Wizard Frontend',
    desc: 'Interactive frontend interface for the ML-based crop recommendation system.',
    tech: ['React', 'Frontend', 'ML Integration'],
    live: 'https://crop-wizard-frontend.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'TrustNet Admin Portal',
    desc: 'Admin dashboard prototype for TrustNet Cyber Corp.',
    tech: ['React', 'Admin Dashboard'],
    live: 'https://trustnetcybercop.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'TrustNet Cyber Corp',
    desc: 'Professional frontend for a cybersecurity firm (Hackathon Project).',
    tech: ['React', 'Tailwind', 'Frontend'],
    live: 'https://trustnetcybercorp-frontend.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Movie Junction',
    desc: 'Movie discovery app with TMDB API, dark theme, and real-time search.',
    tech: ['HTML5', 'JS', 'TMDB API', 'CSS Modules'],
    live: 'https://armaansiddiqui.github.io/Movie-Junction/',
    code: 'https://github.com/ARMAANSIDDIQUI/Movie-Junction'
  },
  {
    title: 'Weather App (React)',
    desc: 'Live weather dashboard with autocomplete search, real-time metrics, dynamic icons, and debounce optimization.',
    tech: ['ReactJS', 'OpenWeatherMap API', 'Async/Await'],
    live: 'https://weather-app-react-puce-five.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Smart To-Do App',
    desc: 'Feature-rich task manager with 4 themes, grid/list views, and modal-based editing.',
    tech: ['ReactJS', 'Hooks', 'CSS', 'Local Storage'],
    live: 'https://todo-app-git-main-armaansiddiquis-projects.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Interactive Comment Section',
    desc: 'A Reddit-like nested comment system with upvote/downvote and reply functionality.',
    tech: ['React', 'CSS', 'Interactive UI'],
    live: 'https://task-1-comment-section.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Internship Presentation',
    desc: 'Interactive presentation deck built with React for DS/ML internship training.',
    tech: ['React', 'Presentation UI'],
    live: 'https://internship-presentation-amber.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Amazon Clone Prototype',
    desc: 'Early learning project attempting to replicate Amazon core UI/UX features.',
    tech: ['React', 'CSS', 'Prototype'],
    live: 'https://shopping-site-sample-tawny.vercel.app/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Basic Weather App',
    desc: 'A simple weather application built using vanilla HTML, CSS, and JavaScript during early learning phase.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://armaansiddiqui.github.io/weather_app/',
    code: 'https://github.com/ARMAANSIDDIQUI/weather_app'
  }
]

const ML_DS_PROJECTS = [
  // Tier 1: Deep Learning / Research / High Complexity
  {
    title: 'RADMIC',
    desc: 'Radar-based Drone-Bird Classification using Micro-Doppler Signatures and CNN.',
    tech: ['CNN', 'Keras', 'HDF5', 'Deep Learning'],
    live: '',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'CropRecommender',
    desc: 'Ensemble-based model to suggest best-fit crops using soil/climatic data.',
    tech: ['XGBoost', 'RF', 'SVM', 'Joblib'],
    live: '',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'HeartDiseasePredictor',
    desc: 'CV Risk Classifier using clinical features, SMOTE, and ANN (~86% accuracy).',
    tech: ['Scikit-learn', 'ANN', 'Flask', 'SMOTE'],
    live: '',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  
  // Tier 2: Classification / Analysis Tools
  {
    title: 'DistrictSelector',
    desc: 'Classification system to identify suitable districts for crops based on agro-climatic profiles.',
    tech: ['Classification', 'Predictive Analytics'],
    live: '',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'GraphXpert',
    desc: 'Flask-based ML app for CSV trend prediction and visualization.',
    tech: ['Flask', 'Matplotlib', 'Scikit-learn'],
    live: '',
    code: 'https://github.com/ARMAANSIDDIQUI'
  }
]

const ProjectCard = ({ p }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
        border: '1px solid rgba(0,255,255,0.1)',
        borderRadius: 16,
        padding: 24, // Increased padding
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '480px' // Increased height from 480px
      }}
    >
      {/* Interactive Preview (iFrame) or Placeholder */}
      <div style={{ 
        width: '100%', 
        height: '260px', // Increased height from 350px
        borderRadius: 12, 
        overflow: 'hidden', 
        marginBottom: 20,
        background: '#000',
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        {p.live ? (
          <iframe
            src={p.live}
            title={p.title}
            style={{ width: '100%', height: '100%', border: 'none' }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(45deg, #111, #222)',
            color: '#444'
          }}>
            <Code size={48} />
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: 22, color: '#0ea5e9', marginBottom: 8 }}>{p.title}</h3>
        <p style={{ fontSize: 16, color: '#bbb', marginBottom: 16, lineHeight: 1.6, flexGrow: 1 }}>{p.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {p.tech.map((t) => (
            <span
              key={t}
              style={{
                background: 'rgba(0,255,255,0.05)',
                border: '1px solid rgba(0,255,255,0.1)',
                padding: '4px 10px',
                borderRadius: 6,
                fontSize: 13,
                color: '#aaf'
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 'auto' }}>
          <motion.a
            href={p.code}
            target="_blank"
            rel="noreferrer"
            className="btn"
            whileHover={{ scale: 1.08 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(255,255,255,0.05)',
              color: '#0ea5e9',
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 14,
              border: '1px solid rgba(0,255,255,0.1)',
              textDecoration: 'none'
            }}
          >
            <Github size={16} /> Code
          </motion.a>
          {p.live && (
            <motion.a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="btn"
              whileHover={{ scale: 1.08 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 14,
                textDecoration: 'none'
              }}
            >
              <ExternalLink size={16} /> Open
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
      style={{ paddingBottom: 60 }}
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}
        >
          <Rocket size={36} className="text-cyan-400" />
          <h2 className="text-4xl font-semibold text-cyan-400 m-0">
             Projects
          </h2>
        </motion.div>

        {/* Real World / Live Projects Section */}
        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: 20, borderLeft: '4px solid #22c55e', paddingLeft: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Globe size={24} color="#22c55e" /> Real World & Client Projects
        </h3>
        <div className="projects-grid" style={{ display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', marginBottom: 60 }}>
          {REAL_WORLD_PROJECTS.map((p, idx) => (
            <ProjectCard key={idx} p={p} />
          ))}
        </div>

        {/* Full Stack Section */}
        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: 20, borderLeft: '4px solid #06b6d4', paddingLeft: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Layers size={24} color="#06b6d4" /> Full Stack Development
        </h3>
        <div className="projects-grid" style={{ display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', marginBottom: 60 }}>
          {FULL_STACK_PROJECTS.map((p, idx) => (
            <ProjectCard key={idx} p={p} />
          ))}
        </div>

        {/* ML/DS Section */}
        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: 20, borderLeft: '4px solid #a855f7', paddingLeft: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Cpu size={24} color="#a855f7" /> Machine Learning & Data Science
        </h3>
        <div className="projects-grid" style={{ display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))' }}>
          {ML_DS_PROJECTS.map((p, idx) => (
            <ProjectCard key={idx} p={p} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
