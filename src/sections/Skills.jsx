import { useState } from "react";
import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "PROGRAMMING & DATA",
    description:
      "Languages and foundations used to explore, process and solve problems.",
    skills: [
      { name: "Python", level: "Advanced", value: 88 },
      { name: "SQL", level: "Advanced", value: 86 },
      { name: "R", level: "Intermediate", value: 72 },
    ],
  },
  {
    number: "02",
    title: "DATA VISUALIZATION",
    description:
      "Turning complex datasets into clear and meaningful visual stories.",
    skills: [
      { name: "Tableau", level: "Advanced", value: 84 },
      { name: "Power BI", level: "Advanced", value: 82 },
    ],
  },
  {
    number: "03",
    title: "WEB TECHNOLOGIES",
    description:
      "Building clean and interactive experiences for the web.",
    skills: [
      { name: "HTML", level: "Advanced", value: 88 },
      { name: "CSS", level: "Advanced", value: 86 },
    ],
  },
  {
    number: "04",
    title: "TOOLS & WORKFLOW",
    description:
      "Tools that support development, analysis and continuous learning.",
    skills: [
      { name: "Git", level: "Intermediate", value: 74 },
      { name: "GitHub", level: "Intermediate", value: 78 },
    ],
  },
];


/* =========================================================
   KEYWORD INFORMATION
========================================================= */

const keywordInfo = {
  "DATA ANALYSIS": {
    number: "01",
    title: "DATA ANALYSIS",
    description:
      "Exploring datasets to understand patterns, relationships and useful information.",
    tools: ["Python", "R", "SQL"],
    focus: "EXPLORATION × PATTERNS × INSIGHTS",
  },

  VISUALIZATION: {
    number: "02",
    title: "VISUALIZATION",
    description:
      "Transforming data into clear visual stories that make information easier to understand.",
    tools: ["Tableau", "Power BI", "ggplot2"],
    focus: "CHARTS × DASHBOARDS × STORYTELLING",
  },

  "PROBLEM SOLVING": {
    number: "03",
    title: "PROBLEM SOLVING",
    description:
      "Breaking problems into smaller parts, understanding the logic and developing practical solutions.",
    tools: ["Python", "Java", "Data Structures"],
    focus: "LOGIC × STRUCTURE × SOLUTIONS",
  },

  DATABASES: {
    number: "04",
    title: "DATABASES",
    description:
      "Working with structured information and using queries to retrieve and analyze data.",
    tools: ["SQL", "Data Management"],
    focus: "QUERY × ORGANIZE × ANALYZE",
  },

  "WEB DEVELOPMENT": {
    number: "05",
    title: "WEB DEVELOPMENT",
    description:
      "Creating clean and responsive web interfaces using fundamental frontend technologies.",
    tools: ["HTML", "CSS"],
    focus: "STRUCTURE × STYLE × EXPERIENCE",
  },

  ANALYTICS: {
    number: "06",
    title: "ANALYTICS",
    description:
      "Connecting data, patterns and visual insights to support meaningful conclusions.",
    tools: ["Python", "R", "Tableau", "Power BI"],
    focus: "DATA × CONTEXT × DECISIONS",
  },
};


const dataKeywords = [
  "DATA ANALYSIS",
  "VISUALIZATION",
  "PROBLEM SOLVING",
  "DATABASES",
  "WEB DEVELOPMENT",
  "ANALYTICS",
];


function Skills() {

  const [selectedKeyword, setSelectedKeyword] = useState(null);


  return (
    <section className="skills" id="skills">

      <div className="skills-grid-background" />

      <div className="skills-container">


        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="skills-header">

          <div className="section-index">
            <span>03</span>
            <span>/</span>
            <span>SKILLS</span>
          </div>

          <div className="skills-header-line" />

          <span className="skills-header-status">
            TECHNICAL_CAPABILITY
          </span>

        </div>



        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="skills-intro">

          <div className="skills-intro-label">
            <span className="status-dot" />
            CAPABILITY_MATRIX / 003
          </div>

          <h2>
            Tools I use to turn
            <span> ideas into solutions.</span>
          </h2>

          <p>
            A growing technical toolkit shaped around data, technology,
            visualization and the curiosity to keep learning.
          </p>

        </div>



        {/* =====================================================
            KEYWORDS
        ===================================================== */}

        <div className="skills-keywords">

          {dataKeywords.map((keyword, index) => (

            <div
              className="keyword-item"
              key={keyword}
            >

              <span className="keyword-number">
                0{index + 1}
              </span>

              <span className="keyword-name">
                {keyword}
              </span>


              {/* CLICKABLE ARROW */}

              <button
                type="button"
                className="keyword-arrow"
                aria-label={`View information about ${keyword}`}
                onClick={() =>
                  setSelectedKeyword(keywordInfo[keyword])
                }
              >
                ↗
              </button>

            </div>

          ))}

        </div>



        {/* =====================================================
            SKILL GROUPS
        ===================================================== */}

        <div className="skills-matrix">

          {skillGroups.map((group) => (

            <article
              className="skill-group"
              key={group.number}
            >

              <div className="skill-group-top">

                <span className="skill-group-number">
                  {group.number}
                </span>

                <span className="skill-group-type">
                  SKILL_SET
                </span>

              </div>


              <div className="skill-group-heading">

                <h3>
                  {group.title}
                </h3>

                <span className="group-indicator">
                  ● ACTIVE
                </span>

              </div>


              <p className="skill-group-description">
                {group.description}
              </p>


              <div className="skill-list">

                {group.skills.map((skill) => (

                  <div
                    className="skill-row"
                    key={skill.name}
                  >

                    <div className="skill-row-info">

                      <div className="skill-name">

                        <span className="skill-bullet" />

                        {skill.name}

                      </div>

                      <span className="skill-level">
                        {skill.level}
                      </span>

                    </div>


                    <div className="skill-progress">

                      <span
                        className="skill-progress-fill"
                        style={{
                          "--skill-width": `${skill.value}%`,
                        }}
                      />

                    </div>


                    <div className="skill-percentage">
                      {skill.value}%
                    </div>

                  </div>

                ))}

              </div>


              <div className="skill-group-footer">

                <span>
                  CAPABILITY_STATUS
                </span>

                <span>
                  ● DEVELOPING
                </span>

              </div>

            </article>

          ))}

        </div>



        {/* =====================================================
            BOTTOM ANALYTICAL PANEL
        ===================================================== */}

        <div className="skills-analysis">

          <div className="analysis-heading">

            <span>
              SKILLS_ANALYSIS
            </span>

            <span>
              LIVE_PROFILE
            </span>

          </div>


          <div className="analysis-content">

            <div className="analysis-main">

              <span className="analysis-code">
                03 / 04
              </span>

              <h3>
                Learn.
                <span> Build.</span>
                <span> Analyze.</span>
              </h3>

            </div>


            <div className="analysis-description">

              <p>
                I enjoy working at the intersection of technology and
                data — understanding problems, finding patterns and
                building solutions that are useful and easy to understand.
              </p>


              <div className="analysis-status">

                <span className="analysis-pulse" />

                CURRENTLY EXPANDING TOOLKIT

              </div>

            </div>

          </div>



          {/* DATA BARS */}

          <div className="analysis-bars">

            {[72, 88, 64, 91, 78, 84, 69, 87, 76, 93, 71, 82].map(
              (height, index) => (

                <span
                  key={index}
                  className="analysis-bar"
                  style={{
                    "--bar-height": `${height}%`,
                  }}
                />

              )
            )}

          </div>

        </div>

      </div>



      {/* =====================================================
          INFORMATION MODAL
      ===================================================== */}

      {selectedKeyword && (

        <div
          className="skill-info-overlay"
          onClick={() => setSelectedKeyword(null)}
        >

          <div
            className="skill-info-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* TOP */}

            <div className="skill-info-top">

              <div className="skill-info-index">

                <span>
                  {selectedKeyword.number}
                </span>

                <span>
                  / CAPABILITY
                </span>

              </div>


              <button
                type="button"
                className="skill-info-close"
                onClick={() => setSelectedKeyword(null)}
                aria-label="Close information"
              >
                ×
              </button>

            </div>



            {/* TITLE */}

            <div className="skill-info-title">

              <span className="skill-info-status">
                ● ACTIVE
              </span>

              <h3>
                {selectedKeyword.title}
              </h3>

            </div>



            {/* DESCRIPTION */}

            <p className="skill-info-description">
              {selectedKeyword.description}
            </p>



            {/* FOCUS */}

            <div className="skill-info-focus">

              <span>
                PRIMARY_FOCUS
              </span>

              <strong>
                {selectedKeyword.focus}
              </strong>

            </div>



            {/* TOOLS */}

            <div className="skill-info-tools">

              <span className="skill-info-tools-label">
                TOOLS / TECHNOLOGIES
              </span>


              <div className="skill-info-tool-list">

                {selectedKeyword.tools.map((tool) => (

                  <span
                    key={tool}
                    className="skill-info-tool"
                  >
                    {tool}
                  </span>

                ))}

              </div>

            </div>



            {/* BOTTOM */}

            <div className="skill-info-footer">

              <span>
                CAPABILITY_MATRIX / 003
              </span>

              <span>
                {selectedKeyword.number} / 06
              </span>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Skills;