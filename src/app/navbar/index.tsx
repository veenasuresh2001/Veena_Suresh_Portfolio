import { User, Instagram, Linkedin, Github, X, Menu } from "lucide-react";
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">

            <div className="user">
                <div className="usericon">
                    <User size={18} />
                </div>
                <p className="username">Veena Suresh</p>
            </div>

            <div className={`nav-items ${isOpen ? "active" : ""}`}>
                <p onClick={() => document.getElementById("home")?.scrollIntoView()}>Home</p>
                <p onClick={() => document.getElementById("about")?.scrollIntoView()}>About</p>
                <p onClick={() => document.getElementById("experience")?.scrollIntoView()}>Experience</p>
                <p onClick={() => document.getElementById("education")?.scrollIntoView()}>Education</p>
                <p onClick={() => document.getElementById("skills")?.scrollIntoView()}>Skills</p>
                <p onClick={() => document.getElementById("contact")?.scrollIntoView()}>Contact</p>
            </div>

            <div className="social">
                <Instagram size={18} />
                <Linkedin size={18} />
                <Github size={18} />
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>

        </div>
    );
}