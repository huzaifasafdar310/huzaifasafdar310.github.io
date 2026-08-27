import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    const displayImg = certificate.certificate_image || certificate.logo_path;

    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card" style={{ borderColor: theme.highlight }}>
          <div className="content">
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate.color_code }}
              >
                <img
                  className={
                    certificate.certificate_image
                      ? "cert_preview_img"
                      : "logo_img"
                  }
                  src={require(`../../assets/images/${displayImg}`)}
                  alt={certificate.alt_name || certificate.title}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: "#ffffff" }}>
                  View Credential ↗
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
            <div className="cert-body-meta">
              {certificate.issue_date && (
                <span
                  className="cert-date-badge"
                  style={{
                    color: theme.secondaryText,
                    borderColor: theme.highlight,
                  }}
                >
                  <span role="img" aria-label="date">
                    📅
                  </span>{" "}
                  {certificate.issue_date}
                </span>
              )}
              {certificate.credential_id && (
                <span
                  className="cert-id-badge"
                  style={{
                    color: theme.secondaryText,
                    borderColor: theme.highlight,
                  }}
                >
                  ID: {certificate.credential_id}
                </span>
              )}
            </div>
            {certificate.certificate_link && (
              <a
                href={certificate.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-view-link"
                style={{ color: theme.imageHighlight }}
              >
                Show Credential ↗
              </a>
            )}
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
