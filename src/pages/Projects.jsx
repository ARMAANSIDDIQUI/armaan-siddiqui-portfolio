import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Rocket, Layers, Cpu, Globe, Linkedin } from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'
import GlassCard from '../components/ui/GlassCard'

const REAL_WORLD_PROJECTS = [
  {
    title: 'Safely Hands [Live]',
    desc: 'A domestic care service aggregator platform engineered with dynamic service catalogs and lead-capture pipelines; deployed on AWS EC2 with Nginx, Certbot SSL, and high security.',
    tech: ['MERN Stack', 'AWS EC2', 'Nginx', 'Certbot SSL'],
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
    title: 'Shashwat Enterprises',
    desc: 'Wholesale B2B E-commerce platform specialized in food products and enterprise solutions.',
    tech: ['E-commerce', 'Web Development', 'B2B'],
    live: 'https://shashwatmbd.in/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Chatorzzz',
    desc: 'Premium sweets and candies e-commerce destination with a playful, high-energy interface.',
    tech: ['React', 'Node.js', 'Tailwind', 'E-commerce'],
    live: 'https://chatorzzz.in/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Digital Honest',
    desc: 'Most trusted advertising agency in Dehradun. "Offline ho ya Online, Brand sab jagah!" — Specializing in outdoor hoardings, transit branding, and digital marketing.',
    tech: ['Branding', 'Digital Ads', 'Outdoor Advertising'],
    live: 'https://digitalhonest.in/',
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
    title: 'Jyoti Foundation',
    desc: 'Charitable NGO dedicated to preventing blindness and restoring vision with free eye care and surgeries, helping organizations to assert their online presence.',
    tech: ['React.js', 'NGO Platform', 'Healthcare UI', 'Web Development'],
    live: 'http://jyoti-foundation.org/',
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
    title: 'IntelliMatch ATS',
    desc: 'AI-powered resume screening dashboard featuring an algorithmic PDF parser and FAISS RAG search engine for semantic candidate queries, cutting screening and interview-prep time by 80%. Automated interview question generator (LangChain + Gemini/GPT-4o) with one-click PDF export.',
    tech: ['Python', 'Flask', 'React.js', 'LangChain', 'FAISS RAG', 'Gemini API', 'GPT-4o'],
    live: '',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Freelance Portfolio',
    desc: 'My personal freelance portfolio showcasing various client projects and commercial work.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    live: 'https://armaansiddiqui.honestprinters.in',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'CODE++',
    desc: 'Competitive DSA programming platform featuring a secure multilingual execution engine (Judge0 API), real-time 1v1 social match-ups via WebSockets, and performance tracking analytics dashboards for 500+ LeetCode problems.',
    tech: ['React', 'Node.js', 'MongoDB', 'Judge0 API', 'Socket.io'],
    live: 'https://code-plus-plus.armaansiddiqui.online/',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'LeetCode (500+ Problems Solved)',
    desc: 'Algorithmic problem solving and competitive programming across Dynamic Programming, Graph Algorithms, Binary Trees, and System Design. Consistent daily practice with optimal space/time complexity solutions.',
    tech: ['LeetCode', 'DSA', 'Algorithms', 'C++', 'Python', 'Competitive Programming'],
    live: 'https://leetcode.com/u/armaansiddiqui/',
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
    desc: 'Dual-stream CNN for radar-based micro-Doppler spectrogram classification (drones vs birds) achieving 94%+ validation accuracy with real-time synthetic data generators.',
    tech: ['CNN', 'TensorFlow', 'Keras', 'Deep Learning', 'Data Augmentation'],
    live: '',
    code: 'https://github.com/ARMAANSIDDIQUI'
  },
  {
    title: 'Crop Wizard',
    desc: 'MERN application integrated with a Python Flask microservice deploying an Ensemble Classifier (Random Forest, XGBoost) to suggest optimal crops with 96% accuracy.',
    tech: ['MERN Stack', 'Flask', 'XGBoost', 'Random Forest', 'Ensemble Learning'],
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

const LazyIframe = ({ src, title, style }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const iframeRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={iframeRef}
      style={{
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}
    >
      {isLoaded ? (
        <iframe
          src={src}
          title={title}
          style={style}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}
        >
          Loading live preview...
        </div>
      )}
    </div>
  );
};

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
          p.live.includes('leetcode.com') ? (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle at center, rgba(255, 161, 22, 0.15), rgba(15, 23, 42, 0.9))',
              gap: 12
            }}>
              <SiLeetcode size={54} color="#FFA116" />
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFA116', letterSpacing: '0.5px' }}>
                @armaansiddiqui
              </span>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                500+ Solved • Competitive Programming
              </span>
            </div>
          ) : (
            <LazyIframe
              src={p.live}
              title={p.title}
              style={{ width: '100%', height: '100%', border: 'none', filter: 'grayscale(0.2) contrast(1.1)' }}
            />
          )
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
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 8, minHeight: '2.8rem', display: 'flex', alignItems: 'center' }}>{p.title}</h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.6, flexGrow: 1, minHeight: '4.8rem' }}>{p.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20, minHeight: '64px', alignContent: 'flex-start' }}>
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
          {p.code && p.code !== '#' && (
            <motion.a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'var(--text-main)',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <Github size={16} /> Code
            </motion.a>
          )}
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
                background: p.live.includes('leetcode.com')
                  ? 'linear-gradient(90deg, #f59e0b, #d97706)'
                  : 'linear-gradient(90deg, var(--primary), var(--secondary))',
                color: '#fff',
                padding: '10px 18px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: p.live.includes('leetcode.com')
                  ? '0 4px 15px rgba(245, 158, 11, 0.35)'
                  : '0 4px 15px rgba(0,119,255,0.3)'
              }}
            >
              <ExternalLink size={16} /> {p.live.includes('leetcode.com') ? 'LeetCode Profile' : 'Open Project'}
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
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
          marginBottom: 40
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)' }}>
            <Rocket size={32} color="var(--primary)" />
          </div>
          <div>
            <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>
              All Projects
            </h1>
            <p style={{ color: 'var(--text-muted)', margin: '4px 0 0 0', fontSize: '0.95rem' }}>
              Explore real-world client deliverables, full-stack systems & competitive programming.
            </p>
          </div>
        </div>

        {/* Profile Badges */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <motion.a
            href="https://leetcode.com/u/armaansiddiqui/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              borderRadius: '10px',
              background: 'rgba(255, 161, 22, 0.12)',
              border: '1px solid rgba(255, 161, 22, 0.35)',
              color: '#FFA116',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxShadow: '0 2px 10px rgba(255, 161, 22, 0.15)'
            }}
          >
            <SiLeetcode size={18} /> LeetCode
          </motion.a>

          <motion.a
            href="https://github.com/ARMAANSIDDIQUI"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#f1f5f9',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600
            }}
          >
            <Github size={18} /> GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/armaan-siddiqui-6902ba294"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              borderRadius: '10px',
              background: 'rgba(10, 102, 194, 0.15)',
              border: '1px solid rgba(10, 102, 194, 0.35)',
              color: '#38bdf8',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600
            }}
          >
            <Linkedin size={18} /> LinkedIn
          </motion.a>
        </div>
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
