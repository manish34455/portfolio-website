import "./styles/Career.css";

const careerItems = [
  {
    role: "Python Full Stack Developer",
    company: "AV Management Pvt Ltd",
    period: "Jul 2026 - Present",
    summary:
      "Building fintech CRM and loan platforms across Django REST Framework, React, MySQL, TeleCMI, Twilio, Meta WhatsApp Cloud API, Leegality, and internal automation workflows.",
  },
  {
    role: "Freelance Web & Automation Developer",
    company: "Anmol Jewellers",
    period: "2025 - Jul 2026",
    summary:
      "Delivered e-commerce, WhatsApp chatbot, Hindi voice bot, catalogue, marketing, and SEO automation work for a multi-branch jewellery business across Ludhiana, Delhi, Jammu, and Mohali.",
  },
  {
    role: "Angular Developer",
    company: "Nirjai Technologies - Pathkind Diagnostics",
    period: "Jun 2025 - Mar 2026",
    summary:
      "Built client-facing Angular modules for healthcare diagnostics workflows, focusing on structured UI, reusable components, and integration-ready frontend screens.",
  },
  {
    role: "Python Full Stack Intern",
    company: "QSpiders, Noida",
    period: "Nov 2024 - Jun 2025",
    summary:
      "Completed six months of Python full stack training and hands-on practice across backend fundamentals, frontend development, databases, authentication, and deployment basics.",
  },
  {
    role: "B.Tech Computer Science",
    company: "PCTE Group of Institutes, Ludhiana",
    period: "2025",
    summary:
      "Built the computer science foundation behind my current work: programming, web systems, databases, project development, and practical software engineering discipline.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerItems.map((item) => (
            <div className="career-info-box" key={`${item.role}-${item.period}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
