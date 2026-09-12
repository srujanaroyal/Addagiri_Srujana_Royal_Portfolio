import { useEffect, useState } from "react";
import "./Certificates.css";

const certificates = [
  {
    number: "01",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    category: "CYBERSECURITY",
    image: "/public/certificates/Introduction to Cybersecurity Certificate.png",
    description:
      "Foundational knowledge of cybersecurity, threats, vulnerabilities, and safe digital practices.",
    tags: ["Cybersecurity", "Threats", "Security"],
  },
  {
    number: "02",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    category: "PYTHON",
    image: "/public/certificates/Python Essentials_1 Certificate.png",
    description:
      "Core Python programming concepts including syntax, variables, control structures, and functions.",
    tags: ["Python", "Programming", "Fundamentals"],
  },
  {
    number: "03",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    category: "PYTHON",
    image: "/public/certificates/Python Essential_2 Certificate.png",
    description:
      "Advanced Python concepts including object-oriented programming, modules, exceptions, and file handling.",
    tags: ["Python", "OOP", "File Handling"],
  },
  {
    number: "04",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    category: "NETWORKING",
    image: "/public/certificates/CCNA- Introduction to Networks Certificate.png",
    description:
      "Networking fundamentals covering IP addressing, network concepts, and basic network configuration.",
    tags: ["Networking", "IP", "CCNA"],
  },
  {
    number: "05",
    title: "R Programming Comprehensive Bundle",
    issuer: "Infosys Springboard",
    category: "DATA SCIENCE",
    image: "/public/certificates/R Programming Comprehensive Bundle.png",
    description:
      "R programming fundamentals with exploratory data analysis, statistical analysis, and data visualization.",
    tags: ["R", "EDA", "Visualization"],
  },
];

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  /* =========================================
     CLOSE MODAL WITH ESC
  ========================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================
     PREVENT BACKGROUND SCROLL
  ========================================= */

  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  return (
    <section className="certificates" id="certificates">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className="certificates-background"
        aria-hidden="true"
      >
        <div className="cert-grid" />

        <div className="cert-glow cert-glow-one" />
        <div className="cert-glow cert-glow-two" />

        <div className="cert-data-line cert-data-line-one" />
        <div className="cert-data-line cert-data-line-two" />

        <span className="cert-code cert-code-one">
          01000011
        </span>

        <span className="cert-code cert-code-two">
          10100101
        </span>
      </div>

      <div className="certificates-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="certificates-header">

          <div className="section-label">
            <span className="label-number">07</span>
            <span>/</span>
            <span>CERTIFICATES</span>
          </div>

          <div className="header-status">
            <span className="status-indicator" />
            LEARNING_ARCHIVE
          </div>

        </div>

        {/* =========================================
            INTRO
        ========================================= */}

        <div className="certificates-intro">

          <div className="intro-meta">
            <span>07.01</span>
            <span>CREDENTIAL_DATABASE</span>
          </div>

          <h2>
            Knowledge
            <span>in progress.</span>
          </h2>

          <p>
            Certifications that represent the technologies,
            concepts, and analytical skills I've explored while
            continuously expanding my technical foundation.
          </p>

        </div>

        {/* =========================================
            STATS
        ========================================= */}

        <div className="certificate-stats">

          <div className="stat">
            <span className="stat-label">
              CERTIFICATES
            </span>

            <strong>05</strong>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <span className="stat-label">
              DOMAINS
            </span>

            <strong>04</strong>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <span className="stat-label">
              STATUS
            </span>

            <strong>ACTIVE</strong>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <span className="stat-label">
              FOCUS
            </span>

            <strong>DATA</strong>
          </div>

        </div>

        {/* =========================================
            CERTIFICATE GRID
        ========================================= */}

        <div className="certificates-grid">

          {certificates.map((certificate) => (

            <article
              className="certificate-card"
              key={certificate.number}
              onClick={() =>
                setSelectedCertificate(certificate)
              }
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  setSelectedCertificate(certificate);
                }
              }}
              role="button"
              tabIndex="0"
            >

              {/* CARD TOP */}

              <div className="certificate-top">

                <span className="certificate-number">
                  {certificate.number}
                </span>

                <span className="certificate-category">
                  {certificate.category}
                </span>

              </div>

              {/* IMAGE PREVIEW */}

              <div className="certificate-visual">

                <div className="certificate-image-wrapper">

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-thumbnail"
                  />

                </div>

                <div className="certificate-scan-line" />

                <div className="certificate-corner corner-one" />
                <div className="certificate-corner corner-two" />
                <div className="certificate-corner corner-three" />
                <div className="certificate-corner corner-four" />

              </div>

              {/* CONTENT */}

              <div className="certificate-content">

                <span className="certificate-index">
                  CREDENTIAL_{certificate.number}
                </span>

                <h3>
                  {certificate.title}
                </h3>

                <p className="certificate-issuer">
                  {certificate.issuer}
                </p>

                <p className="certificate-description">
                  {certificate.description}
                </p>

              </div>

              {/* TAGS */}

              <div className="certificate-tags">

                {certificate.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>

              {/* CARD BOTTOM */}

              <div className="certificate-bottom">

                <span className="verified">

                  <span className="verified-dot" />

                  VERIFIED

                </span>

                <span className="view-certificate">

                  VIEW

                  <span className="arrow">
                    ↗
                  </span>

                </span>

              </div>

            </article>

          ))}

        </div>

        {/* =========================================
            LEARNING SYSTEM
        ========================================= */}

        <div className="learning-system">

          <div className="learning-header">

            <span>
              07.02 / LEARNING_SYSTEM
            </span>

            <span>
              CONTINUOUS
            </span>

          </div>

          <div className="learning-content">

            <div className="learning-copy">

              <span className="learning-label">
                KNOWLEDGE_FLOW
              </span>

              <h3>
                Learn.
                <br />
                Apply.
                <br />
                Evolve.
              </h3>

              <p>
                Each certification adds another layer to the
                technical foundation — connecting concepts
                with practical projects, experimentation,
                and problem solving.
              </p>

            </div>

            <div className="learning-flow">

              <div className="flow-line" />

              <div className="flow-step">
                <span className="flow-number">
                  01
                </span>

                <span className="flow-name">
                  LEARN
                </span>
              </div>

              <div className="flow-step">
                <span className="flow-number">
                  02
                </span>

                <span className="flow-name">
                  PRACTICE
                </span>
              </div>

              <div className="flow-step">
                <span className="flow-number">
                  03
                </span>

                <span className="flow-name">
                  BUILD
                </span>
              </div>

              <div className="flow-step">
                <span className="flow-number">
                  04
                </span>

                <span className="flow-name">
                  IMPROVE
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================
            FOOTER
        ========================================= */}

        <div className="certificates-footer">

          <span>
            CREDENTIAL_ARCHIVE / 07
          </span>

          <span>
            SYSTEM_STATUS:
            <b> ACTIVE</b>
          </span>

        </div>

      </div>

      {/* =========================================
          CERTIFICATE MODAL
      ========================================= */}

      {selectedCertificate && (

        <div
          className="certificate-modal"
          onClick={() =>
            setSelectedCertificate(null)
          }
        >

          <div
            className="certificate-modal-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* MODAL TOP BAR */}

            <div className="modal-topbar">

              <div className="modal-system">

                <span className="modal-dot" />

                CREDENTIAL_VIEWER

              </div>

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedCertificate(null)
                }
                aria-label="Close certificate"
              >
                ×
              </button>

            </div>

            {/* ACTUAL CERTIFICATE */}

            <div className="certificate-display">

              <div className="certificate-display-grid" />

              <div className="certificate-paper">

                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                />

              </div>

            </div>

            {/* MODAL INFORMATION */}

            <div className="modal-information">

              <div>

                <span className="modal-info-label">
                  CREDENTIAL
                </span>

                <h3>
                  {selectedCertificate.title}
                </h3>

              </div>

              <div className="modal-info-side">

                <span className="modal-info-label">
                  ISSUED BY
                </span>

                <p>
                  {selectedCertificate.issuer}
                </p>

              </div>

            </div>

            {/* MODAL TAGS */}

            <div className="modal-tags">

              {selectedCertificate.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>

            {/* MODAL FOOTER */}

            <div className="modal-footer">

              <span>
                CREDENTIAL_{selectedCertificate.number}
              </span>

              <span>
                PRESS <b>ESC</b> TO CLOSE
              </span>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Certificates;