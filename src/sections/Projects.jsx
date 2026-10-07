import "./Projects.css";

const projects = [
  {
    id: "01",
    category: "DATA ANALYSIS",
    title: "Library Management Data Analysis Using R",

    description:
      "Analyzed and visualized library management data to understand book availability, borrowing patterns, overdue returns, branch performance, and book popularity.",

    problem:
      "Libraries often have large amounts of borrowing and inventory data, making it difficult to identify usage patterns, overdue trends, and branch-level performance manually.",

    solution:
      "Cleaned, transformed, analyzed, and visualized library data using R to generate meaningful insights that can support better inventory management, resource allocation, and operational decision-making.",

    stack: [
      "R",
      "dplyr",
      "ggplot2",
      "Data Cleaning",
      "Data Manipulation",
      "Data Visualization",
    ],

    status: "COMPLETED",
    year: "2026",

    github:
      "https://github.com/srujanaroyal/Library_Management_using_R",

    // Add your deployed website/dashboard URL here
    demo: "https://librarymanagementusingr-kqpfyujpzrg4kgu3ezx4o7.streamlit.app/",

    image: "/images/projects/library-analysis.png",

    featured: true,
  },

  {
    id: "02",
    category: "DATA VISUALIZATION",
    title: "COVID-19 Impact Analysis Dashboard",

    description:
      "Developed an interactive Tableau dashboard to analyze global COVID-19 confirmed cases, deaths, recoveries, regional trends, hotspots, and recovery patterns.",

    problem:
      "The large volume of COVID-19 data made it difficult to quickly understand regional differences, pandemic hotspots, mortality patterns, and recovery trends.",

    solution:
      "Cleaned and preprocessed COVID-19 data using Excel and transformed it into an interactive Tableau dashboard with KPIs, maps, charts, and comparative visualizations for easier analysis and decision-making.",

    stack: [
      "Tableau",
      "Microsoft Excel",
      "Data Cleaning",
      "Data Manipulation",
      "Data Visualization",
      "Dashboard Design",
    ],

    status: "COMPLETED",
    year: "2026",

    github:
      "https://github.com/srujanaroyal/Covid-19_Impact_Analysis_Dashboard",

    demo: "",

    image: "/images/projects/covid-dashboard.png",

    featured: false,
  },

  {
    id: "03",
    category: "FINTECH / AI & MACHINE LEARNING",
    title: "AI-Powered Financial System",

    description:
      "Developed an AI-powered full-stack financial platform that integrates loan risk prediction, land collateral assessment, expense tracking, investment planning, credit score simulation, loan repayment, and net worth management into a unified dashboard.",

    problem:
      "Traditional loan evaluation is slow and prone to human error, while existing financial tools operate independently. Users lack a unified platform that connects their expenses, credit health, investments, loans, and assets for informed financial decision-making.",

    solution:
      "Built an integrated financial platform that uses a Random Forest ML model for loan risk prediction, district-wise land valuation for collateral assessment, and interconnected financial tools to provide personalized financial insights and risk analysis.",

    stack: [
      "React 18",
      "Vite",
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "SQLite",
      "Joblib",
      "Groq API",
      "LLaMA 3.1",
      "Random Forest",
      "Recharts",
      "Axios",
      "Uvicorn",
    ],

    status: "BUILDING",
    year: "2026",

    github:
      "https://github.com/srujanaroyal/smart-financial-management-system",

    // Add your deployed website URL here
    demo: "https://finrisk-app.vercel.app/live",

    image: "/images/projects/financial-system.png",

    featured: false,
  },
];

function Projects() {
  return (
    <section className="projects" id="work">
      <div className="projects-grid-background" />

      <div className="projects-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="projects-header">

          <div className="section-index">
            <span>04</span>
            <span>/</span>
            <span>WORK</span>
          </div>

          <div className="projects-header-line" />

          <span className="projects-header-status">
            SELECTED_PROJECTS
          </span>

        </div>


        {/* =========================================
            INTRO
        ========================================= */}

        <div className="projects-intro">

          <div className="projects-intro-label">
            <span className="status-dot" />
            PROJECT_ARCHIVE / 004
          </div>

          <h2>
            Things I&apos;ve
            <span> built.</span>
          </h2>

          <p>
            A collection of projects where technology, problem solving
            and creativity come together to create useful experiences.
          </p>

        </div>


        {/* =========================================
            PROJECT LIST
        ========================================= */}

        <div className="projects-list">

          {projects.map((project) => (
            <article
              className={`project-card ${project.featured ? "project-featured" : ""
                }`}
              key={project.id}
            >

              {/* =====================================
                  PROJECT TOP
              ===================================== */}

              <div className="project-top">

                <div className="project-number">
                  {project.id}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

                <div className="project-year">
                  {project.year}
                </div>

              </div>


              {/* =====================================
                  PROJECT BODY
              ===================================== */}

              <div className="project-content">

                {/* LEFT */}

                <div className="project-main">

                  <div className="project-title-row">

                    <h3>
                      {project.title}
                    </h3>

                    <span className="project-arrow">
                      ↗
                    </span>

                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* STACK */}

                  <div className="project-stack">

                    {project.stack.map((technology) => (
                      <span
                        className="project-tech"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>


                {/* RIGHT - PROJECT IMAGE */}

                <div className="project-visual-wrapper">

                  {project.demo || project.github ? (
                    <a
                      href={project.demo || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-visual"
                      aria-label={`Open ${project.title}`}
                    >

                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="project-image"
                      />

                      <div className="project-image-overlay">

                        <span className="image-index">
                          PROJECT_{project.id}
                        </span>

                        <span className="image-category">
                          {project.category}
                        </span>

                        <span className="image-open">
                          OPEN ↗
                        </span>

                      </div>

                      <div className="image-corner image-corner-tl" />
                      <div className="image-corner image-corner-tr" />
                      <div className="image-corner image-corner-bl" />
                      <div className="image-corner image-corner-br" />

                    </a>
                  ) : (
                    <div className="project-visual">

                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="project-image"
                      />

                      <div className="project-image-overlay">

                        <span className="image-index">
                          PROJECT_{project.id}
                        </span>

                        <span className="image-category">
                          {project.category}
                        </span>

                      </div>

                      <div className="image-corner image-corner-tl" />
                      <div className="image-corner image-corner-tr" />
                      <div className="image-corner image-corner-bl" />
                      <div className="image-corner image-corner-br" />

                    </div>
                  )}

                </div>

              </div>


              {/* =====================================
                  PROJECT DETAILS
              ===================================== */}

              <div className="project-details">

                <div className="project-detail">

                  <span className="detail-label">
                    PROBLEM
                  </span>

                  <p>
                    {project.problem}
                  </p>

                </div>


                <div className="project-detail">

                  <span className="detail-label">
                    APPROACH
                  </span>

                  <p>
                    {project.solution}
                  </p>

                </div>


                <div className="project-detail project-status">

                  <span className="detail-label">
                    STATUS
                  </span>

                  <span className="status-value">

                    <span
                      className={`status-indicator ${project.status === "BUILDING"
                          ? "status-building"
                          : ""
                        }`}
                    />

                    {project.status}

                  </span>

                </div>

              </div>


              {/* =====================================
                  PROJECT FOOTER
              ===================================== */}

              <div className="project-footer">

                <div className="project-index">
                  PROJECT_{project.id}
                </div>


                <div className="project-links">

                  {/* GITHUB */}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <span className="github-symbol">◉</span>

                      <span>GITHUB</span>

                      <span className="link-arrow">↗</span>
                    </a>
                  )}


                  {/* LIVE WEBSITE */}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link website-link"
                      aria-label={`Open ${project.title} website`}
                    >
                      <span>LIVE WEBSITE</span>

                      <span className="link-arrow">↗</span>
                    </a>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="projects-bottom">

          <span>
            END_OF_PROJECT_ARCHIVE
          </span>

          <span>
            MORE_WORK_IN_PROGRESS
          </span>

        </div>

      </div>
    </section>
  );
}

export default Projects;