import { useEffect, useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      number: "01",
      name: "About",
      href: "#about",
      id: "about",
    },
    {
      number: "02",
      name: "Skills",
      href: "#skills",
      id: "skills",
    },
    {
      number: "03",
      name: "Work",
      href: "#work",
      id: "work",
    },
    {
      number: "04",
      name: "Data Lab",
      href: "#data-lab",
      id: "data-lab",
    },
    {
      number: "05",
      name: "Education",
      href: "#education",
      id: "education",
    },
    {
      number: "06",
      name: "Certificates",
      href: "#certificates",
      id: "certificates",
    },
    {
      number: "07",
      name: "Contact",
      href: "#contact",
      id: "contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        document.getElementById("home"),
        ...navLinks
          .map((link) => document.getElementById(link.id))
          .filter(Boolean),
      ];

      const position = window.scrollY + 220;

      let current = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= position) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      } ${menuOpen ? "navbar-open" : ""}`}
    >
      <div className="navbar-container">

        {/* LOGO */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="navbar-logo-mark">
            SR
          </span>

          <span className="navbar-logo-name">
            SRUJANA
          </span>
        </a>


        {/* DESKTOP NAV */}

        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`navbar-link ${
                activeSection === link.id
                  ? "active"
                  : ""
              }`}
            >
              <span className="navbar-link-number">
                {link.number}
              </span>

              <span className="navbar-link-name">
                {link.name}
              </span>
            </a>
          ))}
        </nav>


        {/* STATUS */}

        <div className="navbar-status">
          <span className="navbar-status-dot"></span>

          <span>
            AVAILABLE
          </span>
        </div>


        {/* MENU BUTTON */}

        <button
          type="button"
          className={`navbar-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className={`navbar-mobile ${
          menuOpen ? "open" : ""
        }`}
      >
        <div className="navbar-mobile-inner">

          <div className="navbar-mobile-heading">
            <span>
              NAVIGATION
            </span>

            <span>
              07 / 07
            </span>
          </div>


          <nav className="navbar-mobile-links">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`navbar-mobile-link ${
                  activeSection === link.id
                    ? "active"
                    : ""
                }`}
                onClick={closeMenu}
              >
                <span className="navbar-mobile-number">
                  {link.number}
                </span>

                <span className="navbar-mobile-name">
                  {link.name}
                </span>

                <span className="navbar-mobile-arrow">
                  ↗
                </span>
              </a>
            ))}

          </nav>


          <div className="navbar-mobile-footer">
            <span>
              COMPUTER SCIENCE / DATA SCIENCE
            </span>

            <span>
              SR
            </span>
          </div>

        </div>
      </div>

    </header>
  );
}

export default Navbar;