import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          title="Email"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      {/* Google Scholar (new) */}
      {socialMediaLinks.googleScholar ? (
        <a
          href={socialMediaLinks.googleScholar}
          className="icon-button scholar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Scholar"
          title="Google Scholar"
        >
          {/* Using a graduation-cap icon from Font Awesome so you don't need extra icon packs */}
          <i class="fas fa-graduation-cap"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
