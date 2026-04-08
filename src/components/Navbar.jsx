import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates & Achievements", to: "/certificates" },
  { label: "Experience", to: "/experience" },
  { label: "Resume", to: "/resume" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  // Use a standard breakpoint for mobile menu
  const checkResponsive = () => {
    if (window.innerWidth < 1200) {
      setShowButton(true);
    } else {
      setShowButton(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    checkResponsive();
    window.addEventListener("resize", checkResponsive);
    return () => window.removeEventListener("resize", checkResponsive);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="glass-panel"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          background: "rgba(2, 6, 23, 0.7)",
          borderBottom: "1px solid var(--glass-border)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          fontFamily: "inherit",
          transition: "all 0.3s ease"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900",
              fontSize: "1.2rem",
              color: "white",
              boxShadow: "0 0 15px rgba(0, 119, 255, 0.4)"
            }}
          >
            AS
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="text-gradient" style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Armaan Siddiqui</h1>
            <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: '1px' }}>
              FULL STACK • ML • DS
            </div>
          </div>
        </div>

        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
            justifyContent: "flex-end",
            gap: "1.5rem",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              end
              to={l.to}
              style={({ isActive }) => ({
                position: "relative",
                fontSize: "0.9rem",
                textDecoration: "none",
                color: isActive ? "var(--text-main)" : "var(--text-muted)",
                fontWeight: isActive ? 600 : 500,
                transition: "color 0.2s ease"
              })}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{ scale: 1.05, color: "var(--primary)" }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  <span style={{ position: 'relative', zIndex: 1 }}>{l.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        height: "2px",
                        borderRadius: "1px",
                        background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                        boxShadow: "0 0 8px var(--primary)",
                      }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {showButton && (
          <div className="mobile-btn">
            <button
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--glass-border)",
                borderRadius: "8px",
                padding: "8px 12px",
                color: "#fff",
                fontSize: "1.2rem",
                cursor: "pointer",
                zIndex: 10000,
                transition: "background 0.2s",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        )}
      </nav>

      <AnimatePresence>
        {isOpen && showButton && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                background: "rgba(2, 6, 23, 0.7)",
                backdropFilter: "blur(4px)",
                zIndex: 9998,
              }}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "280px",
                height: "100vh",
                background: "rgba(2, 6, 23, 0.95)",
                backdropFilter: "blur(20px)",
                borderLeft: "1px solid var(--glass-border)",
                display: "flex",
                flexDirection: "column",
                zIndex: 9999,
                padding: "1.5rem",
                boxShadow: "-10px 0 30px rgba(0,0,0,0.5)"
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '2rem',
                borderBottom: '1px solid var(--glass-border)',
                paddingBottom: '1rem'
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "900",
                    fontSize: "0.9rem",
                    color: "white"
                  }}>
                    AS
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }} className="text-gradient">Menu</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--glass-border)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    cursor: "pointer"
                  }}
                >
                  <IoClose size={20} />
                </button>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                overflowY: 'auto',
                flexGrow: 1
              }}>
                {links.map((l, index) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={l.to}
                      onClick={() => setIsOpen(false)}
                      style={({ isActive }) => ({
                        display: 'flex',
                        alignItems: 'center',
                        color: isActive ? "var(--primary)" : "var(--text-muted)",
                        textDecoration: "none",
                        padding: "0.8rem 1rem",
                        fontSize: '0.95rem',
                        fontWeight: isActive ? 600 : 500,
                        borderRadius: '10px',
                        background: isActive ? 'rgba(0, 119, 255, 0.1)' : 'transparent',
                        border: isActive ? '1px solid rgba(0, 119, 255, 0.2)' : '1px solid transparent',
                        transition: "all 0.2s ease"
                      })}
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div style={{
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid var(--glass-border)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textAlign: 'center'
              }}>
                Armaan Siddiqui &copy; 2026
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
