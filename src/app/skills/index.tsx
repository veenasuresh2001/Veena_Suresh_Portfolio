import './skills.css'

export default function Skills() {
    return (
        <div className="skills-section">

            <div className="skills-header">
                <h1>SKILLS</h1>
            </div>

            <div className="skills-container">

                <div className="skill-category">
                    <h3>Frontend</h3>
                    <div className="skill-tags">
                        <span>React.js</span>
                        <span>Next.js</span>
                        <span>JavaScript (ES6+)</span>
                        <span>TypeScript</span>
                        <span>Tailwind CSS</span>
                        <span>ShadCN UI</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Backend</h3>
                    <div className="skill-tags">
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>MongoDB</span>
                        <span>MySQL</span>
                        <span>JWT Authentication</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Tools & Others</h3>
                    <div className="skill-tags">
                        <span>Git & GitHub</span>
                        <span>REST API Integration</span>
                        <span>Turborepo</span>
                        <span>React Hook Form</span>
                        <span>Zod</span>
                    </div>
                </div>

            </div>

            <div className="more-skills">
                <h4>MORE SKILLS</h4>

                <div className="skill-tags">
                    <span>Creative Thinking</span>
                    <span>Problem Solving</span>
                    <span>Communication Skills</span>
                    <span>Team Collaboration</span>
                    <span>Time Management</span>
                    <span>Adaptability</span>
                    <span>Attention to Detail</span>
                    <span>UI/UX Sensibility</span>
                    <span>Analytical Thinking</span>
                    <span>Quick Learner</span>
                </div>
            </div>

        </div>
    )
}