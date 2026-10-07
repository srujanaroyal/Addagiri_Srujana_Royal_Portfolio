import { useEffect, useRef } from "react";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      hero.style.setProperty("--mouse-x", x);
      hero.style.setProperty("--mouse-y", y);
    };

    const handleMouseLeave = () => {
      hero.style.setProperty("--mouse-x", 0);
      hero.style.setProperty("--mouse-y", 0);
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="hero-background">
        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-scan"></div>
      </div>


      {/* =====================================================
          TOP LABEL
      ===================================================== */}

      <div className="hero-top-label">

        <div className="hero-top-left">
          <span className="hero-index">01</span>
          <span>INTRODUCTION</span>
        </div>

        <div className="hero-top-right">
          <span>DATA SCIENCE</span>

          <span className="hero-live-dot"></span>

          <span>AVAILABLE</span>
        </div>

      </div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="hero-container">


        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div className="hero-content">

          {/* Eyebrow */}

          <div className="hero-eyebrow">

            <span className="hero-eyebrow-line"></span>

            <span>
              COMPUTER SCIENCE
              <b> × </b>
              DATA SCIENCE
            </span>

          </div>


          {/* Name */}

          <div className="hero-name">

            <span className="hero-name-first">
              SRUJANA
            </span>

            <span className="hero-name-last">
              ROYAL
            </span>

          </div>


          {/* Main Heading */}

          <h1 className="hero-title">

            <span>Turning</span>

            <span className="hero-title-accent">
              data
            </span>

            <span>into</span>

            <span className="hero-title-outline">
              insight.
            </span>

          </h1>


          {/* Description */}

          <p className="hero-description">
            I'm Srujana Royal — a Computer Science undergraduate
            specializing in Data Science, interested in transforming
            information into meaningful insights and data-driven
            solutions.
          </p>


          {/* Buttons */}

          <div className="hero-actions">

            <a
              href="#work"
              className="hero-button hero-button-primary"
            >
              <span>Explore My Work</span>

              <span className="hero-button-arrow">
                ↗
              </span>
            </a>


            <a
              href="/resume/Srujana_Royal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-secondary"
            >
              <span>View Resume</span>

              <span className="hero-button-arrow">
                ↓
              </span>
            </a>

          </div>


          {/* Academic Signature */}

          {/* <div className="hero-signature">

            <div className="hero-signature-item">

              <span className="signature-number">
                9.53
              </span>

              <span className="signature-label">
                ENGINEERING CGPA
              </span>

            </div>


            <div className="hero-signature-line"></div>


            <div className="hero-signature-item">

              <span className="signature-number">
                96.67%
              </span>

              <span className="signature-label">
                PUC
              </span>

            </div>


            <div className="hero-signature-line"></div>


            <div className="hero-signature-item">

              <span className="signature-number">
                10.0
              </span>

              <span className="signature-label">
                SSC GPA
              </span>

            </div>

          </div> */}

        </div>



        {/* ===================================================
            RIGHT VISUAL
        =================================================== */}

        <div className="hero-visual">

          <div className="hero-visual-stage">


            {/* =================================================
                ORBITS
            ================================================= */}

            <div className="orbit orbit-main"></div>

            <div className="orbit orbit-inner"></div>

            <div className="orbit orbit-outer"></div>

            <div className="orbit-dash"></div>


            {/* =================================================
                CONNECTION LINES
            ================================================= */}

            <svg
              className="hero-connections"
              viewBox="0 0 650 650"
              aria-hidden="true"
            >

              <line
                x1="90"
                y1="140"
                x2="325"
                y2="325"
              />

              <line
                x1="560"
                y1="115"
                x2="325"
                y2="325"
              />

              <line
                x1="570"
                y1="475"
                x2="325"
                y2="325"
              />

              <line
                x1="80"
                y1="510"
                x2="325"
                y2="325"
              />

              <line
                x1="325"
                y1="30"
                x2="325"
                y2="325"
              />

            </svg>


            {/* =================================================
                LARGE OVAL PHOTO
            ================================================= */}

            <div className="hero-portrait">

              <div className="portrait-frame">

                <div className="portrait-image-wrap">

                  <img
                    src="/images/profile/srujana.png"
                    alt="Srujana Royal"
                    className="hero-profile-image"
                  />

                  <div className="portrait-overlay"></div>

                  <div className="portrait-scan"></div>

                </div>

              </div>


              {/* Photo information */}

              <div className="portrait-label portrait-label-top">

                <span>
                  SUBJECT
                </span>

                <strong>
                  SR-001
                </strong>

              </div>


              <div className="portrait-label portrait-label-bottom">

                <span>
                  FIELD
                </span>

                <strong>
                  DATA / SCIENCE
                </strong>

              </div>

            </div>


            {/* =================================================
                DATA POINTS
            ================================================= */}

            <div className="data-point data-point-python">

              <span className="data-dot"></span>

              <div className="data-info">
                <small>01</small>
                <span>PYTHON</span>
              </div>

            </div>


            <div className="data-point data-point-sql">

              <span className="data-dot"></span>

              <div className="data-info">
                <small>02</small>
                <span>SQL</span>
              </div>

            </div>


            <div className="data-point data-point-tableau">

              <span className="data-dot"></span>

              <div className="data-info">
                <small>03</small>
                <span>TABLEAU</span>
              </div>

            </div>


            <div className="data-point data-point-r">

              <span className="data-dot"></span>

              <div className="data-info">
                <small>04</small>
                <span>R</span>
              </div>

            </div>


            <div className="data-point data-point-powerbi">

              <span className="data-dot"></span>

              <div className="data-info">
                <small>05</small>
                <span>POWER BI</span>
              </div>

            </div>


            {/* =================================================
                ANALYSIS LABELS
            ================================================= */}

            <div className="analysis-label analysis-one">

              <span>01</span>

              <strong>
                ANALYSIS
              </strong>

            </div>


            <div className="analysis-label analysis-two">

              <span>02</span>

              <strong>
                VISUALIZATION
              </strong>

            </div>


            <div className="analysis-label analysis-three">

              <span>03</span>

              <strong>
                INSIGHTS
              </strong>

            </div>


            {/* =================================================
                COORDINATES
            ================================================= */}

            <span className="coordinate coordinate-one">
              17.3850° N
            </span>

            <span className="coordinate coordinate-two">
              78.4867° E
            </span>


            {/* =================================================
                VERTICAL DATA LABEL
            ================================================= */}

            <div className="vertical-data-label">
              SRUJANA / DATA SCIENCE
            </div>

          </div>


          {/* =================================================
              CODE DECORATION
          ================================================= */}

          <div className="hero-code">

            <span>
              <i>&lt;</i>data<i>&gt;</i>
            </span>

            <span>
              analyze()
            </span>

            <span>
              visualize()
            </span>

            <span>
              interpret()
            </span>

            <span>
              <i>&lt;/</i>data<i>&gt;</i>
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM SCROLL
      ===================================================== */}

      <div className="hero-bottom">

        <span>
          SCROLL TO EXPLORE
        </span>

        <span className="hero-bottom-line"></span>

        <span className="hero-bottom-arrow">
          ↓
        </span>

      </div>

    </section>
  );
}

export default Hero;