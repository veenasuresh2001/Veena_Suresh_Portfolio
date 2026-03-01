
import { BriefcaseBusiness } from "lucide-react";
import "./experience.css";

export default function Experience() {
  return (
    <div className="experience-section">

      <div className="exp-header">
        <h1>EXPERIENCE</h1>
      </div>

  
      <div className="exp-timeline">

     
        <div className="exp-item">
          <div className="exp-left">
            <span className="exp-number">01</span>
          </div>

          <div className="exp-right">
            <div className="exp-icon">
              <BriefcaseBusiness size={18} />
            </div>
            <h3>Junior React Developer</h3>
            <p className="company">GHO Technologies Pvt Ltd</p>
            <p className="desc">
              Building responsive healthcare web applications using React.js, integrating REST APIs, and contributing to a monorepo-based component architecture with shared UI components, hooks, and utilities to maintain design consistency and streamline development across feature and dashboard applications.
            </p>
            <span className="year">2024 — Present</span>
          </div>
        </div>

   
        <div className="exp-item reverse">
          <div className="exp-left">
            <span className="exp-number">02</span>
          </div>

          <div className="exp-right">
            <div className="exp-icon">
              <BriefcaseBusiness size={18} />
            </div>
            <h3>MERN Stack Developer Intern</h3>
            <p className="company">CamerinFolks Pvt Ltd</p>
            <p className="desc">
             Building scalable and responsive e-commerce platforms using React.js and Node.js, implementing reusable component-driven architecture, developing RESTful backend services with Express.js, integrating secure authentication (JWT), managing product and order workflows, and optimizing performance for seamless user experience.
            </p>
            <span className="year">Feb 2024 — August 2024</span>
          </div>
        </div>

      </div>
    </div>
  );
}