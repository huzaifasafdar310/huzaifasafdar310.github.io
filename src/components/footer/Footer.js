import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  const theme = props.theme || {};
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="footer-div"
      style={{ borderTop: `1px solid ${theme.highlight || "#e0e0e0"}` }}
    >
      <Fade>
        <footer className="footer-content">
          <div className="footer-top">
            <div className="footer-brand">
              <h3 className="footer-title" style={{ color: theme.text }}>
                &lt;{greeting.title} /&gt;
              </h3>
              <p className="footer-desc" style={{ color: theme.secondaryText }}>
                {greeting.nickname} — Building autonomous agentic systems and
                distributed backend infrastructure.
              </p>
            </div>

            <div className="footer-links-group">
              <div className="footer-nav">
                <span className="footer-heading" style={{ color: theme.text }}>
                  Explore
                </span>
                <a href="/home" style={{ color: theme.secondaryText }}>
                  Home
                </a>
                <a href="/projects" style={{ color: theme.secondaryText }}>
                  Projects
                </a>
                <a href="/experience" style={{ color: theme.secondaryText }}>
                  Experience
                </a>
                <a
                  href="/certifications"
                  style={{ color: theme.secondaryText }}
                >
                  Certifications
                </a>
                <a href="/resume" style={{ color: theme.secondaryText }}>
                  Resume
                </a>
              </div>

              <div className="footer-contact">
                <span className="footer-heading" style={{ color: theme.text }}>
                  Connect
                </span>
                <a
                  href="mailto:huzaifasafdar310@gmail.com"
                  style={{ color: theme.secondaryText }}
                >
                  <span role="img" aria-label="email">
                    ✉️
                  </span>{" "}
                  huzaifasafdar310@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/huzaifaali-"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.secondaryText }}
                >
                  <span role="img" aria-label="linkedin">
                    💼
                  </span>{" "}
                  LinkedIn
                </a>
                <a
                  href="https://github.com/huzaifasafdar310"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.secondaryText }}
                >
                  <span role="img" aria-label="github">
                    🐙
                  </span>{" "}
                  GitHub
                </a>
                <a
                  href="/Huzaifa_Ali_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.secondaryText }}
                >
                  <span role="img" aria-label="resume">
                    📄
                  </span>{" "}
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div
            className="footer-bottom"
            style={{ borderTop: `1px solid ${theme.highlight || "#f0f0f0"}88` }}
          >
            <p className="footer-text" style={{ color: theme.secondaryText }}>
              Designed &amp; Built with{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              by{" "}
              <span style={{ color: theme.text, fontWeight: 700 }}>
                {greeting.title}
              </span>{" "}
              &copy; {currentYear}
            </p>
          </div>
        </footer>
      </Fade>
    </div>
  );
}
