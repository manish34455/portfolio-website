import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Python Full Stack Developer building fintech and CRM products
          with Django, DRF, React, MySQL, and production API integrations.
        </p>
        <div className="about-details">
          <p>
            At AV Management Pvt Ltd in Patiala, I work across backend APIs,
            frontend workflows, database design, calling systems, WhatsApp lead
            capture, e-signature flows, IVR routing, and internal automation for
            loan operations.
          </p>
          <p>
            I am based in Ludhiana, Punjab, completed my B.Tech in Computer
            Science from PCTE Group of Institutes in 2025, and I am open to
            relocating to Delhi, Noida, Gurugram, or Bangalore for strong
            engineering roles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
