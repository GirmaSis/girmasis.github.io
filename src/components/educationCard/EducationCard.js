import React, { createRef, useContext } from "react";
import { Fade, Slide } from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const imgRef = createRef();
  const { isDark } = useContext(StyleContext);

  // --- helper: extract first URL from a string (e.g., "Website: https://www.uog.edu.et")
  const extractUrl = (str = "") => {
    if (typeof str !== "string") return null;
    const match = str.match(/https?:\/\/[^\s)]+|www\.[^\s)]+/i);
    if (!match) return null;
    const url = match[0];
    return url.startsWith("http") ? url : `https://${url}`;
  };

  // --- helper: scan descBullets for a URL if present (only works for string bullets)
  const urlFromBullets = Array.isArray(school?.descBullets)
    ? school.descBullets.map(extractUrl).find(Boolean)
    : null;

  // --- choose the website url in priority order:
  // 1) explicit school.website (if you add it in portfolio.js)
  // 2) first URL found in string descBullets (e.g., "Website: https://...")
  const websiteUrl = school?.website || urlFromBullets || null;

  // old helper kept for future use
  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  // NEW: render all details (desc + bullets) as a timeline
  const Timeline = ({ desc, bullets = [] }) => {
    const items = [];
    if (desc) items.push(desc);
    if (Array.isArray(bullets)) items.push(...bullets);

    return (
      <ul className="education-timeline">
        {items.map((node, i) => (
          <li key={i} className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-content">{node}</div>
          </li>
        ))}
      </ul>
    );
  };

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              {websiteUrl ? (
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${school.schoolName} website`}>
                  <img
                    crossOrigin={"anonymous"}
                    ref={imgRef}
                    className="education-roundedimg"
                    src={school.logo}
                    alt={school.schoolName}
                  />
                </a>
              ) : (
                <img
                  crossOrigin={"anonymous"}
                  ref={imgRef}
                  className="education-roundedimg"
                  src={school.logo}
                  alt={school.schoolName}
                />
              )}
            </div>
          )}

          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>

              <p className={`${isDark ? "dark-mode" : ""} education-text-duration`}>
                {school.duration}
              </p>

              {/* === NEW TIMELINE (desc + bullets) === */}
              <Timeline desc={school.desc} bullets={school.descBullets} />

              {/* === LEGACY LIST (kept for future use) ===
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
              */}
            </div>
          </div>
        </div>
      </Fade>

      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
