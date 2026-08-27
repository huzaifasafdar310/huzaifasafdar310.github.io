import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import CertificationsImg from "./CertificationsImg";
import { certifications } from "../../portfolio";
import { Fade } from "react-reveal";
import "./CertificationsComponent.css";

class CertificationsComponent extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="certifications-main">
        <Header theme={theme} />
        <div className="basic-certifications">
          <Fade bottom duration={2000} distance="40px">
            <div className="certifications-heading-div">
              <div className="certifications-heading-img-div">
                <CertificationsImg theme={theme} />
              </div>
              <div className="certifications-heading-text-div">
                <h1
                  className="certifications-heading-text"
                  style={{ color: theme.text }}
                >
                  {certifications.title || "Licenses & Certifications"}
                </h1>
                <p
                  className="certifications-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {certifications.subtitle ||
                    "Verified professional credentials, specialization certificates, and completed industry coursework in Agentic AI, Machine Learning, Cloud Computing, and Generative AI."}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="certs-cards-div-main">
          {certifications.certifications.map((cert) => {
            return (
              <CertificationCard
                key={cert.title}
                certificate={cert}
                theme={theme}
              />
            );
          })}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default CertificationsComponent;
