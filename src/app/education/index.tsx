import { GraduationCap } from "lucide-react";
import "./education.css";

export default function Education() {
  return (
    <div className="education-section" id="education">

      {/* Header */}
      <div className="edu-header">
        <h1>EDUCATION</h1>
      </div>

      <div className="edu-timeline">

        <div className="edu-item">
          <div className="edu-left">
            <span className="edu-number">01</span>
          </div>

          <div className="edu-right">
            <div className="edu-icon">
              <GraduationCap size={18} />
            </div>
            <h3>Master of Computer Applications (MCA)</h3>
            <p className="institution">Nirmala College, Muvattupuzha</p>
            <span className="year">2022 — 2024</span>
          </div>
        </div>

        <div className="edu-item reverse">
          <div className="edu-left">
            <span className="edu-number">02</span>
          </div>

          <div className="edu-right">
            <div className="edu-icon">
              <GraduationCap size={18} />
            </div>
            <h3>Bachelor’s Degree (Bsc Computer Science)</h3>
            <p className="institution">Swami Saswathikananda College , Poothootta</p>
            <span className="year">2019 — 2022</span>
          </div>
        </div>

      </div>
    </div>
  );
}