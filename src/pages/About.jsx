import { Link } from "react-router-dom";
import "../styles/about.css";

export default function About() {
  return (
    <main className="about-page">

      {/* =========================
          ABOUT HERO
      ========================= */}
      <section className="about-hero">

        <div className="about-hero-content">

          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            ABOUT ALAGHNA TECHNOLOGIES
          </div>

          <h1>
            MORE THAN
            <span>SOFTWARE.</span>
          </h1>

          <p>
            We understand problems, build meaningful solutions,
            and continuously move technology forward.
          </p>

        </div>

        <div className="about-hero-index">
          <span>01</span>
          <span>ABOUT</span>
        </div>

      </section>


      {/* =========================
          COMPANY STORY
      ========================= */}
      <section className="about-information">

        <div className="about-section-row">

          <h2 className="about-section-heading">
            COMPANY&apos;S STORY
          </h2>

          <h3 className="about-section-subheading">
            26th August 2024
          </h3>

        </div>

        <div className="about-section-description">

          <p>
            It all began on 26th August 2024. From the very beginning,
            our vision was clear — to focus on core technologies,
            understand the challenges people face in the technology
            space, and find unique and effective solutions to
            real-world problems.
          </p>

          <p>
            Rather than simply building technology, we wanted to
            approach problems from the end user&apos;s perspective.
            We began reaching out to different people, understanding
            their challenges, and working closely with them to develop
            solutions that address their actual needs.
          </p>

          <p>
            For us, success is not just about creating a solution.
            It is about making sure that the result delivers real
            value and meets the expectations of the people we build
            it for. From there, the journey began — and it continues.
          </p>

        </div>

      </section>


      {/* =========================
          MISSION
      ========================= */}
      <section className="about-information">

        <div className="about-section-row">

          <h2 className="about-section-heading">
            MISSION
          </h2>

          <h3 className="about-section-subheading">
            We are on it
          </h3>

        </div>

        <div className="about-section-description">

          <p>
            Our mission is to create reliable, scalable, and meaningful
            technology solutions that solve real problems. We combine
            modern technologies, creative problem-solving, and a deep
            understanding of user needs to build solutions that are
            practical, effective, and built to create lasting value.
          </p>

        </div>

      </section>


      {/* =========================
          VISION
      ========================= */}
      <section className="about-information">

        <div className="about-section-row">

          <h2 className="about-section-heading">
            VISION
          </h2>

          <h3 className="about-section-subheading">
            Matching the end users
          </h3>

        </div>

        <div className="about-section-description">

          <p>
            We envision Alaghna Technologies as a technology company
            that continuously explores, builds, and evolves — creating
            solutions that are useful, accessible, and impactful. Our
            vision is to understand what end users truly need and
            create technology that matches their expectations.
          </p>

        </div>

      </section>


      {/* =========================
          WHAT MAKES ALAGHNA
          DIFFERENT
      ========================= */}
      <section className="about-different">

        <div className="about-different-heading">

          <h2>
            WHAT MAKES
            <span>ALAGHNA DIFFERENT</span>
          </h2>

        </div>

        <p className="about-different-intro">
          Technology is only part of what we do. Our approach to
          understanding problems and building solutions is what
          defines us.
        </p>


        <div className="different-grid">

          <article className="difference-card">
            <span>01</span>

            <h3>USER-FIRST THINKING</h3>

            <p>
              We start by understanding the problem from the
              user&apos;s perspective before deciding on the technology.
            </p>
          </article>


          <article className="difference-card">
            <span>02</span>

            <h3>PURPOSE-DRIVEN SOLUTIONS</h3>

            <p>
              We build technology with a purpose — creating
              solutions that address meaningful problems.
            </p>
          </article>


          <article className="difference-card">
            <span>03</span>

            <h3>EXPECTATION TO RESULT</h3>

            <p>
              We work closely with the people we build for,
              ensuring that the final result matches their
              requirements and expectations.
            </p>
          </article>


          <article className="difference-card">
            <span>04</span>

            <h3>CORE TECHNOLOGY</h3>

            <p>
              We focus on understanding the technologies we use
              deeply rather than simply following trends.
            </p>
          </article>


          <article className="difference-card">
            <span>05</span>

            <h3>CONTINUOUSLY EVOLVING</h3>

            <p>
              Our journey continues through constant learning,
              improvement, experimentation, and innovation.
            </p>
          </article>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="about-final">

        <div className="about-final-content">

          <span>HAVE AN IDEA?</span>

          <h2>
            LET&apos;S BUILD
            <strong>WHAT&apos;S NEXT.</strong>
          </h2>

          <p>
            Have a problem worth solving?
            Let&apos;s turn your idea into something real.
          </p>

          <Link
            to="/contact"
            className="about-final-button"
          >
            <span>LET&apos;S BUILD</span>
            <span>↗</span>
          </Link>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="about-footer">

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