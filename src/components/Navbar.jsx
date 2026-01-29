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

  // Check if links overflow nav width (to show hamburger)
  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    setShowButton(linksRef.current.scrollWidth > navRef.current.offsetWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <>
      {/* --- Navbar --- */}
      {/* --- Navbar --- */}
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
          background: "rgba(2, 6, 23, 0.5)", // Darker semi-transparent base
          borderBottom: "1px solid var(--glass-border)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          fontFamily: "inherit",
          transition: "all 0.3s ease"
        }}
      >
        {/* Logo */}
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
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
              Full Stack • ML • DS
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
            justifyContent: "center",
            gap: "2rem",
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
                fontSize: "0.95rem",
                textDecoration: "none",
                color: isActive ? "var(--text-main)" : "var(--text-muted)", // Fixed color logic
                fontWeight: isActive ? 600 : 500,
                transition: "color 0.2s ease"
              })}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    color: "var(--primary)",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
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

        {/* Hamburger */}
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

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "4rem",
              overflowY: "auto",
              zIndex: 9999,
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "2rem",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setIsOpen(false)}
            >
              <IoClose size={28} />
            </button>

            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: "1rem 0",
                  width: "100%",
                  textAlign: "center",
                  fontSize: 16,
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
