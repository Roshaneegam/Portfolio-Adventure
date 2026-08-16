import SmoothScroll from "../../components/SmoothScroll/SmoothScroll.jsx";
import Title from "../../components/Title/Title.jsx";
import Character from "../../components/Character/Character.jsx";
import ScrollTip from "../../components/ScrollTip/ScrollTip.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import PaperContainer from "../../components/PaperContainer/PaperContainer.jsx";
import SEOHead from "../../components/SEOHead/SEOHead.jsx";
import JsonLd from "../../components/JsonLd/JsonLd.jsx";
import PlanePaper from "../../components/PlanePaper/PlanePaper.jsx";

import { PERSONAL_INFO, CONTACT_INFO, TECH_STACK, SEO_METADATA } from "../../data/profile.data.js";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL_INFO.fullName,
  jobTitle: PERSONAL_INFO.title,
  url: PERSONAL_INFO.canonicalUrl,
  sameAs: [
    CONTACT_INFO.linkedin,
    CONTACT_INFO.github,
    CONTACT_INFO.instagram,
  ].filter(Boolean),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "personal",
    name: "WhatsApp",
    identifier: PERSONAL_INFO.handle,
    url: CONTACT_INFO.whatsapp,
    availableLanguage: ["English"],
  },
  knowsAbout: TECH_STACK.categories.flatMap((c) => c.skills),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${PERSONAL_INFO.shortName} — Portfolio`,
  url: PERSONAL_INFO.canonicalUrl,
  description: SEO_METADATA.description,
  author: {
    "@type": "Person",
    name: PERSONAL_INFO.fullName,
  },
};

export default function Home() {
  return (
    <>
      <SEOHead
        description={SEO_METADATA.description}
        canonical="/"
      />
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <SmoothScroll />
      <PlanePaper />
      <main id="main-content">
        <Title />
        <ScrollTip />
        <Character />
        <PaperContainer className="section-separator" />
        <About />
        <PaperContainer className="section-separator" />
        <Projects />
        <PaperContainer className="section-separator" />
        <Contact />
      </main>
    </>
  );
}

