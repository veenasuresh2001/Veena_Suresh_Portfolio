import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./footer.css";

export default function Footer() {
    const [loading, setLoading] = useState(false);
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        try {
            setLoading(true);

            emailjs.init(import.meta.env.VITE_PUBLIC_KEY as string);

            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID as string,
                import.meta.env.VITE_TEMPLATE_ID as string,
                form.current
            );

            toast.success("Message sent successfully!");
            form.current?.reset();
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="footer" id="contact">
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
                        <textarea name="message" rows={4} placeholder="Your Message" required />
                        <button type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Veena Suresh. All Rights Reserved.</p>
            </div>

            <ToastContainer position="top-right" autoClose={3000} theme="dark" />
        </footer>
    );
}