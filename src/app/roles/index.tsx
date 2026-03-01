import './roles.css'
import { Monitor, Code2, Palette } from "lucide-react";

export default function Roles() {
  return (
    <div className="roles">
      <div className="role-item">
        <Monitor size={20} />
        <span>Frontend Developer</span>
      </div>

      <div className="role-item">
        <Code2 size={20} />
        <span>React & Next.js Developer</span>
      </div>

      <div className="role-item">
        <Palette size={20} />
        <span>UI Enthusiast</span>
      </div>
    </div>
  );
}