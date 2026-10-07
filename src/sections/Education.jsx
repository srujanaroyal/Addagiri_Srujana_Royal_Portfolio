import "./Education.css";

const educationData = [
  {
    id: "01",
    period: "2020 — 2021",
    level: "SECONDARY EDUCATION",
    institution: "SSC",
    result: "10.00 GPA",
    description:
      "Built a strong academic foundation with consistent performance and curiosity toward learning.",
    status: "COMPLETED",
  },
  {
    id: "02",
    period: "2021 — 2023",
    level: "PRE-UNIVERSITY",
    institution: "PUC",
    result: "96.67%",
    description:
      "Developed stronger analytical and mathematical foundations while preparing for engineering studies.",
    status: "COMPLETED",
  },
  {
    id: "03",
    period: "2023 — 2027",
    level: "UNDERGRADUATE",
    institution: "B.TECH — COMPUTER SCIENCE",
    result: "9.54 CGPA",
    description:
      "Currently pursuing Computer Science with a specialization in Data Science and exploring technology through projects and continuous learning.",
    status: "IN PROGRESS",
  },
];

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-grid-background" />

      <div className="education-container">

        {/* HEADER */}
        <div className="education-header">

          <div className="section-index">
            <span>06</span>
            <span>/</span>
            <span>EDUCATION</span>
          </div>

          <div className="education-header-line" />

          <span className="education-header-status">
            ACADEMIC_PROGRESS
          </span>

        </div>


        {/* INTRO */}
        <div className="education-intro">

          <div className="education-label">
            <span className="status-dot" />
            ACADEMIC_RECORD / 006
          </div>

          <h2>
            Learning is a
            <span> continuous process.</span>
          </h2>

          <p>
            A journey shaped by curiosity, consistency and the desire
            to understand how things work.
          </p>

        </div>


        {/* ACADEMIC OVERVIEW */}
        <div className="education-overview">

          <div className="overview-label">
            EDUCATION_TIMELINE
          </div>

          <div className="overview-line">

            <span className="overview-start">
              2020
            </span>

            <div className="overview-track">

              <span className="track-fill" />

              <span className="timeline-dot dot-01" />
              <span className="timeline-dot dot-02" />
              <span className="timeline-dot dot-03" />

            </div>

            <span className="overview-end">
              2027
            </span>

          </div>

          <div className="overview-caption">
            <span>FOUNDATION</span>
            <span>EXPLORATION</span>
            <span>SPECIALIZATION</span>
          </div>

        </div>


        {/* EDUCATION CARDS */}
        <div className="education-list">

          {educationData.map((item) => (
            <article
              className={`education-item ${
                item.status === "IN PROGRESS"
                  ? "education-current"
                  : ""
              }`}
              key={item.id}
            >

              {/* NUMBER */}
              <div className="education-number">
                {item.id}
              </div>


              {/* PERIOD */}
              <div className="education-period">

                <span className="period-label">
                  PERIOD
                </span>

                <span className="period-value">
                  {item.period}
                </span>

              </div>


              {/* MAIN */}
              <div className="education-main">

                <div className="education-level">
                  {item.level}
                </div>

                <h3>
                  {item.institution}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>


              {/* RESULT */}
              <div className="education-result">

                <span className="result-label">
                  ACADEMIC_RESULT
                </span>

                <strong>
                  {item.result}
                </strong>

                <span
                  className={`education-status ${
                    item.status === "IN PROGRESS"
                      ? "status-progress"
                      : ""
                  }`}
                >
                  <span className="status-indicator" />
                  {item.status}
                </span>

              </div>

            </article>
          ))}

        </div>


        {/* CURRENT FOCUS */}
        <div className="education-focus">

          <div className="focus-top">
            <span>
              CURRENT_FOCUS
            </span>

            <span>
              2026 / 2027
            </span>
          </div>


          <div className="focus-content">

            <div className="focus-symbol">
              SR
            </div>

            <div className="focus-text">

              <span>
                SPECIALIZATION
              </span>

              <h3>
                Computer Science
                <span> × Data Science</span>
              </h3>

              <p>
                Exploring data, technology and software development
                while building practical projects and strengthening
                problem-solving skills.
              </p>

            </div>

            <div className="focus-arrow">
              ↗
            </div>

          </div>

        </div>


        {/* FOOTER */}
        <div className="education-footer">

          <span>
            ACADEMIC_RECORD_COMPLETE
          </span>

          <span>
            STILL_LEARNING
          </span>

        </div>

      </div>
    </section>
  );
}

export default Education;