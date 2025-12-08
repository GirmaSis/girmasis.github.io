// src/containers/workExperience/WorkExperience.js
import React from "react";
import { Fade } from "react-reveal";
import "./WorkExperience.scss";
import { workExperiences as we } from "../../portfolio";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

const normalizeData = () => {
  // supports both shapes:
  // 1) { display: true, experience: [...] }  (your current portfolio.js)
  // 2) [ ... ]                               (future-proof)
  const display = Array.isArray(we) ? true : we?.display !== false;
  const entries = Array.isArray(we) ? we : we?.experience || [];
  return { display, entries };
};

export default function WorkExperience() {
  const { display, entries } = normalizeData();
  if (!display || entries.length === 0) return null;

  return (
    <section className="work-section" id="work-experience">
      <Fade bottom duration={1000} distance="40px">
        <h1 className="work-heading">Experience</h1>

        <div className="work-card-container">
          {entries.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </Fade>
    </section>
  );
}
