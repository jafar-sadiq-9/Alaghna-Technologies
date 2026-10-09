import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MCEME from "../assets/MCEME.png";
import MCEME1 from "../assets/MCEME1.png";
import MCEME2 from "../assets/MCEME2.png";

import SMRS from "../assets/SMRS.png";
import SMRS2 from "../assets/SMRS2.png";

import "../styles/projects.css";

export default function Projects() {
  const smrsImages = [SMRS, SMRS2];
  const mcemImages = [MCEME, MCEME1, MCEME2];

  const [smrsIndex, setSmrsIndex] = useState(0);
  const [mcemIndex, setMcemIndex] = useState(0);

  useEffect(() => {
    const smrsTimer = setInterval(() => {
      setSmrsIndex((current) => (current + 1) % smrsImages.length);
    }, 5000);

    const mcemTimer = setInterval(() => {
      setMcemIndex((current) => (current + 1) % mcemImages.length);
    }, 5000);

    return () => {
      clearInterval(smrsTimer);
      clearInterval(mcemTimer);
    };
  }, []);

  const previousSmrs = () => {
    setSmrsIndex(
      (current) =>
        (current - 1 + smrsImages.length) % smrsImages.length
    );
  };

  const nextSmrs = () => {
    setSmrsIndex(
      (current) => (current + 1) % smrsImages.length
    );
  };

  const previousMcem = () => {
    setMcemIndex(
      (current) =>
        (current - 1 + mcemImages.length) % mcemImages.length
    );
  };

  const nextMcem = () => {
    setMcemIndex(
      (current) => (current + 1) % mcemImages.length
    );
  };

  return (
    <main className="projects-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="projects-hero">

        <div className="projects-hero-grid" />

        <div className="projects-hero-glow projects-glow-one" />
        <div className="projects-hero-glow projects-glow-two" />

        <div className="projects-hero-content">

          <div className="projects-eyebrow">
            <span className="projects-eyebrow-line" />
            ALAGHNA TECHNOLOGIES
          </div>

          <h1>
            OUR
            <span>PROJECTS.</span>
          </h1>

          <p>
            Built for real problems.
            <br />
            Designed for real-world impact.
          </p>

        </div>

        <div className="projects-hero-index">
          <strong>03</strong>
          <span>SELECTED WORK</span>
        </div>

        <div className="projects-hero-scroll">
          <span />
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="projects-intro">

        <div className="projects-intro-label">
          SELECTED WORK
        </div>

        <div className="projects-intro-content">

          <h2>
            Turning ideas into
            <span>working software.</span>
          </h2>

          <p>
            Every project begins with a problem. We focus on
            understanding that problem first, then designing and
            developing technology around the people, workflow,
            and outcome that matter.
          </p>

        </div>

      </section>


      {/* =====================================================
          SMRS
      ===================================================== */}

      <section className="project-showcase project-smrs">

        <div className="project-showcase-inner">

          <div className="project-information">

            <div className="project-topline">
              <span>PROJECT 01</span>
              <span>01 / 02</span>
            </div>

            <div className="project-label">
              RESULT DELIVERY SYSTEM
            </div>

            <h2>SMRS  </h2>

            <div className="project-accent" />

            <p className="project-description">
              University result websites can experience severe
              traffic loads during result announcements, causing
              delays and frustration for students.
            </p>

            <p className="project-description">
              SMRS is designed to automate result delivery by
              capturing result screenshots and sending them
              directly to students through email.
            </p>

            <div className="project-features">

              <div>
                <span>01</span>
                <strong>Automated Result Delivery</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Screenshot-Based Capture</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Email Communication</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Tracking & Reliability</strong>
              </div>

            </div>

            <div className="project-actions">

              <Link
                to="/contact"
                className="project-action-primary"
              >
                <span>DISCUSS A PROJECT</span>
                <span>↗</span>
              </Link>

            </div>

          </div>


          <div className="project-visual">

            <div className="project-image-frame">

              <div className="project-image-number">
                <strong>
                  {String(smrsIndex + 1).padStart(2, "0")}
                </strong>
                <span>/02</span>
              </div>

              <img
                key={smrsImages[smrsIndex]}
                src={smrsImages[smrsIndex]}
                alt="SMRS project interface"
              />

              <div className="project-image-shade" />

              <div className="project-image-title">
                SMRS
              </div>

              <div className="project-slider-controls">

                <button
                  type="button"
                  onClick={previousSmrs}
                  aria-label="Previous SMRS image"
                >
                  ←
                </button>

                <div className="project-dots">

                  {smrsImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={
                        index === smrsIndex
                          ? "active"
                          : ""
                      }
                      onClick={() => setSmrsIndex(index)}
                      aria-label={`Show SMRS image ${index + 1}`}
                    />
                  ))}

                </div>

                <button
                  type="button"
                  onClick={nextSmrs}
                  aria-label="Next SMRS image"
                >
                  →
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MCEME
      ===================================================== */}

      <section className="project-showcase project-mcem">

        <div className="project-showcase-inner reverse">

          <div className="project-visual">

            <div className="project-image-frame">

              <div className="project-image-number">
                <strong>
                  {String(mcemIndex + 1).padStart(2, "0")}
                </strong>
                <span>/03</span>
              </div>

              <img
                key={mcemImages[mcemIndex]}
                src={mcemImages[mcemIndex]}
                alt="MCEME project interface"
              />

              <div className="project-image-shade" />

              <div className="project-image-title">
                MCEME
              </div>

              <div className="project-slider-controls">

                <button
                  type="button"
                  onClick={previousMcem}
                  aria-label="Previous MCEME image"
                >
                  ←
                </button>

                <div className="project-dots">

                  {mcemImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={
                        index === mcemIndex
                          ? "active"
                          : ""
                      }
                      onClick={() => setMcemIndex(index)}
                      aria-label={`Show MCEME image ${index + 1}`}
                    />
                  ))}

                </div>

                <button
                  type="button"
                  onClick={nextMcem}
                  aria-label="Next MCEME image"
                >
                  →
                </button>

              </div>

            </div>

          </div>


          <div className="project-information">

            <div className="project-topline">
              <span>PROJECT 02</span>
              <span>02 / 02</span>
            </div>

            <div className="project-label">
              DIGITAL JOURNAL MANAGEMENT
            </div>

            <h2>MCEME</h2>

            <div className="project-accent" />

            <p className="project-description">
              Manual journal handling can create inefficiency,
              limited traceability, and challenges around
              controlled access.
            </p>

            <p className="project-description">
              The MCEME system digitizes journal workflows
              and implements hierarchy-based authentication
              so users can access information according to
              their authorized roles.
            </p>

            <div className="project-features">

              <div>
                <span>01</span>
                <strong>Digital Journal Management</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Role-Based Access</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Hierarchical Authentication</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Improved Traceability</strong>
              </div>

            </div>

            <div className="project-actions">

              <Link
                to="/contact"
                className="project-action-primary"
              >
                <span>DISCUSS A PROJECT</span>
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT PHILOSOPHY
      ===================================================== */}

      


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="projects-cta">

        <div className="projects-cta-glow" />

        <div className="projects-cta-content">

          <span>HAVE AN IDEA?</span>

          <h2>
               THE PROBLEM
            <strong>COMES FIRST.</strong>
          </h2>

          <p>
            Tell us what you're trying to solve.
            We'll help turn the idea into something real.
          </p>

          <Link
            to="/contact"
            className="projects-cta-button"
          >
            <span>START A CONVERSATION</span>
            <span>↗</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="projects-footer">

        <span>ALAGHNA TECHNOLOGIES</span>

        <span>
          SOFTWARE • INNOVATION • IMPACT
        </span>

        <span>
          © 2026 Alaghna Technologies. All rights reserved.
        </span>

      </footer>

    </main>
  );
}