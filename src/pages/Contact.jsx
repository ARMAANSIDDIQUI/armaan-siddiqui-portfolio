import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

import "../CSS/Contact.css"
import '../index.css' 

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // success | error | warning | loading
  const [timeLeft, setTimeLeft] = useState(0);

  const COOLDOWN_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds

  // Check cooldown on mount and set up timer
  React.useEffect(() => {
    const lastSentTime = localStorage.getItem("lastEmailSentTime");
    if (lastSentTime) {
      const elapsed = Date.now() - parseInt(lastSentTime, 10);
      if (elapsed < COOLDOWN_TIME) {
        setTimeLeft(Math.ceil((COOLDOWN_TIME - elapsed) / 1000));
      }
    }
  }, []);

  // Countdown timer effect
  React.useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (timeLeft > 0) {
      setStatus(`Please wait ${formatTime(timeLeft)} before sending another message.`);
      setStatusType("warning");
      return;
    }

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("Please fill in all fields.");
      setStatusType("warning");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && isNaN(form.contact)) {
      setStatus("Please enter a valid email or phone number.");
      setStatusType("warning");
      return;
    }

    setStatus("Sending...");
    setStatusType("loading");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("Message sent successfully!");
        setStatusType("success");
        setForm({ name: "", contact: "", subject: "", message: "" });
        
        // Set cooldown
        localStorage.setItem("lastEmailSentTime", Date.now().toString());
        setTimeLeft(COOLDOWN_TIME / 1000);
      } else {
        setStatus(data.message || "Failed to send. Try again later.");
        setStatusType("error");
      }
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("Failed to send. Server error.");
      setStatusType("error");
    }
  };

  const quickLinks = [
    { img: "/github.png", title: "GitHub", link: "https://github.com/ARMAANSIDDIQUI" },
    { img: "/linkedin.png", title: "LinkedIn", link: "https://www.linkedin.com/in/armaan-siddiqui-6902ba294" },
    { img: "/gmail.png", title: "Email", link: "mailto:armaansiddiqui.pms@gmail.com" },
    { img: "/whatsapp.png", title: "WhatsApp", link: "https://wa.me/917017086408" },
  ];

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div className="contact-links">
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

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required disabled={timeLeft > 0} />
        <input type="text" name="contact" placeholder="Your Email or Phone" value={form.contact} onChange={handleChange} required disabled={timeLeft > 0} />
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required disabled={timeLeft > 0} />
        <textarea name="message" placeholder="Your Message..." value={form.message} onChange={handleChange} rows="5" required disabled={timeLeft > 0} />
        <motion.button 
          type="submit" 
          className="contact-btn" 
          whileHover={timeLeft > 0 ? {} : { scale: 1.05 }} 
          whileTap={timeLeft > 0 ? {} : { scale: 0.95 }} 
          disabled={timeLeft > 0}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 8, 
            opacity: timeLeft > 0 ? 0.6 : 1,
            cursor: timeLeft > 0 ? 'not-allowed' : 'pointer'
          }}
        >
          {timeLeft > 0 ? (
            <>Please Wait for {formatTime(timeLeft)} to send another message</>
          ) : (
            <><Send size={18} /> Send Message</>
          )}
        </motion.button>

        {status && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3 }} 
            className="contact-status"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 8,
              marginTop: 15,
              color: statusType === 'error' ? '#ef4444' : statusType === 'warning' ? '#f59e0b' : statusType === 'success' ? '#22c55e' : '#aaa'
            }}
          >
            {statusType === 'warning' && <AlertTriangle size={18} />}
            {statusType === 'error' && <XCircle size={18} />}
            {statusType === 'success' && <CheckCircle size={18} />}
            {status}
          </motion.div>
        )}
      </motion.form>
    </section>
  );
}
