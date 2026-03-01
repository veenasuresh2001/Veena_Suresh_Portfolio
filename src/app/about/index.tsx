import { Mail, MapPin, Phone } from 'lucide-react'
import './about.css'

export default function About() {
  return (

    <div className="about">

      <div className="about-right"></div>

      <div className="about-left">
        <div className="about-content">
          <div className='about-me'>
            <h6 className="tag">HELLO THERE</h6>
            <h2>About Me</h2>

            <p>
              Skilled Frontend Developer with 1+ year of experience building
              responsive, high-performance web applications using React.js, Next Js,
              JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS.
            </p>

            <p>
              Experienced in API integration, reusable component architecture,
              and performance optimization. Passionate about delivering clean,
              scalable, and user-centric solutions.
            </p>
          </div>

          <div className="personal-details">
            <div className="detail-item">
              <Phone size={18} />
              <span>+91 9745579031</span>
            </div>

            <div className="detail-item">
              <Mail size={18} />
              <span>veenasuresh28487@gmail.com</span>
            </div>

            <div className="detail-item">
              <MapPin size={18} />
              <span>Kochi, Kerala</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}