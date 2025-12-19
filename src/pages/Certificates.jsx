import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Scroll, Code, Star, Briefcase, Mic, FileText, CheckCircle } from "lucide-react";

// NPTEL Course Card Component (Technical & Soft Skills)
const NPTELCourseCard = React.memo(({ cert, type, openModal }) => {
  const borderColor = type === 'technical' ? '#0ea5e9' : '#f472b6';
  const scoreColor = type === 'technical' ? '#4ade80' : '#f472b6';

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 }}
      style={{ 
        background: "#1a1a1a", 
        padding: 15, 
        borderRadius: 8, 
        borderLeft: `3px solid ${borderColor}`, 
        cursor: "pointer", 
        display: "flex", 
        flexDirection: "column", 
        gap: 10, 
        minHeight: 280 
      }}
      onClick={() => openModal(cert)}
      whileHover={{ scale: 1.02, background: "#222" }}
    >
      {/* Mini Preview */}
      <div style={{ height: "160px", width: "100%", borderRadius: "6px", overflow: "hidden", background: "#000" }}>
        <img 
            src={cert.img} 
            alt={cert.title} 
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} 
            onError={(e) => { e.target.src = "https://placehold.co/600x400/222/FFF?text=NPTEL"; }}
        />
      </div>
      <div>
        <h5 style={{ color: "#fff", margin: "0 0 5px 0" }}>{cert.title}</h5>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
            <span style={{ color: scoreColor }}>{cert.score}</span>
            <span style={{ color: "#666" }}>{cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
});

// Technical Cert Card Component (non-NPTEL)
const TechnicalCertCard = React.memo(({ cert, openModal }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    style={{
      background: "#1a1a1a",
      borderRadius: 12,
      padding: 16,
      border: "1px solid #333",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minHeight: 280
    }}
    onClick={() => openModal(cert)}
    whileHover={{ scale: 1.03, borderColor: "#0ea5e9" }}
  >
    {/* Image Preview */}
    <div style={{ height: "160px", width: "100%", borderRadius: "8px", overflow: "hidden", background: "#000" }}>
      <img 
        src={cert.img} 
        alt={cert.title} 
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} 
        onError={(e) => { e.target.src = "https://placehold.co/600x400/222/FFF?text=Tech+Cert"; }}
      />
    </div>

    <div>
      <h4 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: 5 }}>{cert.title}</h4>
      <p style={{ color: "#0ea5e9", fontSize: "0.9rem", fontWeight: "bold", marginBottom: 8 }}>{cert.issuer}</p>
      <p style={{ color: "#aaa", fontSize: "0.85rem", marginBottom: 10 }}>{cert.desc}</p>
      <span style={{ fontSize: "0.8rem", color: "#666" }}>Issued: {cert.date}</span>
    </div>
  </motion.div>
));

// NPTEL Achievement Card Component
const NPTELAchievementCard = React.memo(({ achievement, openModal }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    style={{
      background: "rgba(249, 115, 22, 0.05)",
      border: "1px solid rgba(249, 115, 22, 0.2)",
      borderRadius: 12,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      cursor: "pointer",
      minHeight: 280
    }}
    onClick={() => openModal(achievement)}
    whileHover={{ scale: 1.02, borderColor: "#f97316" }}
  >
    {/* Image Preview */}
    <div style={{ height: "160px", width: "100%", borderRadius: "8px", overflow: "hidden", background: "#000" }}>
      <img 
        src={achievement.img} 
        alt={achievement.title} 
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} 
        onError={(e) => { e.target.src = "https://placehold.co/600x400/222/FFF?text=NPTEL+Achievement"; }}
      />
    </div>

    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        {achievement.icon}
        <h4 style={{ color: "#fff", margin: 0, fontSize: "1.1rem" }}>{achievement.title}</h4>
      </div>
      <p style={{ color: "#ccc", fontSize: "0.9rem", margin: "0 0 8px 0" }}>{achievement.desc}</p>
      <span style={{ fontSize: "0.8rem", color: "#888", background: "#222", padding: "2px 8px", borderRadius: 4 }}>
        {achievement.date}
      </span>
    </div>
  </motion.div>
));

// Leadership and Internship Card Component
const LeadershipInternshipCard = React.memo(({ item, type, openModal }) => (
  <motion.div
    initial={{ opacity: 0, x: -15 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 }}
    style={{
      background: "rgba(234, 179, 8, 0.05)",
      border: "1px solid rgba(234, 179, 8, 0.2)",
      borderRadius: 12,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      cursor: "pointer",
      minHeight: 280
    }}
    onClick={() => openModal(item)}
    whileHover={{ scale: 1.02, borderColor: "#eab308" }}
  >
    {/* Image Preview */}
    <div style={{ height: "160px", width: "100%", borderRadius: "8px", overflow: "hidden", background: "#000" }}>
      <img 
        src={item.img} 
        alt={item.role} 
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} 
        onError={(e) => { e.target.src = `https://placehold.co/600x400/222/FFF?text=${type}`; }}
      />
    </div>

    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        {item.icon}
        <h4 style={{ color: "#fff", margin: 0, fontSize: "1.1rem" }}>{item.role}</h4>
      </div>
      <p style={{ color: "#ccc", fontSize: "0.95rem", margin: 0 }}>{item.desc}</p>
    </div>
  </motion.div>
));

// Competitive Exam Card Component
const CompetitiveExamCard = React.memo(({ exam, openModal }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }} // Adjust delay if needed, or remove for simpler memoization
    style={{
      background: "rgba(248, 113, 113, 0.05)",
      border: "1px solid rgba(248, 113, 113, 0.2)",
      borderRadius: 12,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      cursor: "pointer",
      minHeight: 280
    }}
    onClick={() => openModal(exam)}
    whileHover={{ scale: 1.02, borderColor: "#f87171" }}
  >
    {/* Image Preview inside card */}
    <div className="custom-scrollbar" style={{ height: "160px", width: "100%", borderRadius: "8px", overflow: "hidden", background: "#000", position: "relative", display: "flex", overflowX: "auto", scrollSnapType: "x mandatory" }}>
      {exam.imgs ? (
        exam.imgs.map((imgSrc, idx) => (
          <img 
            key={idx}
            src={imgSrc} 
            alt={`${exam.title} ${idx + 1}`} 
            style={{ width: "33.33%", height: "100%", objectFit: "contain", opacity: 0.9, scrollSnapAlign: "start" }} 
            onError={(e) => { e.target.src = "https://placehold.co/600x400/222/FFF?text=Image+Not+Found"; }}
          />
        ))
      ) : (
        <img 
          src={exam.img} 
          alt={exam.title} 
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} 
          onError={(e) => { e.target.src = "https://placehold.co/600x400/222/FFF?text=GATE+2025"; }}
        />
      )}
    </div>

    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        {exam.icon}
        <h4 style={{ color: "#fff", margin: 0, fontSize: "1.1rem" }}>{exam.title}</h4>
      </div>
      <p style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: 1.5 }}>{exam.desc}</p>
    </div>
  </motion.div>
));

// ---------------------------------------------------------
// DATA CONSTANTS
// ---------------------------------------------------------

// Competition Card Component
const CompetitionCard = React.memo(({ comp, openModal }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    style={{
      background: "rgba(34, 197, 94, 0.05)",
      border: "1px solid rgba(34, 197, 94, 0.2)",
      borderRadius: 12,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      cursor: "pointer",
      minHeight: 280
    }}
    onClick={() => openModal(comp)}
    whileHover={{ scale: 1.02, borderColor: "#22c55e" }}
  >
    {/* Image Preview */}
    <div style={{ height: "160px", width: "100%", borderRadius: "8px", overflow: "hidden", background: "#000" }}>
      <img 
        src={comp.img} 
        alt={comp.title} 
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} 
        onError={(e) => { e.target.src = "https://placehold.co/600x400/222/FFF?text=Certificate"; }}
      />
    </div>

    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        {comp.icon}
        <h4 style={{ color: "#fff", margin: 0, fontSize: "1.1rem" }}>{comp.title}</h4>
      </div>
      <p style={{ color: "#ccc", fontSize: "0.9rem", margin: "0 0 8px 0" }}>{comp.desc}</p>
      <span style={{ fontSize: "0.8rem", color: "#888", background: "#222", padding: "2px 8px", borderRadius: 4 }}>
        {comp.date}
      </span>
    </div>
  </motion.div>
));

const COMPETITIVE_EXAMS = [
  {
    title: "Qualified | GATE 2025",
    desc: "Paper: Data Science & AI (DA). Secured 35/100 (Score: 420). AIR: 4358.",
    date: "2025",
    icon: <CheckCircle size={28} className="text-red-400" />,
    imgs: ["/certs/gate1.jpg", "/certs/gate2.jpeg", "/certs/gate3.jpeg"] 
  }
];

const COMPETITIONS = [
  {
    title: "First Position | Turbo AI Challenge (Zonal Level)",
    desc: "AKTU Literary, Management, and Technical Fest 2024-25 at Rajshree Institute, Bareilly.",
    date: "Nov 2024",
    icon: <Trophy size={28} className="text-yellow-400" />,
    img: "/certs/zonals.jpg"
  },
  {
    title: "Participation | Turbo AI Challenge (State Level)",
    desc: "AKTU State Level Fest at Centre for Advanced Studies, Lucknow.",
    date: "Dec 2024",
    icon: <Scroll size={28} className="text-green-400" />,
    img: "/certs/STATES.jpg"
  },
  {
    title: "Participation | Hack with UttarPradesh 2025",
    desc: "Active participation in '0 to 1' hackathon by Chandigarh University TBI.",
    date: "Nov 2025",
    icon: <Code size={28} className="text-blue-400" />,
    img: "/certs/HackWithUttarPradesh.png"
  },

];

const LEADERSHIP = [
  {
    role: "Coordinator | Tech Club",
    desc: "Certificate of Excellence for dedicated coordination at MIT Moradabad.",
    icon: <Briefcase size={28} className="text-orange-400" />,
    img: "/certs/techclub.jpeg"
  },
  {
    role: "Student Coordinator | Codeathon",
    desc: "Awarded for excellent performance in organizing the event.",
    icon: <Mic size={28} className="text-pink-400" />,
    img: "/certs/codeathon.jpeg"
  }
];

const INTERNSHIPS = [
  {
    role: "Summer Internship Trainee | Softpro India",
    desc: "Domain: Python with Data Science. Achieved A+ Grade. 45 Days (July-Aug 2025).",
    icon: <Award size={28} className="text-cyan-400" />,
    img: "/certs/softpro.jpg"
  },
  {
    role: "SDE Intern | Gozoom",
    desc: "Software Development Engineer Internship at Gozoom (Certificate awaited).",
    icon: <Briefcase size={28} className="text-purple-400" />,
    img: "https://placehold.co/600x400/222/FFF?text=Gozoom+Internship" // Placeholder
  }
];

// Grouping Certs for the Grid View
const NPTEL_ACHIEVEMENTS = [
  {
    title: "NPTEL Enthusiast",
    desc: "Awarded for appearing in at least 8 exams in 4 semesters, passing at least 1 course in each.",
    date: "Jul-Dec 2025",
    icon: <Award size={28} className="text-blue-500" />,
    img: "/certs/NPTEL ENTHUSIASTS.PNG"
  },
  {
    title: "NPTEL Motivated Learner",
    desc: "Awarded for appearing in at least 8 exams in 4 semesters, passing with at least 75% in one course in each.",
    date: "Jan-Apr 2025",
    icon: <Trophy size={28} className="text-green-500" />,
    img: "/certs/NPTEL MOTIVATED LEARNERS.PNG"
  },
  {
    title: "NPTEL Believer",
    desc: "Awarded for appearing in at least 4 exams in 4 semesters, passing at least 1 course in each.",
    date: "Jul-Dec 2024",
    icon: <Scroll size={28} className="text-purple-500" />,
    img: "/certs/NPTEL BELIEVERS.PNG"
  }
];

const CERTIFICATES = {
  technical: [
    {
      title: "PCAP: Programming Essentials in Python",
      issuer: "Cisco & OpenEDG",
      date: "Oct 2023",
      desc: "Data structures, algorithms, OOP, Python 3 std lib.",
      img: "/certs/_Python1-certificate_page-0001.jpg"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Nov 2022",
      desc: "Global cyber threats, network vulnerabilities, threat detection.",
      img: "/certs/CYBER SECURITY_page-0001.jpg"
    },
    {
      title: "Web Designing (HTML / CSS)",
      issuer: "Technoledge / Astu Global Tech",
      date: "Jan 2023",
      desc: "Sep 2022 – Jan 2023 duration.",
      img: "/certs/Technoledge.jpeg"
    }
  ],
  nptel_tech: [
    { title: "Emotional Intelligence", score: "Score: 82% (Elite + Silver)", date: "Jan-Mar 2025", img: "/certs/Emotional Intelligence_page-0001.jpg" },
    { title: "Intro to Industry 4.0 & IIoT", score: "Score: 79% (Elite + Silver)", date: "Jul-Oct 2024", img: "/certs/IIot 4_page-0001.jpg" },
    { title: "Introduction To Internet Of Things", score: "Score: 78% (Elite + Silver)", date: "Jan-Apr 2024", img: "/certs/Introduction To Internet Of Things_page-0001.jpg" },
    { title: "Python for Data Science", score: "Score: 75% (Elite + Silver)", date: "Jul-Aug 2024", img: "/certs/Python for Data Science_page-0001.jpg" },
    { title: "Programming, Data Structures and Algorithms using Python", score: "Score: 68% (Elite)", date: "Jul-Sep 2024", img: "/certs/Programming, Data Structures and Algorithms using Python_page-0001.jpg" },
    { title: "Data Science for Engineers", score: "Score: 63% (Elite)", date: "Jan-Mar 2025", img: "/certs/Data Science for Engineers_page-0001.jpg" }
  ],
  nptel_soft: [
    { title: "Enhancing Soft Skills & Personality", score: "Score: 81% (Elite + Silver)", date: "Feb-Apr 2024", img: "/certs/Enhancing Soft Skills and Personality_page-0001.jpg" },
    { title: "Developing Soft Skills & Personality", score: "Score: 77% (Elite + Silver)", date: "Jul-Sep 2023", img: "/certs/Developing Soft Skills And Personality_page-0001.jpg" },
    { title: "Body Language: Key to Success", score: "Score: 68% (Elite)", date: "Aug-Sep 2024", img: "/certs/Body Language_ Key to Professional Success_page-0001.jpg" }
  ]
};


// ---------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------

export default function Certificates() {

  const [tab, setTab] = useState("technical"); // technical | nptel

  const [selectedCert, setSelectedCert] = useState(null); // For Modal

  const [currentImgIndex, setCurrentImgIndex] = useState(0); // For Multi-image slider

  const [showMarklistPdf, setShowMarklistPdf] = useState(false); // For PDF visibility



  const openModal = (cert) => {

    setSelectedCert(cert);

    setCurrentImgIndex(0);

  };



    return (



      <div className="certificates-wrapper"> {/* Using a div instead of fragment */}



        <section className="container" style={{ padding: "40px 0" }}>



          <div className="card" style={{ background: "#111", borderRadius: 16, padding: "30px 24px" }}>

        

        {/* HEADER */}

        <motion.div 

          initial={{ opacity: 0, y: -10 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5 }}

          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}

        >

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>

             <Award size={32} color="#fbbf24" />

             <h2 style={{ fontSize: "2.2rem", color: "#fff", margin: 0 }}>

               Achievements & Certifications

             </h2>

          </div>

          <p style={{ color: "#aaa", fontSize: "1.1rem" }}>

            A track record of competitions, technical mastery, and leadership.

          </p>

        </motion.div>



        {/* 1. COMPETITIVE EXAMS */}

        <div style={{ marginTop: 50 }}>

          <h3 style={{ color: "#f87171", fontSize: "1.5rem", marginBottom: 20, borderLeft: "4px solid #f87171", paddingLeft: 12, display: 'flex', alignItems: 'center', gap: 10 }}>

            <CheckCircle size={24} /> Competitive Exams

          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>

            {COMPETITIVE_EXAMS.map((exam, i) => (

              <CompetitiveExamCard key={i} exam={exam} openModal={openModal} />

            ))}

          </div>

        </div>



        {/* 2. COMPETITIONS & HACKATHONS */}

        <div style={{ marginTop: 50 }}>

          <h3 style={{ color: "#22c55e", fontSize: "1.5rem", marginBottom: 20, borderLeft: "4px solid #22c55e", paddingLeft: 12, display: 'flex', alignItems: 'center', gap: 10 }}>

            <Trophy size={24} /> Competitions & Hackathons

          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>

            {COMPETITIONS.map((comp, i) => (

              <CompetitionCard key={i} comp={comp} openModal={openModal} />

            ))}

          </div>

        </div>



        {/* 3. LEADERSHIP & INTERNSHIPS */}

        <div style={{ marginTop: 50 }}>

          <h3 style={{ color: "#eab308", fontSize: "1.5rem", marginBottom: 20, borderLeft: "4px solid #eab308", paddingLeft: 12, display: 'flex', alignItems: 'center', gap: 10 }}>

            <Briefcase size={24} /> Leadership & Internships

          </h3>



          {/* Leadership Section */}

          <div style={{ marginBottom: 30 }}>

            <h4 style={{ color: "#ccc", borderBottom: "1px solid #333", paddingBottom: 10, marginBottom: 15 }}>

              Leadership Roles

            </h4>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>

              {LEADERSHIP.map((item, i) => (

                <LeadershipInternshipCard key={i} item={item} type="Leadership" openModal={openModal} />

              ))}

            </div>

          </div>



          {/* Internships Section */}

          <div>

            <h4 style={{ color: "#ccc", borderBottom: "1px solid #333", paddingBottom: 10, marginBottom: 15 }}>

              Internships

            </h4>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>

              {INTERNSHIPS.map((item, i) => (

                <LeadershipInternshipCard key={i} item={item} type="Internship" openModal={openModal} />

              ))}

            </div>

          </div>

        </div>



        {/* 4. NPTEL ACHIEVEMENTS */}

        <div style={{ marginTop: 50 }}>

          <h3 style={{ color: "#f97316", fontSize: "1.5rem", marginBottom: 20, borderLeft: "4px solid #f97316", paddingLeft: 12, display: 'flex', alignItems: 'center', gap: 10 }}>

            <Star size={24} /> NPTEL Achievements

          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>

            {NPTEL_ACHIEVEMENTS.map((achievement, i) => (

              <NPTELAchievementCard key={i} achievement={achievement} openModal={openModal} />

            ))}

          </div>

        </div>



        {/* 5. CERTIFICATIONS TAB SECTION */}

        <div style={{ marginTop: 60 }}>

          <h3 style={{ color: "#0ea5e9", fontSize: "1.5rem", marginBottom: 20, borderLeft: "4px solid #0ea5e9", paddingLeft: 12, display: 'flex', alignItems: 'center', gap: 10 }}>

            <FileText size={24} /> Certifications

          </h3>

          

          {/* Tabs */}

          <div style={{ display: "flex", gap: 15, marginBottom: 25 }}>

            <button 

              onClick={() => setTab("technical")}

              style={{

                padding: "8px 20px",

                borderRadius: 20,

                border: "none",

                background: tab === "technical" ? "#0ea5e9" : "#333",

                color: "#fff",

                cursor: "pointer",

                fontWeight: "bold"

              }}

            >

              Technical

            </button>

            <button 

               onClick={() => setTab("nptel")}

               style={{

                padding: "8px 20px",

                borderRadius: 20,

                border: "none",

                background: tab === "nptel" ? "#0ea5e9" : "#333",

                color: "#fff",

                cursor: "pointer",

                fontWeight: "bold"

              }}

            >

              NPTEL (Online)

            </button>

          </div>



          {/* Technical Tab Content */}

          {tab === "technical" && (

            <div>

                <div className="certs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>

                  {CERTIFICATES.technical.map((c, i) => (

                    <TechnicalCertCard key={i} cert={c} openModal={openModal} />

                  ))}

                </div>

            </div>

          )}



          {/* NPTEL Tab Content */}

          {tab === "nptel" && (

            <div style={{ display: "grid", gap: 30 }}>



              {/* Engineering Section */}

              <div>

                <h4 style={{ color: "#ccc", borderBottom: "1px solid #333", paddingBottom: 10, marginBottom: 15 }}>

                  Technical & Engineering

                </h4>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 15 }}>

                  {CERTIFICATES.nptel_tech.map((c, i) => (

                    <NPTELCourseCard key={i} cert={c} type="technical" openModal={openModal} />

                  ))}

                </div>

              </div>



              {/* Soft Skills Section */}

              <div>

                <h4 style={{ color: "#ccc", borderBottom: "1px solid #333", paddingBottom: 10, marginBottom: 15 }}>

                  Soft Skills

                </h4>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 15 }}>

                  {CERTIFICATES.nptel_soft.map((c, i) => (

                    <NPTELCourseCard key={i} cert={c} type="soft" openModal={openModal} />

                  ))}

                </div>

              </div>



              



            </div>

          )}



        </div>



      </div>



      {/* Marklist Link and Embed */}

        <div style={{ textAlign: "center", marginBottom: 10, marginTop: 40 }}>

          <button

            onClick={() => setShowMarklistPdf(prev => !prev)}

            style={{

              display: "inline-flex",

              alignItems: "center",

              gap: 8,

              background: "rgba(14, 165, 233, 0.1)",

              color: "#0ea5e9",

              padding: "12px 24px",

              borderRadius: 8,

              textDecoration: "none",

              border: "1px solid rgba(14, 165, 233, 0.3)",

              fontWeight: "bold",

              fontSize: "1rem",

              transition: "all 0.3s ease",

              cursor: "pointer"

            }}

            onMouseOver={(e) => {

              e.currentTarget.style.background = "rgba(14, 165, 233, 0.2)";

              e.currentTarget.style.transform = "scale(1.02)";

            }}

            onMouseOut={(e) => {

              e.currentTarget.style.background = "rgba(14, 165, 233, 0.1)";

              e.currentTarget.style.transform = "scale(1)";

            }}

          >

            <FileText size={18} /> {showMarklistPdf ? "Hide" : "Show"} Consolidated NPTEL Marklist (PDF)

          </button>

        </div>



        {showMarklistPdf && (

          <div style={{ height: "600px", width: "100%", borderRadius: "12px", overflow: "hidden", border: "1px solid #333", marginBottom: "10px", background: "#111", marginTop: 20 }}>

             <iframe 

               src="/Marklist_NPTEL.pdf" 

               title="NPTEL Consolidated Marklist" 

               width="100%" 

               height="100%" 

               style={{ border: "none" }} 

             />

          </div>

        )}



      {/* MODAL PREVIEW */}

      <AnimatePresence>

        {selectedCert && (

          <motion.div

            className="modal-backdrop"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            style={{

              position: "fixed",

              top: 0,

              left: 0,

              right: 0,

              bottom: 0,

              background: "rgba(0,0,0,0.85)",

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              zIndex: 1000,

              padding: 20

            }}

            onClick={() => setSelectedCert(null)}

          >

            <motion.div

              initial={{ scale: 0.8, opacity: 0 }}

              animate={{ scale: 1, opacity: 1 }}

              exit={{ scale: 0.8, opacity: 0 }}

              onClick={(e) => e.stopPropagation()}

              style={{

                maxWidth: "800px",

                width: "100%",

                background: "#111",

                borderRadius: 12,

                overflow: "hidden",

                border: "1px solid #333",

                boxShadow: "0 0 40px rgba(0,0,0,0.5)",

                display: "flex",

                flexDirection: "column"

              }}

            >

              <div style={{ padding: "16px", borderBottom: "1px solid #333", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <h3 style={{ margin: 0, color: "#fff", fontSize: "1.2rem" }}>

                  {selectedCert.title} {selectedCert.imgs && <span style={{fontSize: "0.8rem", color: "#aaa"}}>({currentImgIndex + 1}/{selectedCert.imgs.length})</span>}

                </h3>

                <button 

                  onClick={() => setSelectedCert(null)}

                  style={{ background: "none", border: "none", color: "#aaa", fontSize: "1.5rem", cursor: "pointer" }}

                >

                  ✕

                </button>

              </div>

              

              <div className="custom-scrollbar" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 20, alignItems: "center", background: "#000", position: "relative", minHeight: "300px", overflowY: "auto", maxHeight: "80vh" }}>

                 

                 {selectedCert.imgs ? (

                   <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 15, width: "100%" }}>

                     {selectedCert.imgs.map((imgSrc, idx) => (

                       <img 

                          key={idx}

                          src={imgSrc} 

                          alt={`${selectedCert.title} ${idx + 1}`} 

                          style={{ width: "100%", borderRadius: 8, border: "1px solid #333" }} 

                          onError={(e) => {

                            e.target.onerror = null; 

                            e.target.src = "https://placehold.co/600x400/1a1a1a/FFF?text=Image+Not+Found";

                          }}

                       />

                     ))}

                   </div>

                 ) : (

                   <img 

                      src={selectedCert.img} 

                      alt={selectedCert.title} 

                      style={{ maxHeight: "70vh", maxWidth: "100%", borderRadius: 8 }} 

                      onError={(e) => {

                        e.target.onerror = null; 

                        e.target.src = "https://placehold.co/600x400/1a1a1a/FFF?text=Image+Not+Found";

                      }}

                   />

                 )}

              </div>



              {selectedCert.desc && (

                <div style={{ padding: "16px", color: "#ccc", fontSize: "0.95rem", textAlign: "center", borderTop: "1px solid #333" }}>

                  {selectedCert.desc}

                </div>

              )}

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  </div> /* Closing certificates-wrapper div */

  );

}