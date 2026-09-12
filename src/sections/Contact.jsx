import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormStatus("SENDING...");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setFormStatus("MESSAGE_SENT — THANK YOU.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setFormStatus(
        "MESSAGE_FAILED — PLEASE TRY AGAIN."
      );
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-background" aria-hidden="true">
        <div className="contact-grid" />
        <div className="contact-glow contact-glow-one" />
        <div className="contact-glow contact-glow-two" />

        <div className="contact-code code-one">
          01001001
        </div>

        <div className="contact-code code-two">
          10110110
        </div>
      </div>

      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <div className="section-label">
            <span className="label-number">09</span>
            <span>/</span>
            <span>CONTACT</span>
          </div>

          <div className="header-status">
            <span className="status-indicator" />
            CONNECTION_AVAILABLE
          </div>
        </div>

        {/* INTRO */}
        <div className="contact-intro">
          <div className="intro-meta">
            <span>09.01</span>
            <span>OPEN_CONNECTION</span>
          </div>

          <h2>
            Let's build
            <span>something.</span>
          </h2>

          <p>
            Have a project, opportunity, idea, or simply want to
            start a conversation? Send a signal. I'll get back to you.
          </p>
        </div>

        {/* MAIN CONTACT AREA */}
        <div className="contact-system">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="contact-info-header">
              <span>CONNECTION_NODE</span>
              <span>SR / 009</span>
            </div>

            <div className="contact-node-visual">

              <div className="node-ring ring-one" />
              <div className="node-ring ring-two" />
              <div className="node-ring ring-three" />

              <div className="node-core">
                <span>SR</span>
              </div>

              <div className="node-point point-one" />
              <div className="node-point point-two" />
              <div className="node-point point-three" />
              <div className="node-point point-four" />

            </div>

            <div className="contact-availability">
              <span className="availability-dot" />

              <div>
                <strong>AVAILABLE FOR CONNECTION</strong>

                <span>
                  Open to opportunities, collaborations &
                  meaningful projects.
                </span>
              </div>
            </div>

            {/* Contact details */}
            <div className="contact-details">

              <a
                href="mailto:addagirisrujanaroyal@gmail.com"
                className="contact-detail"
              >
                <span className="detail-index">01</span>

                <div>
                  <span className="detail-label">
                    EMAIL
                  </span>

                  <strong>
                    addagirisrujanaroyal@gmail.com
                  </strong>
                </div>

                <span className="detail-arrow">↗</span>
              </a>

              <a
                href="tel:+917670948545"
                className="contact-detail"
              >
                <span className="detail-index">02</span>

                <div>
                  <span className="detail-label">
                    PHONE
                  </span>

                  <strong>
                    +91 7670948545
                  </strong>
                </div>

                <span className="detail-arrow">↗</span>
              </a>

              <a
                href="https://github.com/srujanaroyal"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
              >
                <span className="detail-index">03</span>

                <div>
                  <span className="detail-label">
                    GITHUB
                  </span>

                  <strong>
                    github.com/srujanaroyal
                  </strong>
                </div>

                <span className="detail-arrow">↗</span>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="contact-form-wrapper">

            <div className="form-header">
              <div>
                <span className="form-label">
                  09.02 / SEND_SIGNAL
                </span>

                <h3>
                  Start a conversation.
                </h3>
              </div>

              <span className="form-status">
                {formStatus === "SENDING..."
                  ? "SENDING"
                  : "READY"}
              </span>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-field">
                  <label htmlFor="name">
                    <span>01</span>
                    YOUR_NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    <span>02</span>
                    EMAIL_ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-field">
                <label htmlFor="subject">
                  <span>03</span>
                  SUBJECT
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's on your mind?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  <span>04</span>
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about your idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={formStatus === "SENDING..."}
              >
                <span>
                  {formStatus === "SENDING..."
                    ? "SENDING..."
                    : "SEND_MESSAGE"}
                </span>

                <span className="submit-arrow">↗</span>
              </button>

              {formStatus && (
                <div className="form-response">
                  <span className="response-dot" />
                  {formStatus}
                </div>
              )}

            </form>
          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="contact-cta">

          <div className="cta-label">
            <span>09.03</span>
            <span>FINAL_SIGNAL</span>
          </div>

          <div className="cta-content">
            <h3>
              Good ideas start
              <span>with a conversation.</span>
            </h3>

            <p>
              Whether it's data, technology, or something completely
              new - let's explore it.
            </p>
          </div>

          <a
            href="mailto:addagirisrujanaroyal@gmail.com"
            className="cta-button"
          >
            <span>EMAIL_ME</span>
            <span>↗</span>
          </a>

        </div>

        {/* FOOTER */}
        <div className="contact-footer">
          <span>CONNECTION_INTERFACE / 09</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;