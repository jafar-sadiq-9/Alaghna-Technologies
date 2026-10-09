import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        {/* =================================================
            3D HERO VIDEO
        ================================================= */}

        <div className="hero-video-stage">

          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-poster.png"
          >

            {/* Mobile version */}
            <source
              src="/videos/ama-hero-mobile.mp4"
              media="(max-width: 768px)"
              type="video/mp4"
            />

            {/* Desktop version */}
            <source
              src="/videos/ama-hero.mp4"
              type="video/mp4"
            />

            Your browser does not support the HTML5 video element.

          </video>

          {/* Cinematic overlay */}
          <div className="hero-video-overlay" />

          {/* Atmospheric glow */}
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />

        </div>


        {/* =================================================
            HERO CONTENT
            NOW POSITIONED BELOW THE VIDEO
        ================================================= */}

        <div className="hero-copy">

          <div className="hero-eyebrow">

            <span className="eyebrow-line" />

            <span className="hero-company-name">
              ALAGHNA TECHNOLOGIES
            </span>

          </div>


          <h1>

            <span className="hero-build">
              WE BUILD
            </span>

            <span className="hero-software">
              SOFTWARE
            </span>

            <span className="hero-tagline">
              THAT MOVES IDEAS FORWARD.
            </span>

          </h1>


          <p className="hero-description">
            Custom solutions. Modern platforms.
            Real-world impact.
            <br />
            We turn your ideas into powerful digital experiences.
          </p>


          {/* HERO BUTTONS */}

          <div className="hero-buttons">

            <Link
              to="/services"
              className="hero-primary"
            >
              <span>
                EXPLORE OUR SERVICES
              </span>

              <span>
                →
              </span>
            </Link>


            <Link
              to="/contact"
              className="hero-secondary"
            >
              <span>
                LET&apos;S BUILD
              </span>

              <span>
                →
              </span>
            </Link>

          </div>


          {/* HERO META */}

          <div className="hero-meta">

            <div className="hero-meta-item">

              <span className="hero-meta-number">
                01
              </span>

              <span className="hero-meta-text">
                SOFTWARE
              </span>

            </div>


            <div className="hero-meta-item">

              <span className="hero-meta-number">
                02
              </span>

              <span className="hero-meta-text">
                INNOVATION
              </span>

            </div>


            <div className="hero-meta-item">

              <span className="hero-meta-number">
                03
              </span>

              <span className="hero-meta-text">
                IMPACT
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            HERO BOTTOM CAPTION
            RIGHT SIDE LABELS REMOVED
        ================================================= */}

      


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <div className="hero-scroll">

          <span className="hero-scroll-line" />

          <span >
            SCROLL TO EXPLORE
          </span>

          <span className="hero-scroll-arrow">
            ↓
          </span>

        </div>

      </section>


      {/* =====================================================
          WHAT WE BUILD
      ===================================================== */}

      <section className="core-section">

        {/* Background atmosphere */}
        <div className="core-background-grid" />

        <div className="core-orb core-orb-one" />
        <div className="core-orb core-orb-two" />


        {/* =================================================
            SECTION TITLE
        ================================================= */}

        <div className="section-title">

          <span className="section-kicker">
            WHAT WE FOCUS
          </span>

          <h2>
           <span className="hero-software">
              TECHNOLOGY
            </span>
            

            <strong>
              BUILT WITH PURPOSE.
            </strong>
          </h2>

          <p className="section-description">
            Digital products, platforms and experiences
            engineered to solve real-world problems.
          </p>

        </div>


        {/* =================================================
            SERVICE GRID
        ================================================= */}

        <div className="core-grid">


          {/* =================================================
              CUSTOM SOFTWARE
          ================================================= */}

          <article className="core-card">

            <div className="core-visual software-visual">

              {/* Main software interface */}

              <div className="software-interface">

                <div className="interface-top">

                  <div className="interface-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className="interface-title">
                    PRODUCT SYSTEM
                  </span>

                </div>


                <div className="interface-body">

                  <div className="interface-sidebar">

                    <div className="interface-logo">
                      A
                    </div>

                    <span className="interface-nav active" />
                    <span className="interface-nav" />
                    <span className="interface-nav" />
                    <span className="interface-nav" />

                  </div>


                  <div className="interface-content">

                    <div className="interface-heading">

                      <div>

                        <span>
                          OVERVIEW
                        </span>

                        <strong>
                          Digital Workspace
                        </strong>

                      </div>

                      <b>
                        LIVE
                      </b>

                    </div>


                    <div className="interface-stats">

                      <div>

                        <span>
                          PROJECTS
                        </span>

                        <strong>
                          24
                        </strong>

                      </div>


                      <div>

                        <span>
                          SYSTEMS
                        </span>

                        <strong>
                          12
                        </strong>

                      </div>


                      <div>

                        <span>
                          STATUS
                        </span>

                        <strong>
                          99%
                        </strong>

                      </div>

                    </div>


                    <div className="interface-chart">

                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />

                    </div>

                  </div>

                </div>

              </div>


              {/* Floating software element */}

              <div className="visual-floating-card software-floating-one">

                <span>
                  API
                </span>

                <strong>
                  CONNECTED
                </strong>

              </div>


              <div className="visual-floating-card software-floating-two">

                <span>
                  99.9%
                </span>

                <strong>
                  PERFORMANCE
                </strong>

              </div>

            </div>


            <div className="core-card-content">

              <span className="service-number">
                01
              </span>

              <h3>
                CUSTOM SOFTWARE
              </h3>

              <p>
                Web/mobile applications, business systems,
                automation.
              </p>

              <Link
                to="/services"
                className="core-link"
              >

                <span>
                  LEARN MORE
                </span>

                <span>
                  →
                </span>

              </Link>

            </div>

          </article>


          {/* =================================================
              CODING PLATFORMS
          ================================================= */}

          <article className="core-card">

            <div className="core-visual coding-visual">

              {/* Professional code editor */}

              <div className="code-interface">

                <div className="code-top">

                  <div className="interface-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span>
                    challenge.java
                  </span>

                </div>


                <div className="code-body">

                  <div className="code-line">
                    <span>01</span>
                    <b>public</b> class Main {"{"}
                  </div>

                  <div className="code-line">
                    <span>02</span>
                    &nbsp;&nbsp;<b>public static void</b> main()
                  </div>

                  <div className="code-line">
                    <span>03</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;solve();
                  </div>

                  <div className="code-line">
                    <span>04</span>
                    &nbsp;&nbsp;{"}"}
                  </div>

                  <div className="code-line">
                    <span>05</span>
                    {"}"}
                  </div>

                </div>


                <div className="code-result">

                  <div>

                    <span>
                      TEST CASES
                    </span>

                    <strong>
                      08 / 08
                    </strong>

                  </div>

                  <div className="result-bar">
                    <span />
                  </div>

                </div>

              </div>


              {/* Submission status */}

              <div className="submission-card">

                <span className="submission-check">
                  ✓
                </span>

                <div>

                  <span>
                    SUBMISSION
                  </span>

                  <strong>
                    ACCEPTED
                  </strong>

                </div>

              </div>

            </div>


            <div className="core-card-content">

              <span className="service-number">
                02
              </span>

              <h3>
                CODING PLATFORMS
              </h3>

              <p>
                Compilers, evaluation systems,
                learning/recruitment platforms.
              </p>

              <Link
                to="/services"
                className="core-link"
              >

                <span>
                  LEARN MORE
                </span>

                <span>
                  →
                </span>

              </Link>

            </div>

          </article>


          {/* =================================================
              WORKSHOPS & HACKATHONS
          ================================================= */}

          <article className="core-card">

            <div className="core-visual innovation-visual">

              {/* Central technology network */}

              <div className="innovation-scene">

                <div className="innovation-ring ring-one" />
                <div className="innovation-ring ring-two" />
                <div className="innovation-ring ring-three" />


                <div className="innovation-center">

                  <span>
                    INNOVATE
                  </span>

                  <strong>
                    AI
                  </strong>

                  <small>
                    ACTIVE
                  </small>

                </div>


                <div className="innovation-node node-one">
                  &lt;/&gt;
                </div>

                <div className="innovation-node node-two">
                  {"{ }"}
                </div>

                <div className="innovation-node node-three">
                  01
                </div>

                <div className="innovation-node node-four">
                  UX
                </div>

              </div>


              {/* Event card */}

              <div className="event-floating-card">

                <span>
                  BUILD
                </span>

                <strong>
                  CREATE.
                  <br />
                  COMPETE.
                  <br />
                  INNOVATE.
                </strong>

              </div>

            </div>


            <div className="core-card-content">

              <span className="service-number">
                03
              </span>

              <h3>
                WORKSHOPS &amp;
                <br />
                HACKATHONS
              </h3>

              <p>
                Technical training, coding events
                and practical learning.
              </p>

              <Link
                to="/services"
                className="core-link"
              >

                <span>
                  LEARN MORE
                </span>

                <span>
                  →
                </span>

              </Link>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-copy">
          © 2026 Alaghna Technologies. All rights reserved.
        </div>

      </footer>

    </main>
  );
}