import "./styles/Career.css";

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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>ACC</h5>
              </div>
              <h3>SEP 2025</h3>
            </div>
            <p>
              Worked on AI-driven products, dashboards, mobile apps, and
              websites — including WeatherXpert (TATA), Axis Bank portal, NDTV
              Profit panel, and banking AI agents. Used tools like Figma AI,
              Claude, Pencil.dev, and Google Stitch to quickly explore and
              refine design ideas. Turned designs into frontend-ready outputs
              using AI, while also learning basic deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Anvis Digital</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Designed Kintree – a family connection and heritage-tracking app.
              Also crafted UI/UX for Nutria, an AI fitness and nutrition app.
              Designed websites for Casaire, The Bombay Store, Dente91, Saamya,
              and landing pages for Emgee Greens and Times Education Expo 2025.
              Conducted UX audits, competitive analysis, and secondary research.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Active Neurons</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Worked on Mobile Applications, E-commerce Websites, LMS Portals,
              Creative Websites, Landing Pages, Pitch Design, and Internal
              Mobile Applications. Proficient in user research, wireframing,
              prototyping, and interaction design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
