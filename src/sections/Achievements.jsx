import "./Achievements.css";

const achievements = [
  {
    number: "01",
    value: "9.54",
    unit: "CGPA",
    title: "Engineering",
    subtitle: "B.Tech — Computer Science & Engineering",
    period: "2023 — 2027",
    status: "CURRENT",
    description:
      "Maintaining a strong academic record while specializing in Computer Science and Data Science.",
  },
  {
    number: "02",
    value: "96.67",
    unit: "%",
    title: "PUC",
    subtitle: "PCMCs",
    period: "2021 — 2023",
    status: "COMPLETED",
    description:
      "Strong academic performance during pre-university studies with a focus on mathematics and computer science.",
  },
  {
    number: "03",
    value: "10.00",
    unit: "GPA",
    title: "SSC",
    subtitle: "Secondary School Certificate",
    period: "2020 — 2021",
    status: "COMPLETED",
    description:
      "Achieved a perfect academic score during secondary school education.",
  },
];

const qualities = [
  {
    number: "01",
    title: "CONSISTENCY",
    text: "Maintaining strong academic performance across every stage of education.",
  },
  {
    number: "02",
    title: "DISCIPLINE",
    text: "Building a strong technical foundation through continuous learning.",
  },
  {
    number: "03",
    title: "GROWTH",
    text: "Turning academic knowledge into practical technical skills.",
  },
];

function Achievements() {
  return (
    <section className="achievements" id="achievements">
      {/* Background */}
      <div className="achievements-background" aria-hidden="true">
        <div className="achievement-grid" />
        <div className="achievement-glow achievement-glow-one" />
        <div className="achievement-glow achievement-glow-two" />

        <div className="background-data data-one">01001</div>
        <div className="background-data data-two">11010</div>
        <div className="background-data data-three">10011</div>
      </div>

      <div className="achievements-container">

        {/* Header */}
        <div className="achievements-header">
          <div className="section-label">
            <span className="label-number">08</span>
            <span>/</span>
            <span>ACHIEVEMENTS</span>
          </div>

          <div className="header-status">
            <span className="status-indicator" />
            PERFORMANCE_INDEX
          </div>
        </div>

        {/* Intro */}
        <div className="achievements-intro">
          <div className="intro-meta">
            <span>08.01</span>
            <span>PERFORMANCE_DATABASE</span>
          </div>

          <h2>
            Numbers
            <span>that speak.</span>
          </h2>

          <p>
            A snapshot of the academic journey behind the technical
            foundation — built through consistency, curiosity, and
            continuous learning.
          </p>
        </div>

        {/* Main performance */}
        <div className="performance-panel">

          <div className="performance-panel-header">
            <div>
              <span className="panel-label">
                ACADEMIC_PERFORMANCE
              </span>

              <h3>Performance Overview</h3>
            </div>

            <span className="panel-id">
              DATASET / 008
            </span>
          </div>

          <div className="performance-content">

            {/* Main chart */}
            <div className="achievement-chart">

              <div className="chart-axis">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>00</span>
              </div>

              <div className="chart-area">

                <div className="chart-line horizontal-one" />
                <div className="chart-line horizontal-two" />
                <div className="chart-line horizontal-three" />
                <div className="chart-line horizontal-four" />

                <svg
                  className="performance-svg"
                  viewBox="0 0 700 300"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="achievementArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgba(101,230,209,0.22)"
                      />

                      <stop
                        offset="100%"
                        stopColor="rgba(101,230,209,0)"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    className="chart-area-fill"
                    d="
                      M 0 30
                      L 350 10
                      L 700 0
                      L 700 300
                      L 0 300
                      Z
                    "
                  />

                  <polyline
                    className="chart-path"
                    points="
                      0,30
                      350,10
                      700,0
                    "
                  />

                  <circle
                    className="chart-point"
                    cx="0"
                    cy="30"
                    r="5"
                  />

                  <circle
                    className="chart-point"
                    cx="350"
                    cy="10"
                    r="5"
                  />

                  <circle
                    className="chart-point"
                    cx="700"
                    cy="0"
                    r="5"
                  />
                </svg>

                <div className="chart-labels">
                  <span>SSC</span>
                  <span>PUC</span>
                  <span>ENGINEERING</span>
                </div>

              </div>
            </div>

            {/* Score summary */}
            <div className="score-summary">

              <div className="summary-heading">
                <span>ACADEMIC_INDEX</span>
                <span>↑</span>
              </div>

              <div className="score-main">
                <strong>9.53</strong>
                <span>CGPA</span>
              </div>

              <p>
                Current engineering performance with a strong academic
                foundation across previous levels of education.
              </p>

              <div className="score-status">
                <span className="status-line" />
                <span>HIGH PERFORMANCE</span>
              </div>

            </div>

          </div>
        </div>

        {/* Achievement Cards */}
        <div className="achievement-section-title">
          <span>08.02 / ACADEMIC_RECORD</span>
          <span>03 ENTRIES</span>
        </div>

        <div className="achievements-grid">

          {achievements.map((achievement) => (
            <article
              className="achievement-card"
              key={achievement.number}
            >
              <div className="achievement-card-top">
                <span className="achievement-number">
                  {achievement.number}
                </span>

                <span className="achievement-status">
                  <span />
                  {achievement.status}
                </span>
              </div>

              <div className="achievement-value">
                <strong>{achievement.value}</strong>

                <span>{achievement.unit}</span>
              </div>

              <div className="achievement-card-content">

                <h3>{achievement.title}</h3>

                <p className="achievement-subtitle">
                  {achievement.subtitle}
                </p>

                <p className="achievement-description">
                  {achievement.description}
                </p>

              </div>

              <div className="achievement-card-bottom">
                <span>{achievement.period}</span>

                <span className="achievement-arrow">
                  ↗
                </span>
              </div>
            </article>
          ))}

        </div>

        {/* Qualities */}
        <div className="achievement-qualities">

          <div className="qualities-header">
            <span>08.03 / PERFORMANCE_TRAITS</span>
            <span>CORE_VALUES</span>
          </div>

          <div className="qualities-grid">

            {qualities.map((quality) => (
              <div
                className="quality"
                key={quality.number}
              >
                <span className="quality-number">
                  {quality.number}
                </span>

                <div className="quality-content">
                  <h3>{quality.title}</h3>

                  <p>{quality.text}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Final statement */}
        <div className="achievement-statement">

          <div className="statement-marker">
            <span />
          </div>

          <div className="statement-content">
            <span>PERFORMANCE_NOTE</span>

            <h3>
              Strong foundations.
              <br />
              Continuous growth.
            </h3>
          </div>

          <div className="statement-index">
            <span>SR / 008</span>
            <span>ACTIVE</span>
          </div>

        </div>

        {/* Footer */}
        <div className="achievements-footer">
          <span>PERFORMANCE_ARCHIVE / 08</span>

          <span>
            SYSTEM_STATUS:
            <b> ACTIVE</b>
          </span>
        </div>

      </div>
    </section>
  );
}

export default Achievements;