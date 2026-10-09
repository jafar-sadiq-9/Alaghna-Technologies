import { Link } from "react-router-dom";
import "../styles/services.css";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "WEB DEVELOPMENT",
      punchline: "Websites built to move your business forward.",
      description:
        "We create modern, responsive, and high-performance websites designed around your business goals. From professional company websites to dynamic web platforms, we focus on clean interfaces, smooth experiences, scalability, and reliability. Every website is built to represent your brand effectively while providing a seamless experience across devices.",
    },
    {
      number: "02",
      title: "APP DEVELOPMENT",
      punchline: "Turning ideas into powerful digital experiences.",
      description:
        "We develop applications that are designed around real user needs and practical business requirements. Our approach focuses on creating intuitive experiences, reliable functionality, and scalable solutions. Whether it is a new application or an existing idea that needs to become reality, we work towards building technology that people can actually use.",
    },
    {
      number: "03",
      title: "SOFTWARE DEVELOPMENT",
      punchline: "Software engineered around the problem.",
      description:
        "We build customized software solutions for businesses, institutions, and individual requirements. Instead of forcing a problem into an existing solution, we understand the requirement first and engineer software around it. Our focus remains on scalability, security, maintainability, and delivering software that creates real value.",
    },
    {
      number: "04",
      title: "CLOUD SOLUTIONS",
      punchline: "Building technology that scales with you.",
      description:
        "We help businesses move towards reliable and scalable cloud-based solutions. From application deployment and cloud infrastructure to optimization and integration, we focus on creating environments that support growth. Our solutions are designed to improve accessibility, flexibility, performance, and operational efficiency.",
    },
    {
      number: "05",
      title: "UI/UX DESIGN",
      punchline: "Designing experiences people understand.",
      description:
        "We design digital experiences that combine visual quality with usability. Our process focuses on understanding users, simplifying interactions, and creating interfaces that feel natural to navigate. From the first interaction to the final experience, we aim to make every digital product clear, engaging, and meaningful.",
    },
    {
      number: "06",
      title: "DATABASE DEVELOPMENT",
      punchline: "Organizing data for smarter systems.",
      description:
        "We design and develop database solutions that keep applications reliable, structured, and efficient. From database architecture and data organization to optimization and integration, we focus on creating systems that can handle growing requirements. The goal is simple — secure, accessible, and well-structured data that supports better software.",
    },
    {
      number: "07",
      title: "E-COMMERCE DEVELOPMENT",
      punchline: "Turning online visitors into customers.",
      description:
        "We develop e-commerce experiences that make buying simple, intuitive, and reliable. From product presentation and user experience to shopping functionality and backend systems, we focus on creating platforms that support both customers and businesses. Every element is designed to make the digital buying journey smoother.",
    },
    {
      number: "08",
      title: "PORTFOLIO DEVELOPMENT",
      punchline: "Your work deserves more than a document.",
      description:
        "We create professional portfolios that showcase skills, projects, achievements, and personal identity through a strong digital presence. Whether you are a developer, designer, student, professional, or creative individual, we transform your work into an engaging online experience that helps you stand out.",
    },
    {
      number: "09",
      title: "CUSTOMIZED BUSINESS SOFTWARE",
      punchline: "Your business is unique. Your software should be too.",
      description:
        "We develop software specifically around the way your business operates. From internal management systems and automation to specialized business applications, we understand your workflow and create technology around it. This allows businesses to reduce repetitive work, improve efficiency, and have systems that genuinely match their requirements.",
    },
    {
      number: "10",
      title: "WEBSITE MAINTENANCE & SUPPORT",
      punchline: "Keeping your digital presence running.",
      description:
        "Launching a website is only the beginning. We provide ongoing maintenance and support to keep websites secure, updated, functional, and performing reliably. From improvements and updates to troubleshooting and technical assistance, we help ensure your digital presence continues to work as your needs evolve.",
    },
  ];

  return (
    <main className="services-page">

      {/* =========================
          SERVICES HERO
      ========================= */}
      <section className="services-hero">

        <div className="services-hero-content">

          <div className="services-eyebrow">
            <span className="services-eyebrow-line" />
            ALAGHNA TECHNOLOGIES
          </div>

          <h1>
            WHAT WE
            <span>BUILD.</span>
          </h1>

          <p>
            From ideas to digital products, we build technology
            around real problems, real people, and real goals.
          </p>

        </div>

        <div className="services-hero-index">
          <span>02</span>
          <span>SERVICES</span>
        </div>

      </section>


      {/* =========================
          SERVICES LIST
      ========================= */}
      <section className="services-list">

        {services.map((service) => (
          <article
            className="service-item"
            key={service.number}
          >

            <div className="service-heading-row">

              <div className="service-title-wrap">

                <span className="service-number">
                  {service.number}
                </span>

                <h2 className="service-title">
                  {service.title}
                </h2>

              </div>

              <h3 className="service-punchline">
                {service.punchline}
              </h3>

            </div>


            <div className="service-description">

              <p>
                {service.description}
              </p>

            </div>

          </article>
        ))}

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="services-final">

        <div className="services-final-content">

          <span>HAVE SOMETHING IN MIND?</span>

          <h2>
            LET&apos;S TURN
            <strong>IDEAS INTO REALITY.</strong>
          </h2>

          <p>
            Tell us what you are trying to build.
            We will work with you to find the right solution.
          </p>

          <Link
            to="/contact"
            className="services-final-button"
          >
            <span>START A CONVERSATION</span>
            <span>↗</span>
          </Link>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="services-footer">

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