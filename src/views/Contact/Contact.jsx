import { CONTACT_INFO } from "../../data/profile.data.js";
import "./Contact.css";

const handleDownloadCV = (e) => {
  if (CONTACT_INFO.cvPath && CONTACT_INFO.cvPath !== "#") {
    const link = document.createElement("a");
    link.href = CONTACT_INFO.cvPath;
    link.download = CONTACT_INFO.cvPath.split("/").pop() || "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    e.preventDefault();
    alert("CV file download link. Place your CV file in the public folder and update CONTACT_INFO.cvPath in src/data/profile.data.js!");
  }
};

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__scraps" aria-hidden="true">
        <span className="contact__scrap contact__scrap--tape-tl" />
        <span className="contact__scrap contact__scrap--paper-bl" />
        <span className="contact__scrap contact__scrap--tape-tr" />
        <span className="contact__scrap contact__scrap--stamp-br" />
        <span className="contact__scrap contact__scrap--paper-tr" />
      </div>

      <div className="contact__container">
        <div className="contact__title-wrapper">
          <h2 className="contact__title">Contact Me</h2>
        </div>

        <div className="contact__notes-grid">
          <a
            href={CONTACT_INFO.email ? `mailto:${CONTACT_INFO.email}` : "#"}
            className="contact__note contact__note--yellow"
          >
            <div className="contact__note-glue"></div>
            <div className="contact__note-content">
              <span className="contact__note-tag">[ EMAIL ]</span>
              <p className="contact__note-text">{CONTACT_INFO.email || "email@example.com"}</p>
              <span className="contact__note-action">{"\u2794\uFE0E"} Write me</span>
            </div>
          </a>

          <a
            href={CONTACT_INFO.whatsapp || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__note contact__note--green"
            aria-label="Message on WhatsApp"
          >
            <div className="contact__note-glue"></div>
            <div className="contact__note-content">
              <span className="contact__note-tag">[ WHATSAPP ]</span>
              <p className="contact__note-text">{CONTACT_INFO.whatsappLabel || "WhatsApp"}</p>
              <span className="contact__note-action">{"\u2794\uFE0E"} Message me</span>
            </div>
          </a>

          <div className="contact__note contact__note--cyan">
            <div className="contact__note-glue"></div>
            <div className="contact__note-content">
              <span className="contact__note-tag">[ NETWORKS ]</span>
              <div className="contact__note-socials">
                {CONTACT_INFO.linkedin && (
                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    LinkedIn{"\u2197\uFE0E"}
                  </a>
                )}
                {CONTACT_INFO.github && (
                  <a
                    href={CONTACT_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    GitHub{"\u2197\uFE0E"}
                  </a>
                )}
                {CONTACT_INFO.instagram && (
                  <a
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                  >
                    Instagram{"\u2197\uFE0E"}
                  </a>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleDownloadCV}
            className="contact__note contact__note--pink"
            aria-label="Download CV"
            type="button"
          >
            <div className="contact__note-glue"></div>
            <div className="contact__note-content">
              <span className="contact__note-tag">[ CURRICULUM ]</span>
              <p className="contact__note-text">
                {CONTACT_INFO.cvPath ? CONTACT_INFO.cvPath.split("/").pop() : "cv.pdf"}
              </p>
              <span className="contact__note-stamp">DOWNLOAD</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
