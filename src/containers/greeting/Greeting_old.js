import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) return null; // keep current behavior :contentReference[oaicite:0]{index=0}

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              {/* Title + wave (unchanged structure) */}
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>

              {/* SubTitle */}
              <p
                className={
                  isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              {/* NEW: small “chips” to stand out (edit or remove freely) */}
              <ul className="greet-chips" aria-label="highlights">
                <li>AI/ML • Medical Imaging • XAI</li>
                <li>Open to Research Collaborations</li>
                <li>Mentoring & Community Engagement</li>
              </ul>

              <div id="resume" className="empty-div"></div>
              <SocialMedia />

              {/* Buttons */}
              <div className="button-greeting-div">
                {/* Contact anchor (same Button component, clearer label) */}
                <a
                  href="#contact"
                  className="btn-accent btn-text-dark"
                  aria-label="Go to contact section"
                  title="Get in touch"
                >
                  <Button text="Get in touch" />
                </a>

                {/* View CV on Google Drive in a new tab (no local require) */}
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent btn-text-dark"
                    aria-label="View CV on Google Drive"
                    title="View CV (opens in a new tab)"
                  >
                    <Button text="View CV" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Illustration (kept from template) */}
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
