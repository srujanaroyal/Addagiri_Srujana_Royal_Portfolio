import { useEffect, useState } from "react";
import "./Footer.css";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "work" },
  { label: "Data Lab", id: "data-lab" },
  { label: "Education", id: "education" },
  { label: "Certificates", id: "certificates" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer">
      {/* Decorative data system */}
      <div className="footer-grid" />
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">

            <button
              className="footer-logo"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span className="footer-logo-ring">
                <span>SR</span>
              </span>
            </button>

            <div className="footer-brand-text">
              <span className="footer-label">
                DATA × TECHNOLOGY
              </span>

              <h2>
                SRUJANA
                <span>ROYAL</span>
              </h2>

              <p>
                Computer Science undergraduate specializing in
                Data Science, visualization, and analytical
                problem solving.
              </p>
            </div>

          </div>

          {/* Navigation */}
          <div className="footer-navigation">

            <span className="footer-section-label">
              NAVIGATION
            </span>

            <div className="footer-links">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {link.label}
                </button>
              ))}
            </div>

          </div>

          {/* Connect */}
          <div className="footer-connect">

            <span className="footer-section-label">
              CONNECT
            </span>

            <a href="mailto:addagirisrujanaroyal@gmail.com">
              <span>EMAIL</span>
              addagirisrujanaroyal@gmail.com
            </a>

            <a href="tel:+917670948545">
              <span>PHONE</span>
              +91 7670948545
            </a>

            <a
              href="https://github.com/srujanaroyal"
              target="_blank"
              rel="noreferrer"
            >
              <span>GITHUB</span>
              github.com/srujanaroyal
            </a>

          </div>

        </div>

        {/* Middle system */}
        <div className="footer-system">

          <div className="footer-system-line">
            <span className="system-dot" />
            <span>SYSTEM_STATUS</span>
            <strong>ONLINE</strong>
          </div>

          <div className="footer-system-line">
            <span>STACK</span>
            <strong>PYTHON · SQL · R · TABLEAU · POWER BI</strong>
          </div>

          <div className="footer-system-line">
            <span>INTERFACE</span>
            <strong>REACT · CSS · DATA VISUALIZATION</strong>
          </div>

          <div className="footer-system-line">
            <span>LOCATION</span>
            <strong>HYDERABAD · INDIA</strong>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <div className="footer-copyright">
            <span>© {year} SRUJANA ROYAL</span>
            <span className="footer-divider">/</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="footer-built">
            <span>BUILT WITH</span>
            <strong>REACT</strong>
            <span>×</span>
            <strong>DATA</strong>
          </div>

          <button
            className={`back-to-top ${showTop ? "visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <span className="back-arrow">↑</span>
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;