import PromoSnackbar from "@/components/ui/PromoSanakBar";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Users,
  Zap,
  Menu,
  X,
  ChevronRight,
  Shield,
  Heart,
  Award,
} from "lucide-react";
import { useState } from "react";

export default function RedsignedIndex() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      icon: "🩺",
      title: "General Physician",
      description:
        "Comprehensive medical care for fever, infections, blood pressure, diabetes, and overall health management.",
    },
    {
      icon: "👶",
      title: "Child Specialist",
      description:
        "Expert care for infants and children including growth monitoring, vaccinations, and common childhood illnesses.",
    },
    {
      icon: "🦴",
      title: "Arthritis Treatment",
      description:
        "Effective treatment for joint pain, stiffness, and arthritis to improve mobility and daily comfort.",
    },

    // ✅ NEW
    {
      icon: "🦵",
      title: "Sciatica Treatment",
      description:
        "Specialized care for sciatic nerve pain, lower back discomfort, and radiating leg pain to improve mobility and reduce inflammation.",
    },

    {
      icon: "🧪",
      title: "CIT Therapy",
      description:
        "Advanced skin rejuvenation therapy that helps improve skin texture, scars, and overall appearance.",
    },
    {
      icon: "🩸",
      title: "Hijama Therapy",
      description:
        "Traditional cupping therapy that detoxifies the body, improves blood circulation, and relieves pain.",
    },

    // ✅ NEW
    {
      icon: "🩸",
      title: "Venesection Therapy (Fasd)",
      description:
        "A traditional bloodletting therapy used for detoxification, improving circulation, and treating various chronic and inflammatory conditions.",
    },

    {
      icon: "🪱",
      title: "Leech Therapy (Jalauka)",
      description:
        "A natural blood purification therapy where medicinal leeches are used to remove impure blood, improve circulation, and treat skin and joint-related conditions.",
    },
    {
      icon: "🚑",
      title: "General Emergency Care",
      description:
        "Quick and reliable treatment for minor emergencies, injuries, and urgent medical conditions.",
    },
    {
      icon: "🔬",
      title: "Advanced Mole Removal",
      description:
        "Safe and advanced mole removal using modern medical machines and techniques. Ensures precise treatment with minimal pain, faster healing, and reduced chances of scarring.",
    },
    {
      icon: "💊",
      title: "Skin & Fungal Treatment",
      description:
        "Treatment for fungal infections, allergies, itching, and various skin-related conditions.",
    },
    {
      icon: "🩹",
      title: "Wound Care & Suturing",
      description:
        "Professional treatment for cuts, injuries, and wounds including proper cleaning and stitching (suturing) for faster healing and reduced infection risk.",
    },
  ];

const testimonials = [
  {
    name: "Tanveer Ahmad",
    rating: 5,
    text: "Visited for fever and weakness. The doctor diagnosed properly and gave effective treatment. Feeling much better now.",
  },
  {
    name: "Shoeb Khan",
    rating: 5,
    text: "I was suffering from severe back pain (sciatica). The treatment here really helped me recover and move comfortably again.",
  },
  {
    name: "Shaikh Faisal",
    rating: 5,
    text: "Got my mole removal done here. The procedure was quick, safe, and almost painless. Very satisfied with the results.",
  },
  {
    name: "Shaikh Riyaz",
    rating: 5,
    text: "Excellent care for my child. The doctor is very calm and explains everything clearly. Best child specialist in the area.",
  },
  {
    name: "Imran Sheikh",
    rating: 5,
    text: "Hijama therapy helped me a lot with body pain and fatigue. Very hygienic setup and professional handling.",
  },
  {
    name: "Saba",
    rating: 5,
    text: "Took treatment for skin infection and itching. Got relief within a few days. Highly recommended clinic.",
  },
 
];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "1000+", label: "Patients Treated" },
    { value: "24/7", label: "Care & Support" },
    { value: "4.9★", label: "Patient Rating" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        background: "#f0faf6",
        color: "#1a2e23",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --emerald: #059669;
          --emerald-dark: #047857;
          --emerald-light: #d1fae5;
          --teal: #0d9488;
          --teal-dark: #0f766e;
          --gold: #d97706;
          --mint: #ecfdf5;
          --deep: #064e3b;
          --text: #1a2e23;
          --muted: #4b7a62;
          --card-bg: #ffffff;
        }
        a { text-decoration: none; color: inherit; }
        .nav-link { color: #4b7a62; font-size: 15px; font-weight: 500; transition: color 0.2s; cursor: pointer; }
        .nav-link:hover { color: var(--emerald); }
        .btn-primary {
          background: linear-gradient(135deg, var(--emerald) 0%, var(--teal) 100%);
          color: white; padding: 14px 32px; border-radius: 50px; font-weight: 600;
          font-size: 15px; display: inline-flex; align-items: center; gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; border: none;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(5,150,105,0.35); }
        .btn-outline {
          background: transparent; color: var(--emerald); padding: 13px 32px;
          border-radius: 50px; font-weight: 600; font-size: 15px; border: 2px solid var(--emerald);
          display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; cursor: pointer;
        }
        .btn-outline:hover { background: var(--emerald); color: white; }
        .service-card {
          background: white; border-radius: 20px; padding: 28px 24px;
          border: 1.5px solid #e0f5ec; transition: all 0.3s; cursor: default;
          position: relative; overflow: hidden;
        }
        .service-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, var(--emerald), var(--teal));
          transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
        }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(5,150,105,0.15); border-color: #a7f3d0; }
        .service-card:hover::before { transform: scaleX(1); }
        .glass-card {
          background: rgba(255,255,255,0.7); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.8); border-radius: 16px;
        }
        .section-tag {
          display: inline-block; background: var(--emerald-light); color: var(--emerald-dark);
          padding: 6px 18px; border-radius: 50px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 16px;
        }
        .gradient-text {
          background: linear-gradient(135deg, var(--emerald) 0%, var(--teal) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .pattern-bg {
          background-image: radial-gradient(circle at 20px 20px, rgba(5,150,105,0.06) 2px, transparent 0);
          background-size: 40px 40px;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(240,250,246,0.9)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #d1fae5",
        }}
      >
        <nav
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 72,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                background: "linear-gradient(135deg, #059669, #0d9488)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: 20,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              A
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 17, color: "#064e3b" }}>
                Al Kareem Hospital
              </div>
              <div style={{ fontSize: 11, color: "#4b7a62", fontWeight: 500 }}>
                General Physician • Child Care • Hijama
              </div>
            </div>
          </motion.div>

          <div
            style={{ display: "flex", alignItems: "center", gap: 36 }}
            className="hidden-mobile"
            id="desktop-nav"
          >
            {["#services", "#doctor", "#about", "#contact"].map((href, i) => (
              <a key={i} href={href} className="nav-link">
                {["Services", "Doctor", "About", "Contact"][i]}
              </a>
            ))}
            <a
              href="https://wa.me/917219745670"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "10px 24px", fontSize: 14 }}
            >
              📞 Book Now
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
            }}
            id="mob-btn"
          >
            {menuOpen ? (
              <X size={24} color="#064e3b" />
            ) : (
              <Menu size={24} color="#064e3b" />
            )}
          </button>
        </nav>

        <style>{`
          @media (max-width: 768px) {
            #desktop-nav { display: none !important; }
            #mob-btn { display: block !important; }
          }
        `}</style>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "white",
              borderTop: "1px solid #d1fae5",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {["Services", "Doctor", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{ color: "#4b7a62", fontWeight: 500, fontSize: 16 }}
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/917219745670"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textAlign: "center", justifyContent: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(160deg, #ecfdf5 0%, #f0faf6 40%, #e0f2fe 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(5,150,105,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px",
            width: "100%",
          }}
        >
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-tag">
                🏥 Trusted Healthcare Since 2019
              </div>
              <h1
                style={{
                  fontSize: "clamp(38px, 5vw, 58px)",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#064e3b",
                  marginBottom: 24,
                }}
              >
                Complete Care
                <br />
                for Your <span className="gradient-text">Entire Family</span>
              </h1>
              <p
                style={{
                  fontSize: 18,
                  color: "#4b7a62",
                  lineHeight: 1.8,
                  marginBottom: 36,
                  maxWidth: 480,
                }}
              >
                Welcome to{" "}
                <strong style={{ color: "#064e3b" }}>Al Kareem Hospital</strong>{" "}
                — your trusted healthcare center for general medicine, child
                health, and traditional Hijama therapy in Malkapur.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  marginBottom: 48,
                }}
              >
                <a
                  href="https://wa.me/917219745670"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  📲 WhatsApp Us
                </a>
                <a href="#services" className="btn-outline">
                  View Services <ChevronRight size={16} />
                </a>
              </div>

              {/* Trust badges */}
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {[
                  { icon: "🛡️", text: "BUMS Certified" },
                  { icon: "⭐", text: "4.9/5 Rating" },
                  { icon: "👨‍⚕️", text: "5+ Yrs Exp" },
                ].map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: "white",
                      padding: "8px 16px",
                      borderRadius: 50,
                      border: "1px solid #d1fae5",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#064e3b",
                    }}
                  >
                    <span>{b.icon}</span> {b.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Image + floating cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  borderRadius: 28,
                  overflow: "hidden",
                  aspectRatio: "1/1",
                  background: "linear-gradient(135deg, #a7f3d0, #99f6e4)",
                  position: "relative",
                }}
              >
                <img
                  src="/images/skinhospital.jpeg"
                  alt="Al Kareem Hospital"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(6,78,59,0.4))",
                  }}
                />
              </div>

              {/* Floating: Rating */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="glass-card"
                style={{
                  position: "absolute",
                  top: 24,
                  right: -20,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div style={{ fontSize: 28 }}>⭐</div>
                <div>
                  <div
                    style={{ fontWeight: 700, fontSize: 18, color: "#064e3b" }}
                  >
                    4.9/5
                  </div>
                  <div style={{ fontSize: 12, color: "#4b7a62" }}>
                    Patient Rating
                  </div>
                </div>
              </motion.div>

              {/* Floating: Certified */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="glass-card"
                style={{
                  position: "absolute",
                  bottom: 28,
                  left: -20,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div style={{ fontSize: 24 }}>✅</div>
                <div>
                  <div
                    style={{ fontWeight: 700, fontSize: 14, color: "#064e3b" }}
                  >
                    BUMS, PGDEMS
                  </div>
                  <div style={{ fontSize: 11, color: "#4b7a62" }}>
                    Certified Physician
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #059669, #0d9488)",
          padding: "48px 24px",
        }}
      >
        <div
          className="stats-grid"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            textAlign: "center",
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.8)",
                  marginTop: 4,
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        style={{ padding: "100px 24px", background: "#f0faf6" }}
        className="pattern-bg"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <div className="section-tag">🩺 What We Offer</div>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#064e3b",
                marginBottom: 16,
              }}
            >
              Our Medical Services
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "#4b7a62",
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              Complete healthcare solutions including general medicine, child
              care, skin treatments, and Hijama therapy.
            </p>
          </motion.div>

          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="service-card"
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#064e3b",
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "#4b7a62", lineHeight: 1.7 }}>
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCTOR ── */}
      <section
        id="doctor"
        style={{ padding: "100px 24px", background: "white" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "center",
            }}
          >
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  borderRadius: 28,
                  overflow: "hidden",
                  aspectRatio: "4/5",
                  background: "linear-gradient(135deg, #d1fae5, #ccfbf1)",
                  position: "relative",
                }}
              >
                <img
                  src="/images/doctor.jpg"
                  alt="Dr. Nadeem Shaikh"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(to top, rgba(6,78,59,0.95) 0%, transparent 100%)",
                    padding: "40px 28px 28px",
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      fontSize: 26,
                      fontWeight: 700,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Dr. Nadeem Shaikh
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: 14,
                      marginTop: 6,
                    }}
                  >
                    General Physician • Child Specialist • Hijama Expert
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      marginTop: 14,
                      flexWrap: "wrap",
                    }}
                  >
                    {["BUMS", "PGDEMS", "5+ Yrs"].map((b) => (
                      <span
                        key={b}
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          color: "white",
                          fontSize: 12,
                          padding: "4px 12px",
                          borderRadius: 50,
                          fontWeight: 600,
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating credential badge */}
              <motion.div
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #d97706, #f59e0b)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  boxShadow: "0 8px 24px rgba(217,119,6,0.4)",
                }}
              >
                <span style={{ fontSize: 13 }}>BUMS</span>
                <span style={{ fontSize: 10, opacity: 0.9 }}>MD PG</span>
              </motion.div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="section-tag">👨‍⚕️ Meet Our Expert</div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: "#064e3b",
                  marginBottom: 28,
                }}
              >
                Experienced & Compassionate Care
              </h2>

              {[
                {
                  label: "Qualification",
                  value: "BUMS, PGDEMS (Pune) CCH, CSD, Ex Medical Officer",
                },
                { label: "Experience", value: "5+ Years of Clinical Practice" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    marginBottom: 20,
                    padding: "16px 20px",
                    background: "#f0faf6",
                    borderRadius: 14,
                    borderLeft: "4px solid #059669",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: "#059669",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{ fontSize: 17, fontWeight: 600, color: "#064e3b" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}

              <div
                style={{
                  marginBottom: 28,
                  padding: "16px 20px",
                  background: "#f0faf6",
                  borderRadius: 14,
                  borderLeft: "4px solid #059669",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#059669",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: 12,
                  }}
                >
                  Specializations
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                  }}
                >
                  {[
                    "General Physician & Emergency Care",
                    "Child Specialist (Pediatric Care)",
                    "Hijama Therapy (Cupping)",
                    "Leech Therapy (Jalauka)",
                    "Skin & Fungal Treatments",
                    "Wound Care & Suturing",
                  ].map((spec) => (
                    <div
                      key={spec}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        fontSize: 13,
                        color: "#064e3b",
                        fontWeight: 500,
                      }}
                    >
                      <span style={{ color: "#059669", marginTop: 1 }}>✓</span>{" "}
                      {spec}
                    </div>
                  ))}
                </div>
              </div>

              <p
                style={{
                  fontSize: 16,
                  color: "#4b7a62",
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Our experienced doctor is dedicated to providing complete
                healthcare for patients of all ages — from general medical care
                to advanced Hijama and traditional therapies, with a
                patient-first approach.
              </p>

              <a
                href="https://wa.me/917219745670"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Phone size={18} /> Book a Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{
          padding: "100px 24px",
          background: "linear-gradient(160deg, #ecfdf5 0%, #f0fdf4 100%)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <div className="section-tag">🏥 About Us</div>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#064e3b",
                marginBottom: 16,
              }}
            >
              About Al Kareem Hospital
            </h2>
          </motion.div>

          <div
            className="about-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              {[
                {
                  title: "Our Vision",
                  icon: "🎯",
                  text: "To be the leading healthcare center providing world-class treatments with compassion, integrity, and excellence for every patient.",
                },
                {
                  title: "Our Mission",
                  icon: "💚",
                  text: "To deliver advanced medical treatments using evidence-based practices, ensuring optimal results and lasting patient satisfaction.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "white",
                    borderRadius: 20,
                    padding: 32,
                    border: "1.5px solid #d1fae5",
                    boxShadow: "0 4px 24px rgba(5,150,105,0.08)",
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 12 }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#064e3b",
                      marginBottom: 12,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ color: "#4b7a62", lineHeight: 1.7, fontSize: 15 }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              {[
                {
                  icon: <Award size={24} />,
                  title: "Premium Care",
                  desc: "State-of-the-art facilities and the highest standards of medical hygiene and safety.",
                },
                {
                  icon: <Users size={24} />,
                  title: "Expert Team",
                  desc: "Highly qualified specialists with deep expertise in traditional and modern medicine.",
                },
                {
                  icon: <Zap size={24} />,
                  title: "Advanced Treatments",
                  desc: "Latest treatment methods combined with time-tested traditional therapies.",
                },
                {
                  icon: <Heart size={24} />,
                  title: "Patient First",
                  desc: "Every decision is made with your comfort, safety, and long-term health in mind.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: "flex",
                    gap: 18,
                    alignItems: "flex-start",
                    background: "white",
                    padding: "20px 24px",
                    borderRadius: 16,
                    border: "1.5px solid #d1fae5",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, #059669, #0d9488)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#064e3b",
                        marginBottom: 4,
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#4b7a62",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <div className="section-tag">💬 Patient Stories</div>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#064e3b",
              }}
            >
              What Our Patients Say
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                style={{
                  background: "#f0faf6",
                  borderRadius: 20,
                  padding: "32px 28px",
                  border: "1.5px solid #d1fae5",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: 64,
                    color: "#a7f3d0",
                    fontFamily: "Georgia, serif",
                    lineHeight: 0.8,
                    marginBottom: 16,
                  }}
                >
                  "
                </div>
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="#d97706" color="#d97706" />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: "#4b7a62",
                    lineHeight: 1.75,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #059669, #0d9488)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#064e3b",
                        fontSize: 15,
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#4b7a62" }}>
                      Verified Patient
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        style={{ padding: "100px 24px", background: "#f0faf6" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <div className="section-tag">📍 Find Us</div>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#064e3b",
              }}
            >
              Visit Al Kareem Hospital
            </h2>
          </motion.div>

          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: 48,
            }}
          >
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              {[
                {
                  icon: <MapPin size={22} />,
                  title: "Address",
                  content: (
                    <>
                      <strong>Mohammad Ali Chowk, Parpeth</strong>
                      <br />
                      Malkapur, Dist. Buldana, Maharashtra
                    </>
                  ),
                },
                {
                  icon: <Phone size={22} />,
                  title: "Contact",
                  content: (
                    <>
                      <a
                        href="tel:7219745670"
                        style={{ color: "#059669", fontWeight: 600 }}
                      >
                        +91 7219745670
                      </a>
                      <br />
                      <a
                        href="https://wa.me/917219745670"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#059669", fontWeight: 600 }}
                      >
                        WhatsApp: +91 7219745670
                      </a>
                    </>
                  ),
                },
                {
                  icon: <Clock size={22} />,
                  title: "Timings",
                  content: (
                    <>
                      <strong>Morning:</strong> 9:00 AM – 2:00 PM
                      <br />
                      <strong>Evening:</strong> 5:00 PM – 10:00 PM
                    </>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderRadius: 16,
                    padding: "20px 24px",
                    display: "flex",
                    gap: 16,
                    border: "1.5px solid #d1fae5",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, #059669, #0d9488)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#064e3b",
                        fontSize: 16,
                        marginBottom: 6,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        color: "#4b7a62",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/917219745670"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  marginTop: 8,
                }}
              >
                <Phone size={18} /> Book Appointment on WhatsApp
              </a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  boxShadow: "0 24px 64px rgba(5,150,105,0.18)",
                }}
              >
<iframe
  src="https://maps.google.com/maps?q=AL%20KARIM%20CLINIC%20Malkapur&t=&z=17&ie=UTF8&iwloc=&output=embed"
  style={{ width: "100%", height: "100%", border: "none" }}
  loading="lazy"
/>
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: "absolute",
                  bottom: -16,
                  right: 20,
                  background: "white",
                  borderRadius: 14,
                  padding: "14px 18px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  borderLeft: "4px solid #059669",
                  minWidth: 200,
                }}
              >
                <div
                  style={{ fontWeight: 700, color: "#064e3b", fontSize: 14 }}
                >
                  Mohammad Ali Chowk
                </div>
                <div style={{ fontSize: 12, color: "#4b7a62", marginTop: 2 }}>
                  Malkapur, Dist. Buldana
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#059669",
                    fontWeight: 600,
                    marginTop: 6,
                  }}
                >
                  Open 9 AM – 10 PM
                </div>
                <a
href="https://www.google.com/maps?q=AL+KARIM+CLINIC+Malkapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 12,
                    color: "#059669",
                    fontWeight: 700,
                    display: "block",
                    marginTop: 6,
                  }}
                >
                  View on Google Maps →
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        style={{
          padding: "80px 24px",
          background:
            "linear-gradient(135deg, #064e3b 0%, #065f46 40%, #0f766e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: 0,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "white",
              marginBottom: 20,
            }}
          >
            Ready to Take Care of Your Health?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
              marginBottom: 40,
            }}
          >
            Schedule your consultation with our expert physician today. We're
            here for you 7 days a week.
          </p>
          <a
            href="https://wa.me/917219745670"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "white",
              color: "#059669",
              padding: "16px 40px",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: 17,
              display: "inline-block",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              //@ts-ignore
              (e.target.style.transform = "translateY(-3px)")
            }
            //@ts-ignore
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            📲 Get Started on WhatsApp
          </a>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#021f12",
          color: "white",
          padding: "64px 24px 32px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 40,
              marginBottom: 48,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "linear-gradient(135deg, #059669, #0d9488)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 20,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  A
                </div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>
                  Al Kareem Hospital
                </div>
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  maxWidth: 260,
                }}
              >
                Your trusted healthcare partner for general medicine, child
                care, and traditional Hijama therapy in Malkapur.
              </p>
            </div>

            {[
              {
                heading: "Quick Links",
                items: [
                  ["Services", "#services"],
                  ["Doctor", "#doctor"],
                  ["About", "#about"],
                  ["Contact", "#contact"],
                ],
              },
              {
                heading: "Contact",
                items: [
                  ["+91 7219745670", "tel:7219745670"],
                  ["WhatsApp", "https://wa.me/917219745670"],
                ],
              },
              {
                heading: "Hours",
                items: [
                  ["Morning: 9 AM – 2 PM", null],
                  ["Evening: 5 PM – 10 PM", null],
                  ["7 Days a Week", null],
                ],
              },
            ].map((col) => (
              <div key={col.heading}>
                <div
                  style={{
                    fontWeight: 700,
                    marginBottom: 16,
                    color: "#a7f3d0",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {col.heading}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {col.items.map(([text, href]) => (
                    <li key={text}>
                      {href ? (
                        <a
                          href={href}
                          style={{
                            color: "rgba(255,255,255,0.6)",
                            fontSize: 14,
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) =>
                            //@ts-ignore
                            (e.target.style.color = "#6ee7b7")
                          }
                          onMouseLeave={(e) =>
                            //@ts-ignore
                            (e.target.style.color = "rgba(255,255,255,0.6)")
                          }
                        >
                          {text}
                        </a>
                      ) : (
                        <span
                          style={{
                            color: "rgba(255,255,255,0.6)",
                            fontSize: 14,
                          }}
                        >
                          {text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              © 2025 Al Kareem Hospital. All rights reserved.
            </p>
          <PromoSnackbar/>
          </div>
        </div>
      </footer>
    </div>
  );
}
