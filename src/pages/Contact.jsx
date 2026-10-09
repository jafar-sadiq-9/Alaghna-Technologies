import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_r2prjwi",
        "template_s0wwuxv",
        formRef.current,
        "r73jb7-WxGcDoZU_R"
      );

      setStatus("success");

      formRef.current.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-grid" />

        <div className="contact-glow contact-glow-one" />
        <div className="contact-glow contact-glow-two" />

        <div className="contact-hero-content">

          <div className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            ALAGHNA TECHNOLOGIES
          </div>

          <h1>
            LET&apos;S
            <span>CONNECT.</span>
          </h1>

          <p>
            Have an idea, a challenge, or something
            you want to build?
            <br />
            Let&apos;s start the conversation.
          </p>

        </div>

        <div className="contact-hero-index">
          <strong>04</strong>
          <span>CONTACT</span>
        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}

      <section className="contact-main">

        {/* ===================================================
            LEFT INFORMATION
        =================================================== */}

        <div className="contact-information">

          <div className="contact-section-label">
            GET IN TOUCH
          </div>

          <h2>
            BUILD
            <span>SOMETHING</span>
            <strong>MEANINGFUL.</strong>
          </h2>

          <p className="contact-intro">
            Whether you are looking to develop a new product,
            improve an existing system, or simply have an idea
            you would like to discuss, we would be happy to
            hear from you.
          </p>


          {/* EMAIL */}

          <div className="contact-detail">

            <span className="contact-detail-label">
              COMPANY EMAIL
            </span>

            <a
              href="mailto:amadevelopers.03@gmail.com"
              className="contact-email"
            >
              amadevelopers.03@gmail.com
            </a>

          </div>


          {/* LOCATION */}

          <div className="contact-detail">

            <span className="contact-detail-label">
              LOCATION
            </span>

            <div className="contact-location">

              <strong>
                TELANGANA, INDIA
              </strong>

              <span>
                ONLINE • CONNECTED ACROSS CITIES
              </span>

              <p>
                We operate as an online technology company,
                collaborating with clients, teams, and
                organizations across cities in Telangana
                and beyond.
              </p>

            </div>

          </div>


          {/* AVAILABILITY */}

          <div className="contact-status">

            <span className="contact-status-dot" />

            <span>
              OPEN FOR NEW PROJECTS &amp; COLLABORATIONS
            </span>

          </div>

        </div>


        {/* ===================================================
            RIGHT FORM
        =================================================== */}

        <div className="contact-form-wrapper">

          <div className="contact-form-header">

            <span>
              START A CONVERSATION
            </span>

            <p>
              Tell us a little about what you are
              looking to build.
            </p>

          </div>


          <form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="contact-field">

              <label htmlFor="name">
                WHAT SHOULD WE CALL YOU?
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />

            </div>


            {/* EMAIL */}

            <div className="contact-field">

              <label htmlFor="email">
                WHERE CAN WE REACH YOU?
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />

            </div>


            {/* COMPANY */}

            <div className="contact-field">

              <label htmlFor="company">
                COMPANY / ORGANIZATION
                <span>OPTIONAL</span>
              </label>

              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company or organization name"
                autoComplete="organization"
              />

            </div>


            {/* SERVICE */}

            <div className="contact-field">

              <label htmlFor="service">
                WHAT ARE YOU LOOKING TO BUILD?
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                required
              >

                <option value="" disabled>
                  Select what you need
                </option>

                <option value="Web Development">
                  Web Development
                </option>

                <option value="App Development">
                  App Development
                </option>

                <option value="Software Development">
                  Software Development
                </option>

                <option value="Cloud Solutions">
                  Cloud Solutions
                </option>

                <option value="UI / UX Design">
                  UI / UX Design
                </option>

                <option value="Database Development">
                  Database Development
                </option>

                <option value="E-commerce Development">
                  E-commerce Development
                </option>

                <option value="Portfolio Development">
                  Portfolio Development
                </option>

                <option value="Customized Business Software">
                  Customized Business Software
                </option>

                <option value="Website Maintenance & Support">
                  Website Maintenance &amp; Support
                </option>

                <option value="Something Else">
                  Something Else
                </option>

              </select>

            </div>


            {/* MESSAGE */}

            <div className="contact-field">

              <label htmlFor="message">
                TELL US ABOUT IT
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us about your idea, requirement, project, or challenge..."
                required
              />

            </div>


            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className={`contact-submit ${
                status === "success" ? "submitted" : ""
              } ${
                status === "error" ? "submit-error" : ""
              }`}
              disabled={status === "sending"}
            >

              <span>
                {status === "sending"
                  ? "SENDING..."
                  : status === "success"
                  ? "MESSAGE SENT"
                  : status === "error"
                  ? "TRY AGAIN"
                  : "SEND MESSAGE"}
              </span>

              <span className="contact-submit-arrow">
                {status === "sending"
                  ? "..."
                  : status === "success"
                  ? "✓"
                  : status === "error"
                  ? "!"
                  : "↗"}
              </span>

            </button>


            {/* SUCCESS MESSAGE */}

            {status === "success" && (
              <p className="contact-form-success">
                Thank you for reaching out.
                Your message has been sent to
                Alaghna Technologies.
              </p>
            )}


            {/* ERROR MESSAGE */}

            {status === "error" && (
              <p className="contact-form-error">
                Something went wrong while sending
                your message. Please try again or
                email us directly.
              </p>
            )}


            {/* FORM NOTE */}

            <p className="contact-form-note">
              Your enquiry will be securely sent to the
              Alaghna Technologies team.
            </p>

          </form>

        </div>

      </section>


      {/* =====================================================
          BOTTOM STATEMENT
      ===================================================== */}

      <section className="contact-bottom">

        <div className="contact-bottom-content">

          <span>
            FROM IDEA
          </span>

          <h2>
            TO
            <strong>IMPACT.</strong>
          </h2>

          <p>
            Good technology starts with a good conversation.
          </p>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="contact-footer">

        <span>
          ALAGHNA TECHNOLOGIES
        </span>

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