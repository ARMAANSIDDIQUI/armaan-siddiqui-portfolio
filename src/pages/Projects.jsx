import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Rocket, Layers, Cpu, Globe } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'

const REAL_WORLD_PROJECTS = [
  {
    title: 'Safely Hands',
    desc: 'A technology-enabled platform connecting users with trusted, background-verified domestic help and care professionals. Features include rigorous staff verification and transparent pricing.',
    tech: ['React', 'Node.js', 'Web Platform', 'Service Aggregator'],
    live: 'https://safelyhands.com/',
    code: '#'
  },
  {
    title: 'Honest Graphics & Printers',
    desc: 'E-commerce platform with Google OAuth, safe payment gateway, dual theme (Light & Dark), and a lightweight 3D physics engine.',
    tech: ['E-commerce', 'Google OAuth', 'Dual Theme', 'Lightweight 3D Engine', 'Security'],
    live: 'https://honestprinters.in/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
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
  {
    title: 'Freelance Portfolio',
    desc: 'My personal freelance portfolio showcasing various client projects and commercial work.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    live: 'https://armaansiddiqui.honestprinters.in',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
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
    <GlassCard
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
      }}
    >
      {/* Visual Preview */}
      <div style={{
        width: '100%',
        height: '240px',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
        background: 'rgba(0, 0, 0, 0.3)', // Dark background behind iframe
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        {p.live ? (
          <iframe
            src={p.live}
            title={p.title}
            style={{ width: '100%', height: '100%', border: 'none', filter: 'grayscale(0.2) contrast(1.1)' }}
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
            background: 'linear-gradient(45deg, rgba(6,182,212,0.1), rgba(0,0,0,0.4))',
            color: 'var(--primary)'
          }}>
            <Code size={48} />
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 8 }}>{p.title}</h3>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.6, flexGrow: 1 }}>{p.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {p.tech.map((t) => (
            <span
              key={t}
              style={{
                background: 'rgba(0,119,255,0.1)',
                border: '1px solid rgba(0,119,255,0.2)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                color: 'var(--highlight)',
                fontWeight: 500
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 'auto' }}>
          {p.live && (
            <motion.a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                color: '#fff',
                padding: '10px 18px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(0,119,255,0.3)'
              }}
            >
              <ExternalLink size={16} /> Open Project
            </motion.a>
          )}
        </div>
      </div>
    </GlassCard>
  )
}

export default function Projects() {
  return (
    <section
      style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '40px 20px',
        minHeight: '100vh'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}
      >
        <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)' }}>
          <Rocket size={32} color="var(--primary)" />
        </div>
        <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>
          All Projects
        </h1>
      </motion.div>

      {/* Real World / Live Projects Section */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{
          color: 'var(--text-main)',
          fontSize: '1.4rem',
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <span style={{ width: '4px', height: '24px', background: '#22c55e', borderRadius: '2px' }}></span>
          <Globe size={20} color="#22c55e" /> Real World & Client Projects
        </h3>
        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {REAL_WORLD_PROJECTS.map((p, idx) => (
            <ProjectCard key={idx} p={p} />
          ))}
        </div>
      </div>

      {/* Full Stack Section */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{
          color: 'var(--text-main)',
          fontSize: '1.4rem',
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <span style={{ width: '4px', height: '24px', background: 'var(--primary)', borderRadius: '2px' }}></span>
          <Layers size={20} color="var(--primary)" /> Full Stack Development
        </h3>
        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {FULL_STACK_PROJECTS.map((p, idx) => (
            <ProjectCard key={idx} p={p} />
          ))}
        </div>
      </div>

      {/* ML/DS Section */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{
          color: 'var(--text-main)',
          fontSize: '1.4rem',
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <span style={{ width: '4px', height: '24px', background: '#a855f7', borderRadius: '2px' }}></span>
          <Cpu size={20} color="#a855f7" /> Machine Learning & Data Science
        </h3>
        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {ML_DS_PROJECTS.map((p, idx) => (
            <ProjectCard key={idx} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
