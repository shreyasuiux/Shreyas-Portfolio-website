import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "Kintree",
    category: "Family Connection & Heritage App",
    tools: "UI/UX Design, User Research, Mobile App, Family Tree Mapping",
    image: "/images/kintree.png",
    link: "https://kintree.com/",
  },
  {
    title: "Nutriiya",
    category: "AI Fitness & Nutrition App",
    tools: "Mobile UI, AI Insights, Health Tracking, Nutrition Coach",
    image: "/images/nutriiya.png",
    link: "https://nutriiya.com/",
  },
  {
    title: "TATA Power Weather Dashboard",
    category: "AI-Driven Weather Dashboard",
    tools: "Figma, AI Workflow, User Research, Dashboard Design",
    image: "/images/tata-weather.png",
    link: "https://tatadashboard.figma.site",
  },
  {
    title: "Atlas Axis Bank",
    category: "Banking Portal & Customer 360",
    tools: "Dashboard Design, Data Visualization, Enterprise UX",
    image: "/images/axis-bank.png",
    link: "https://customer360.acc.ltd",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-gallery">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <div className="work-image-wrapper">
                <WorkImage
                  image={project.image}
                  alt={project.title}
                  link={project.link}
                />
              </div>
              <div className="work-card-info">
                <div className="work-card-header">
                  <h3>0{index + 1}</h3>
                  <h4>{project.title}</h4>
                </div>
                <p className="work-card-category">{project.category}</p>
                <div className="work-card-tools">
                  <span>Tools & Features</span>
                  <p>{project.tools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
