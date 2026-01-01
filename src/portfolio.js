/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import RippleLoadingAnimation_gs from "./assets/lottie/RippleLoadingAnimation_gs"; // custom splash animation

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


// ===== Splash Screen =====
const splashScreen = {
  enabled: true,            // set false to disable splash
  animation: RippleLoadingAnimation_gs,
  duration: 2000            // ms
};

// ===== Greeting / Hero =====
const illustration = {
  animated: true            // false = use static SVG
};

const greeting = {
  username: "Welcome",
  title: "[Hello, I'm Girma]",
  subTitle: emoji(
      "Researcher & Software Engineer - AI/ML • Medical Imaging • Computational Biology."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1t10wyo3J6r-EAbEIXcUF3lB9gbSQKLga/view?usp=sharing",
  displayGreeting: true
};

// ===== Socials =====
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/girma-negashe/",
  github: "https://github.com/GirmaSis",
  gmail: "sisaygirma97@gmail.com",
  googleScholar:
    "https://scholar.google.com/citations?user=CEGtZ-YAAAAJ&hl=en",
  // intentionally omitted: medium, stackoverflow, twitter, facebook, kaggle, instagram, gitlab
  display: true
};

// ===== Skills =====
const skillsSection = {
  title: "Tech Stacks",
  display: true,
  subTitle:
   "AI/ML engineer with 10+ years in research and software development, focusing on medical imaging & responsible AI.",
  skills: [
    "• Develop deep learning models for MRI, CT, and X-ray data",
    "• Perform data analysis, visualization & ML pipelines",
    "• Build tools, apps, and dashboards for healthcare settings"
  ],
  // Font Awesome icon classes: https://fontawesome.com/icons
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "swift", fontAwesomeClassname: "fab fa-swift" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
};

// ===== Education =====

// Master of science in Computer Science
const educationInfo = {
  title: "Education",
  display: true,
  schools: [
    {
      schoolName: "University of Gondar",
      logo: require("./assets/images/logo-uog.png"),
      website: "https://www.uog.edu.et", // used to make the logo clickable
      subHeader: "Master of Science in Computer Science",
      duration: "September 2015 - August 2017",
      // JSX to style labels/links cleanly
      desc: (
        <div className="ed-desc">
          <span className="ed-label">Thesis:</span>{" "}
          Modified Segmentation Algorithm for Recognition of Older Geez Scripts
          Written on Vellum
          <div className="ed-links" style={{ marginTop: 6 }}>
            <span className="ed-label">Available at:</span>
            <a
              className="edu-link"
              href="https://arxiv.org/abs/2006.00465"
              target="_blank"
              rel="noopener noreferrer"
            >
              arXiv • Computer Vision and Pattern Recognition • AfricaNLP 2020
              Workshop
            </a>
          </div>
        </div>
      ),
      descBullets: [
        (
          <span>
            <span className="ed-label">
              <strong>GPA: </strong>
            </span>{" "}
            3.75/4.00 with <strong>Excellent</strong> thesis result
          </span>
        ),
        (
          <div>
            <span className="ed-label">Courses:</span>{" "}
            <div>
              <span className="ed-chip">Natural Language Processing</span>
              <span className="ed-chip">Distributed Computing</span>
              <span className="ed-chip">Object-Oriented Development</span>
              <span className="ed-chip">Research Methodology</span>
              <span className="ed-chip">Advanced Computer Networks</span>
              <span className="ed-chip">Project Management</span>
              <span className="ed-chip">Advanced DB Systems</span>
              <span className="ed-chip">Data Mining</span>
            </div>
          </div>
        ),
        (
          <span>
            <span className="ed-label">Website:</span>{" "}
            <a
              className="edu-link"
              href="https://informaticsuog.edu.et/"
              target="_blank"
              rel="noopener noreferrer"
            >
              College of Informatics | 
            </a>
            <a
              className="edu-link"
              href="https://www.uog.edu.et"
              target="_blank"
              rel="noopener noreferrer"
            >
             | University of Gondar
            </a>
          </span>
        )
      ]
    },

    // Bachelor of Science in Computer Science
    {
      schoolName: "University of Gondar",
      logo: require("./assets/images/logo-uog.png"),
      website: "https://www.uog.edu.et", // used to make the logo clickable
      subHeader: "Bachelor of Science in Computer Science",
      duration: "October 2010 - July 2014",
      // JSX to style labels/links cleanly
      desc: (
        <div className="ed-desc">
          <span className="ed-label">Final project:</span>{" "}
          Inventory management system for University of Gondar store
          <div className="ed-links" style={{ marginTop: 6 }}>
            <span className="ed-label">Available at:</span>
            <a
              className="edu-link"
              href="https://github.com/girmasis"
              target="_blank"
              rel="noopener noreferrer"
            >
             • Github • 
            </a>
          </div>
        </div>
      ),
      descBullets: [
        (
          <span>
            <span className="ed-label">
              <strong>GPA: </strong>
            </span>{" "}
            3.70/4.00 with <strong>Great Distinction</strong>
          </span>
        ),
        (
          <div>
            <span className="ed-label">Core courses:</span>{" "}
            <div>
              <span className="ed-chip">Data Structure & Algorithms</span>
              <span className="ed-chip">Distributed Systems</span>
              <span className="ed-chip">Object Oriented Programming</span>
              <span className="ed-chip">Software Engineering</span>
              <span className="ed-chip">Linux Network Administration</span>
              <span className="ed-chip">Compiler Design</span>
              <span className="ed-chip">Analysis of Algorithms</span>
              <span className="ed-chip">Advanced DB Systems</span>
              <span className="ed-chip">System Analysis & Design</span>
              <span className="ed-chip">Computer Organization & Architecture</span>
              <span className="ed-chip">Internet Programming </span>
              <span className="ed-chip">Formal Language Theory</span>
              <span className="ed-chip">Human-Computer Interaction</span>
              <span className="ed-chip">Computer Graphics</span>
              <span className="ed-chip">Computer Networking</span>
            </div>
          </div>
        ),
        (
          <span>
            <span className="ed-label">Website:</span>{" "}
            <a
              className="edu-link"
              href="https://informaticsuog.edu.et/"
              target="_blank"
              rel="noopener noreferrer"
            >
              College of Informatics | 
            </a>
            <a
              className="edu-link"
              href="https://www.uog.edu.et"
              target="_blank"
              rel="noopener noreferrer"
            >
             | University of Gondar
            </a>
          </span>
        )
      ]
    }
  ]
};

// ===== Skill Bars (optional older section) =====
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Deep Learning & AI", progressPercentage: "90%" },
    { Stack: "Medical Imaging (MRI/CT/X-ray)", progressPercentage: "85%" },
    { Stack: "Machine Learning & Data Analysis", progressPercentage: "90%" },
    { Stack: "Python & PyTorch", progressPercentage: "95%" }


  ],
  displayCodersrank: false
};

// ===== Work Experience (real entries from your CV) =====
// ===== Work Experience (with per-card gradients) =====
const workExperiences = {
  title: "Work Experience",
  display: true,
  experience: [
    {
      role: "Summer School Participant",
      company: "Mila - Quebec AI Institute",
      companylogo: require("./assets/images/mila2.png"),
      website: "https://mila.quebec/en/",
      date: "May 2025",
      location: "Montreal, Canada",
      desc: [ 
        "Responsible AI & Human Rights summer school.",
        "Bias, algorithmic fairness, transparency in AI models, AI governance, ethics, social impacts of AI, and global perspectives."
      ],
      //gradient: "linear-gradient(135deg, #00f5a0, #00d9f5, #0061ff)"
    },
    {
      role: "Research Engineer",
      company: "International Centre for Genetic Engineering and Biotechnology (ICGEB)",
      companylogo: require("./assets/images/icgeb.png"),
      website: "https://www.icgeb.org/",
      date: "Nov 2023 – Nov 2024",
      location: "Trieste, Italy",
      desc: [
        "ML/AI and image processing for computational biology projects.",
        "Models relevant to cancer evolution and population genetics.",
        "International, interdisciplinary collaboration."
      ],
      // 👇 NEW: gradient for animated background
      //gradient: "linear-gradient(135deg, #00c6ff, #0072ff, #4facfe, #00f2fe)"
    },
    {
      role: "Research Intern (CaCTüS Program)",
      company: "Max Planck Institute for Biological Cybernetics",
      companylogo: require("./assets/images/mpi2.png"),
      website: "https://www.kyb.tuebingen.mpg.de/",
      date: "2023",
      location: "Tübingen, Germany",
      desc: [
        "Natural scene image analysis and computational neuroscience.",
        "Member of Translational Sensory & Circadian Neuroscience group.",
        "Cross-institutional research collaboration."
      ],
     // gradient: "linear-gradient(135deg, #8e2de2, #4a00e0, #1f1c2c)"
    },
    {
      role: "Software Development Consultant",
      company: "HABTech Solutions PLC",
      companylogo: require("./assets/images/habtech2.jpeg"),
      website: "https://habtechsolutions.com/",
      date: "Jul 2023 – Sep 2023",
      location: "Ethiopia",
      desc: [
        "Web app development and server optimization.",
        "System analysis, architecture, implementation, maintenance.",
        "Consulting on modern stacks and deployment best practices."
      ],
      //gradient: "linear-gradient(135deg, #00b09b, #96c93d, #38ef7d)"
    },
    
    {
      role: "Software Developer",
      company: "Center for Digital Health and Implementation Science",
      companylogo: require("./assets/images/cdhi.jpeg"),
      website: "https://cdhis.uog.edu.et/",
      date: "Feb 2019 – Jun 2023",
      location: "Ethiopia",
      desc: [
        "Built and customized digital health applications.",
        "Java, JS, Python, PHP, Web APIs; data-driven solutions.",
        "Worked with clinicians and public health teams."
      ],
     // gradient: "linear-gradient(135deg, #232526, #414345, #2c3e50)"
    },
    {
      role: "Researcher & Lecturer",
      company: "University of Gondar",
      companylogo: require("./assets/images/logo-uog.png"),
      website: "https://www.uog.edu.et/",
      date: "Nov 2014 – Present",
      location: "Gondar, Ethiopia",
      desc: [
        "Research in AI, data science, and digital health.",
        "Teaching, supervision, training, and community service."
      ],
     //gradient: "linear-gradient(135deg, #36d1dc, #5b86e5, #0f2027)"
    }
    
  ]
};


// ===== Open Source (GitHub pinned) =====
const openSource = {
  showGithubProfile: "true",
  display: true
};

// ===== Big Projects =====
const bigProjects = {
  title: "Projects",
  display: true,
  subtitle: "Projects from my GitHub repository.",
  projects: [
    {
      image: require("./assets/images/brain 2.png"),
      projectName: "Interpretable Brain Tumor MRI Classification (CNN + Grad-CAM)",
      projectDesc: "CNN model to classify brain tumor MRI scans and uses Grad-CAM to show which regions influenced each prediction.",
      footerLink: [{ name: "[View Project]", url: "https://github.com/GirmaSis/brain-tumor-mri-CNN-Grad-CAM/tree/main" }]
    },
    {
      image: require("./assets/images/lung.png"),
      projectName: "Lung Segmentation from Chest CT Scans (U-Net, PyTorch Lightning)",
      projectDesc: "3D chest CT scans using a U-Net model in PyTorch Lightning, producing clean masks and reporting metrics like Dice, IoU, and F1.",
      footerLink: [{ name: "[View Project]", url: "https://github.com/GirmaSis/lung-segmentation-DL" }]
    }
  ],
};

// ===== Achievements =====
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Award Letters",
  achievementsCards: [
    {
      title: "Summer School in Responsible AI and Human Rights",
      subtitle:
        "• Responsible AI, Bias, Fairness, Transparency in AI algorithms, Human rights-centered AI design, Inclusive AI, AI Ethics, AI Governance, Ethical Data Management in AI •",
      image: require("./assets/images/mila2.png"),
      imageAlt: "Mila logo",
      
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://drive.google.com/file/d/16EGy5Aecmw7KeHzorzx_nO-fp68qDaUO/view?usp=sharing"
        },
        {
          name: "Mila Summer School",
          url:
            "https://mila.quebec/en/continuing-education/summer-school-in-responsible-ai-and-human-rights"
        },
        {
          name: "Read the story",
          url:
            "https://mila.quebec/en/news/highlights-from-the-2025-summer-school-in-responsible-ai-and-human-rights"
        }
      ]
    },
    {
      title: "Data Analysis with Python",
      subtitle:
        "• Data Analysis, Data Pipelines, Scikit Learn, Regression Analysis, Exploratory Data Analysis, Data-Driven Decision-Making, Data Manipulation, Predictive Modeling •",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Coursera logo",
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://drive.google.com/file/d/17GfE__1uQFFsh6rTTmmXgG6Gnmy9dNSn/view?usp=sharing"
        },
        {
          name: "Available at",
          url:
            "https://www.coursera.org/account/accomplishments/verify/4AMBCNMLYGK4"
        }
      ]
    },
    {
      title: "Computation & Cognition Tübingen Summer Internship",
      subtitle: "• Analyzed natural scene images to derive complex visual data insights at the Max Planck Translational Sensory & Circadian Neuroscience group •",
      image: require("./assets/images/cactus.jpeg"),

      imageAlt: "cactus logo",
      footerLink: [
        { 
          name: "Certificate", 
          url: "https://drive.google.com/file/d/1USkH0FyLGl0efKuXmHszTG4TPMUre2Xj/view?usp=sharing" 
        },
        {
          name: "Blog post",
          url:
            "https://www.tscnlab.org/news/cacts-interns-join-the-mpi"
        },
        {
          name: "CaCTüS",
          url:
            "https://www.projects.tuebingen.mpg.de/"
        }
      ]
    },
    {
      title: "TensorFlow for AI, Machine Learning, and Deep Learning",
      subtitle: "• Artificial Neural Networks, Deep Learning, Tensorflow, Keras, Computer Vision, Machine Learning, Image Analysis •",
      image: require("./assets/images/deep.png"),
      imageAlt: "deeplearning logo",
      footerLink: [
        { 
          name: "Certificate", 
          url: "https://www.coursera.org/account/accomplishments/verify/VSVK49HDZQYX" 
        }
      ]
    },

    {
      title: "Indigenous Perspectives in AI - Post Graduate",
      subtitle: "• Explore how Indigenous worldviews intersect with AI ethics and governance •",
      image: require("./assets/images/CIFAR.png"),
      imageAlt: "CIFAR logo",
      footerLink: [
        { 
          name: "Certificate", 
          url: "https://drive.google.com/file/d/1jy5Oj9O5Xwfsbjy9fvAYNBIXwCnoxbVX/view?usp=sharing" 
        }
      ]
    },
    
    {
      title: "Pathway Construction and Network Analysis Towards New Knowledge Discovery",
      subtitle: "• Data preparation using omics datasets, Leveraging pathway databases & data integration, Network analysis, clustering & enrichment analysis-(Cytoscape, STRING, GeneMANIA, KEGG) •",
      image: require("./assets/images/malaysia.png"),
      imageAlt: "malaysia logo",
      footerLink: [
        { 
          name: "Certificate", 
          url: "https://drive.google.com/file/d/14UfQbIJgBNtEsoVaWpWjzQa1AhP9wBZg/view?usp=sharing" 
        },
        {
          name: "Read more",
          url:
            "https://www.ukm.my/inbiosis/en/pathway-workshop2024/"
        }
      ]
    }


  ],
  display: true
};

// ===== Media & Mentions - Hide =====
const blogSection = {
  title: "Media & Mentions",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url:
        " ",
      title: " ",
      description:
        " "
    },
    {
      url: " ",
      title: " ",
      description:
        " "
    }
  ],
  display: false
};

// ===== Talks - Hide =====
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    " "
  ),
  talks: [
    {
      title: " ",
      subtitle: " ",
      slides_url: " ",
      event_url: " "
    }
  ],
  display: false
};

// ===== Podcast =====
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [
    "linkedin", // to be replaced with podcast links
  ],
  display: false
};

// ===== Resume Section =====
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// ===== Contact =====
const contactInfo = {
  title: emoji("Get in Touch"),
  subtitle: "Let's connect and discuss how we can collaborate!",
  number: (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px", marginBottom: "-40px" }}>
      <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <FaWhatsapp style={{ color: "#25D366", fontSize: "1.9rem" }} />
        <span style={{ fontSize: "1.4rem", color: "#333" }}>
          +39 351 313 1494
        </span>
      </span>
    </div>
  ),
  email_address: (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px", marginBottom: "-10px" }}>
      <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <MdEmail style={{ color: "#1E90FF", fontSize: "1.9rem" }} />
        <span style={{ fontSize: "1.4rem", color: "#333" }}>
          sisaygirma97@gmail.com | Girma.Sisay@uog.edu.et
        </span>
      </span>
    </div>
  ),
};



// ===== Twitter =====
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
