// src/components/experienceCard/ExperienceCard.js
import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({ experience }) {
  if (!experience) return null;

  const {
    role,
    company,
    companylogo,   // path from portfolio.js (require("./assets/images/xx.png"))
    date,
    location,
    desc,          // string OR array of strings (optional)
    descBullets,   // array of strings (optional)
    website,       // optional: makes logo + company name clickable
    gradient       // optional: CSS gradient string used by CSS var --card-gradient
  } = experience;

  const wrapIfLink = (children) =>
    website ? (
      <a
        className="work-link"
        href={website.startsWith("http") ? website : `https://${website}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${company || "Company"} website`}
      >
        {children}
      </a>
    ) : (
      children
    );

  const title =
    role && company ? `${role} — ${company}` : role || company || "";

  // normalize desc to an array for consistent rendering
  const descItems = Array.isArray(desc) ? desc : desc ? [desc] : [];
  const bullets = Array.isArray(descBullets) ? descBullets : [];

  return (
    <div
      className="experience-card"
      style={gradient ? { ["--card-gradient"]: gradient } : undefined}
      data-gradient={Boolean(gradient)}
    >
      {/* Left column: centered logo in its own box (no circle clipping) */}
      {companylogo && (
        <div className="experience-card-left">
          {wrapIfLink(
            <div className="experience-logo-box">
              <img
                className="experience-logo"
                src={companylogo}
                alt={company || "Company"}
                loading="lazy"
              />
            </div>
          )}
        </div>
      )}

      {/* Right column: text */}
      <div className="experience-card-right">
        {wrapIfLink(<h5 className="experience-title">{title}</h5>)}

        {(date || location) && (
          <p className="experience-subtitle">
            {date}
            {date && location ? " • " : ""}
            {location}
          </p>
        )}

        {/* Optional multi-line description */}
        {descItems.length > 0 && (
          <div className="experience-desc">
            {descItems.map((d, idx) => (
              <p key={idx}>{d}</p>
            ))}
          </div>
        )}

        {/* Optional bullets */}
        {bullets.length > 0 && (
          <ul className="experience-bullets">
            {bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
