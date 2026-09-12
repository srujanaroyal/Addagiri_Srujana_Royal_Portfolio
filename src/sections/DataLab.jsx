import { useState } from "react";
import "./DataLab.css";

const dataStages = [
  {
    number: "01",
    title: "OBSERVE",
    short: "Understand the data",
    description:
      "Before looking for answers, I first understand what the data represents, where it comes from and what questions it can help answer.",
    tags: ["CONTEXT", "QUESTIONS", "DATA"],
  },
  {
    number: "02",
    title: "EXPLORE",
    short: "Look for relationships",
    description:
      "I explore values, distributions and relationships to understand how different parts of a dataset connect with each other.",
    tags: ["PATTERNS", "RELATIONSHIPS", "EDA"],
  },
  {
    number: "03",
    title: "FIND PATTERNS",
    short: "Separate signal from noise",
    description:
      "The goal is to identify meaningful patterns and signals rather than simply looking at individual numbers.",
    tags: ["SIGNALS", "TRENDS", "COMPARISON"],
  },
  {
    number: "04",
    title: "VISUALIZE",
    short: "Make information visible",
    description:
      "I use visualizations and dashboards to turn complex information into something that can be understood quickly.",
    tags: ["CHARTS", "DASHBOARDS", "STORY"],
  },
  {
    number: "05",
    title: "INSIGHT",
    short: "Turn information into meaning",
    description:
      "The final step is connecting the patterns back to the original problem and communicating what the data actually tells us.",
    tags: ["MEANING", "CLARITY", "DECISIONS"],
  },
];


const tools = [
  {
    name: "PYTHON",
    level: "CORE LANGUAGE",
    description:
      "Used for data analysis, exploration and problem solving. I use Python to work with data and turn raw information into useful insights.",
    focus: ["DATA ANALYSIS", "EDA", "PROBLEM SOLVING"],
  },
  {
    name: "R",
    level: "ANALYSIS & VISUALIZATION",
    description:
      "Used for statistical analysis and data visualization. I work with R to explore datasets and communicate patterns through visualizations.",
    focus: ["STATISTICS", "EDA", "ggplot2"],
  },
  {
    name: "SQL",
    level: "DATABASE",
    description:
      "Used to query and work with structured data. SQL helps me retrieve, filter and organize information from databases.",
    focus: ["QUERIES", "DATA", "DATABASES"],
  },
  {
    name: "TABLEAU",
    level: "DASHBOARDING",
    description:
      "Used to create interactive dashboards and visual stories that make complex information easier to understand.",
    focus: ["DASHBOARDS", "KPI", "VISUALIZATION"],
  },
  {
    name: "POWER BI",
    level: "BUSINESS INTELLIGENCE",
    description:
      "Used to build interactive reports and dashboards for exploring data, identifying trends and presenting insights clearly.",
    focus: ["REPORTS", "DASHBOARDS", "INSIGHTS"],
  },
];


function DataLab() {

  const [activeStage, setActiveStage] = useState(0);
  const [activeTool, setActiveTool] = useState(null);

  const currentStage = dataStages[activeStage];


  return (
    <section className="data-lab" id="data-lab">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="data-lab-background">

        <div className="data-lab-grid" />

        <div className="data-lab-glow data-lab-glow-one" />

        <div className="data-lab-glow data-lab-glow-two" />

        <div className="data-lab-noise" />

      </div>



      <div className="data-lab-container">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="data-lab-header">

          <div className="section-index">

            <span>05</span>

            <span>/</span>

            <span>DATA LAB</span>

          </div>


          <div className="data-lab-header-line" />


          <span className="data-lab-status">
            DATA_THINKING
          </span>

        </div>



        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="data-lab-intro">

          <div className="data-lab-label">

            <span className="status-dot" />

            HOW_I_WORK_WITH_DATA / 005

          </div>


          <h2>
            From raw data
            <span> to insight.</span>
          </h2>


          <p>
            I approach data as a process of asking better questions,
            discovering patterns and making information easier to understand.
          </p>

        </div>



        {/* =====================================================
            MAIN DATA PROCESS
        ===================================================== */}

        <div className="data-process">


          {/* LEFT SIDE */}

          <div className="data-process-sidebar">

            <div className="process-sidebar-top">

              <span>
                PROCESS
              </span>

              <span>
                05 STEPS
              </span>

            </div>


            <div className="process-navigation">

              {dataStages.map((stage, index) => (

                <button
                  type="button"
                  key={stage.number}
                  className={`process-nav-item ${activeStage === index ? "active" : ""
                    }`}
                  onClick={() => setActiveStage(index)}
                >

                  <span className="process-nav-number">
                    {stage.number}
                  </span>


                  <span className="process-nav-title">
                    {stage.title}
                  </span>


                  <span className="process-nav-arrow">
                    ↗
                  </span>

                </button>

              ))}

            </div>


            <div className="process-sidebar-bottom">

              <span>
                INPUT
              </span>

              <strong>
                DATA
              </strong>

            </div>

          </div>



          {/* CENTER VISUAL */}

          <div className="data-process-visual">

            <div className="visual-orbit orbit-one" />

            <div className="visual-orbit orbit-two" />

            <div className="visual-orbit orbit-three" />


            {/* Connecting lines */}

            <div className="visual-line visual-line-one" />

            <div className="visual-line visual-line-two" />

            <div className="visual-line visual-line-three" />

            <div className="visual-line visual-line-four" />


            {/* Data points */}

            <span className="visual-point visual-point-one" />

            <span className="visual-point visual-point-two" />

            <span className="visual-point visual-point-three" />

            <span className="visual-point visual-point-four" />

            <span className="visual-point visual-point-five" />


            {/* Main core */}

            <div className="data-core">

              <span className="data-core-small">
                {currentStage.number}
              </span>

              <strong>
                {currentStage.title}
              </strong>

              <span className="data-core-line" />

              <small>
                ACTIVE_STAGE
              </small>

            </div>


            {/* Coordinates */}

            <span className="visual-coordinate coordinate-top">
              17.3850° N
            </span>

            <span className="visual-coordinate coordinate-right">
              DATA / 005
            </span>

            <span className="visual-coordinate coordinate-bottom">
              ANALYSIS_SYSTEM
            </span>

            <span className="visual-coordinate coordinate-left">
              78.4867° E
            </span>

          </div>



          {/* RIGHT INFORMATION */}

          <div className="data-process-info">

            <div className="process-info-index">
              STEP {currentStage.number} / 05
            </div>


            <div className="process-info-title">

              <span>
                CURRENT_STAGE
              </span>

              <h3>
                {currentStage.title}
              </h3>

            </div>


            <p className="process-info-short">
              {currentStage.short}
            </p>


            <p className="process-info-description">
              {currentStage.description}
            </p>


            <div className="process-tags">

              {currentStage.tags.map((tag) => (

                <span key={tag}>
                  {tag}
                </span>

              ))}

            </div>


            <div className="process-progress">

              <div className="progress-top">

                <span>
                  PROCESS_PROGRESS
                </span>

                <span>
                  {String(activeStage + 1).padStart(2, "0")} / 05
                </span>

              </div>


              <div className="progress-track">

                <span
                  style={{
                    width: `${((activeStage + 1) / 5) * 100}%`,
                  }}
                />

              </div>

            </div>

          </div>

        </div>



        {/* =====================================================
            TOOLS
        ===================================================== */}

        <div className="data-tools">

          <div className="data-tools-label">
            <span>TOOLKIT</span>
            <span>TECHNOLOGIES I WORK WITH</span>
          </div>

          <div className="data-tools-list">

            {tools.map((tool, index) => (
              <div
                className={`data-tool ${activeTool === index ? "active" : ""
                  }`}
                key={tool.name}
              >

                {/* TOOL BUTTON */}
                <button
                  type="button"
                  className="data-tool-trigger"
                  onClick={() =>
                    setActiveTool(
                      activeTool === index ? null : index
                    )
                  }
                  aria-expanded={activeTool === index}
                >
                  <span className="data-tool-number">
                    0{index + 1}
                  </span>

                  <strong>{tool.name}</strong>

                  <i
                    className={
                      activeTool === index
                        ? "tool-arrow active"
                        : "tool-arrow"
                    }
                  >
                    ↗
                  </i>
                </button>


                {/* INFORMATION BOX */}
                {activeTool === index && (
                  <div className="tool-info-box">

                    <div className="tool-info-header">
                      <div>
                        <span>TOOL / 0{index + 1}</span>

                        <h4>{tool.name}</h4>
                      </div>

                      <button
                        type="button"
                        className="tool-info-close"
                        onClick={() => setActiveTool(null)}
                        aria-label={`Close ${tool.name} information`}
                      >
                        ×
                      </button>
                    </div>

                    <div className="tool-info-level">
                      <span>FOCUS</span>
                      <strong>{tool.level}</strong>
                    </div>

                    <p>
                      {tool.description}
                    </p>

                    <div className="tool-info-tags">
                      {tool.focus.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                  </div>
                )}

              </div>
            ))}

          </div>

        </div>



        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="data-lab-statement">

          <div className="statement-number">
            05
          </div>


          <div className="statement-main">

            <span>
              MY_DATA_MINDSET
            </span>

            <h3>
              Numbers are useful.
              <br />
              <em>Meaning is the goal.</em>
            </h3>

          </div>


          <div className="statement-side">

            <p>
              Good analysis is not only about finding patterns.
              It is about understanding what those patterns mean
              and communicating them clearly.
            </p>

          </div>

        </div>



        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="data-lab-footer">

          <span>
            DATA → PATTERN → VISUAL → INSIGHT
          </span>

          <span>
            CONTINUOUSLY_LEARNING
          </span>

        </div>

      </div>

    </section>
  );
}

export default DataLab;