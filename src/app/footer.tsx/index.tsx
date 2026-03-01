import { useRef, useState } from 'react';
import './footer.css'
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Footer() {
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current
            )
            .then(() => {
                toast.success("Message sent successfully!");
                e.target.reset();
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Something went wrong. Please try again.");
                setLoading(false);
            });
    };
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-left">
                    <h2>Get In Touch</h2>
                    <p>
                        Let’s connect to discuss collaborations, freelance opportunities, or exciting new ideas.
                    </p>
                </div>

                <div className="footer-right">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <input type="text" name="user_name" placeholder="Your Name" required />
                        <input type="email" name="user_email" placeholder="Your Email" required />
                        <textarea name="message" rows="4" placeholder="Your Message" required />
                        <button type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Veena Suresh. All Rights Reserved.</p>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="dark"
            />


        </footer>
    )
}