import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="about-background" aria-hidden="true">
        <div className="about-grid"></div>
        <div className="about-glow"></div>
      </div>


      {/* =====================================================
          TOP LABEL
      ===================================================== */}

      <div className="about-top-label">
        <span>02 / ABOUT</span>
        <span>PROFILE_DATA</span>
      </div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="about-container">

        {/* ===================================================
            LEFT SIDE
        =================================================== */}

        <div className="about-intro">

          <div className="about-index">
            <span>01</span>
            <span>WHO I AM</span>
          </div>

          <h2 className="about-title">
            Curious mind.
            <br />
            <span>Analytical thinking.</span>
            <br />
            Meaningful work.
          </h2>

          <div className="about-line"></div>

          <p className="about-lead">
            Driven by curiosity, a love for mathematics, and the joy of
            solving challenging problems in different ways.
          </p>

          <p className="about-text">
            I enjoy breaking complex problems into simpler pieces,
            exploring multiple approaches, and finding solutions that are
            both logical and effective.
          </p>

          <p className="about-text">
            As a quick learner and problem-solver, I’m constantly exploring
            new technologies and turning what I learn into practical,
            data-driven solutions.
          </p>

          <p className="about-text">
            I’m passionate about uncovering patterns in data, creating
            meaningful visualizations, and building solutions that turn
            ideas into real-world impact.
          </p>

        </div>


        {/* ===================================================
            RIGHT SIDE
        =================================================== */}

        <div className="about-data">

          {/* -------------------------------------------------
              PROFILE DATA CARD
          ------------------------------------------------- */}

          <div className="about-data-card">

            <div className="about-card-header">
              <div>
                <span className="about-card-label">
                  PROFILE / 001
                </span>

                <h3>SRUJANA ROYAL</h3>
              </div>

              <span className="about-card-status">
                ACTIVE
              </span>
            </div>


            <div className="about-card-divider"></div>


            {/* ---------------------------------------------
                DATA ROWS
            --------------------------------------------- */}

            <div className="about-data-row">
              <span className="about-data-key">
                FIELD
              </span>

              <span className="about-data-value">
                COMPUTER SCIENCE
              </span>
            </div>

            <div className="about-data-row">
              <span className="about-data-key">
                SPECIALIZATION
              </span>

              <span className="about-data-value accent">
                DATA SCIENCE
              </span>
            </div>

            <div className="about-data-row">
              <span className="about-data-key">
                LOCATION
              </span>

              <span className="about-data-value">
                HYDERABAD, INDIA
              </span>
            </div>

            <div className="about-data-row">
              <span className="about-data-key">
                FOCUS
              </span>

              <span className="about-data-value">
                DATA × TECHNOLOGY
              </span>
            </div>

            <div className="about-data-row">
              <span className="about-data-key">
                CURRENT STATE
              </span>

              <span className="about-data-value">
                LEARNING / BUILDING
              </span>
            </div>

          </div>


          {/* -------------------------------------------------
              ACADEMIC METRICS
          ------------------------------------------------- */}

          {/* <div className="about-metrics">

            <div className="about-metric-heading">
              <span>ACADEMIC_METRICS</span>
              <span>03 VALUES</span>
            </div>


            <div className="about-metric-grid">

              <div className="about-metric">
                <div className="about-metric-number">
                  9.53
                </div>

                <div className="about-metric-label">
                  ENGINEERING
                  <br />
                  CGPA
                </div>

                <div className="about-metric-bar">
                  <span style={{ width: "95.3%" }}></span>
                </div>
              </div>


              <div className="about-metric">
                <div className="about-metric-number">
                  96.67%
                </div>

                <div className="about-metric-label">
                  PUC
                  <br />
                  SCORE
                </div>

                <div className="about-metric-bar">
                  <span style={{ width: "96.67%" }}></span>
                </div>
              </div>


              <div className="about-metric">
                <div className="about-metric-number">
                  10
                </div>

                <div className="about-metric-label">
                  SSC
                  <br />
                  GPA
                </div>

                <div className="about-metric-bar">
                  <span style={{ width: "100%" }}></span>
                </div>
              </div>

            </div>

          </div> */}


          {/* -------------------------------------------------
              APPROACH
          ------------------------------------------------- */}

          <div className="about-approach">

            <div className="about-approach-number">
              02
            </div>

            <div className="about-approach-content">

              <span className="about-approach-label">
                MY APPROACH
              </span>

              <h3>
                Observe → Understand → Build
              </h3>

              <p>
                I believe good solutions begin with asking the right
                questions. I like to understand the problem first,
                explore the information available, and then build
                solutions that are clear, useful, and purposeful.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM DECORATION
      ===================================================== */}

      <div className="about-bottom">
        <span>PROFILE_ANALYSIS</span>

        <span className="about-bottom-line"></span>

        <span>02</span>
      </div>

    </section>
  );
}

export default About;