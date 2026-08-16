import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedElement from "../../components/AnimatedElement/AnimatedElement.jsx";
import Door from "../../components/Door/Door.jsx";
import AnimatedPaper from "../../components/AnimatedPaper/AnimatedPaper.jsx";
import DoodleArrow from "../../svg/DoodleArrow/DoodleArrow.jsx";
import DoodlePlane from "../../svg/DoodlePlane/DoodlePlane.jsx";
import DoodleHeadset from "../../svg/DoodleHeadset/DoodleHeadset.jsx";

import { SIDE } from "../../constants/constants";
import { PERSONAL_INFO, TECH_STACK, ABOUT_SECTIONS } from "../../data/profile.data.js";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const LAPTOP_DECORATIONS = [
  { src: "images/about/html5.webp", top: "2%", left: "12%", rotate: -15 },
  { src: "images/about/css3.webp", top: "4%", left: "40%", rotate: 12 },
  { src: "images/about/javascript.webp", top: "3%", left: "68%", rotate: -10 },
  { src: "images/about/typescript.webp", top: "24%", left: "8%", rotate: 18 },
  { src: "images/about/react.webp", top: "22%", left: "36%", rotate: -14 },
  { src: "images/about/nextjs.webp", top: "21%", left: "74%", rotate: 16 },
  { src: "images/about/tailwindcss.webp", top: "44%", left: "10%", rotate: -12 },
  { src: "images/about/nodejs.webp", top: "42%", left: "43%", rotate: 10 },
  { src: "images/about/java.webp", top: "43%", left: "78%", rotate: -18 },
  { src: "images/about/postgresql.webp", top: "64%", left: "14%", rotate: 15 },
  { src: "images/about/supabase.webp", top: "65%", left: "46%", rotate: -8 },
  { src: "images/about/vercel.webp", top: "64%", left: "80%", rotate: 20 },
  { src: "images/about/git.webp", top: "84%", left: "18%", rotate: -16 },
  { src: "images/about/github.webp", top: "85%", left: "48%", rotate: 14 },
  { src: "images/about/vscode.webp", top: "84%", left: "76%", rotate: -10 },
];

const PAPER_CONTENT = {
  laptop: {
    title: TECH_STACK.title,
    content: TECH_STACK.description,
    categories: TECH_STACK.categories,
  },
  chair: ABOUT_SECTIONS.productThinking,
  cressco: ABOUT_SECTIONS.education,
  truora: ABOUT_SECTIONS.experience,
  globe: ABOUT_SECTIONS.curiosity,
  gym: ABOUT_SECTIONS.growth,
};

const getPaperContent = (value) => {
  return (
    <div className="about__paper-content">
      <h3 className="about__paper-title">{value.title}</h3>
      <p className="about__paper-text">{value.content}</p>

      {value.categories && (
        <div className="paper-modal__tech-categories">
          {value.categories.map((cat) => (
            <div key={cat.name} className="paper-modal__category-group">
              <h4 className="paper-modal__category-name">{cat.name}</h4>
              <div className="paper-modal__skills-list">
                {cat.skills.map((skill) => (
                  <span key={skill} className="paper-modal__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {value.experience && (
        <div className="paper-modal__experience-section">
          <h4 className="paper-modal__experience-title">Achievements:</h4>

          <div className="paper-modal__work-item">
            <span className="paper-modal__role-name">
              {value.experience.role}
            </span>
            {value.experience.achievement.map((achievement) => (
              <p key={achievement} className="paper-modal__achievement-text">
                <span>•</span> {achievement}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function About() {
  const [isPaperOpen, setIsPaperOpen] = useState(false);
  const [paperContent, setPaperContent] = useState(null);

  const contentRef = useRef(null);

  const laptopValue = "laptop";
  const chairValue = "chair";
  const globeValue = "globe";
  const gymValue = "gym";
  const truoraValue = "truora";
  const cresscoValue = "cressco";

  const handlePaperOpen = (e) => {
    e.preventDefault();
    const value = e.target.dataset.value;
    if (value) {
      setPaperContent(getPaperContent(PAPER_CONTENT[value]));
    }
    setIsPaperOpen(true);
  };

  const handlePaperClose = () => {
    setIsPaperOpen(false);
  };

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const sections = contentRef.current.querySelectorAll(".about__section");

      sections.forEach((section) => {
        const elements = section.querySelectorAll(".animated-element");
        if (elements.length === 0) return;

        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 1.5,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play pause resume pause",
          },
        });

        tl.to(elements, {
          scale: 1.14,
          rotation: () => (Math.random() - 0.5) * 14,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        }).to(elements, {
          scale: 1,
          rotation: 0,
          duration: 0.25,
          ease: "back.out(1.7)",
          stagger: 0.08,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" ref={contentRef}>
      <AnimatedPaper isOpen={isPaperOpen} onClose={handlePaperClose}>
        {paperContent}
      </AnimatedPaper>
      <Door
        label="About Me"
        openImage="images/door_open.avif"
        closedImage="images/door_close.avif"
      />
      <h2 className="about__title" aria-label={`About ${PERSONAL_INFO.shortName}`}>
        About {PERSONAL_INFO.shortName}
      </h2>

      <div className="about__sections">
        <section
          className="about__section about__section--laptop"
          id="main-content"
        >
          <div className="about__main about__main--left">
            <AnimatedElement
              imageSrc="images/about/laptop.avif"
              alt="Laptop on the desk"
              side={SIDE.LEFT}
              onClick={handlePaperOpen}
              value={laptopValue}
            />
            <img
              className="about__secondary-image"
              src="images/about/desk.avif"
              alt="Laptop on the desk"
              loading="lazy"
              draggable={false}
            />
          </div>

          <div className="about__doodles" aria-hidden="true">
            <DoodleArrow
              className="about__doodle about__doodle--arrow"
              color="#1e1e1e"
            />
            <span
              className="about__doodle about__doodle--welcome"
              aria-hidden="true"
            >
              Welcome!!!
            </span>
            <span
              className="about__doodle about__doodle--floor-scratch"
              aria-hidden="true"
            >
              My Tech Stack
            </span>
          </div>
          <div className="about__scatter" aria-hidden="true">
            {LAPTOP_DECORATIONS.map((deco) => (
              <img
                key={deco.src}
                src={deco.src}
                alt="Tech Stack Decoration"
                className="about__scatter-img"
                style={{
                  top: deco.top,
                  left: deco.left,
                  transform: `rotate(${deco.rotate}deg)`,
                }}
                loading="lazy"
                draggable={false}
              />
            ))}
          </div>
        </section>

        <section className="about__section about__section--chair">
          <div className="about__main about__main--right">
            <AnimatedElement
              imageSrc="images/about/chair.avif"
              alt="Chair in the office"
              side={SIDE.RIGHT}
              onClick={handlePaperOpen}
              value={chairValue}
            />
            <img
              className="about__secondary-image"
              src="images/about/rug.avif"
              alt="Chair in the office"
              loading="lazy"
              draggable={false}
            />
            <p className="about__job--title" aria-hidden="true">
              Work Experience
            </p>
            <div className="about__job">
              <AnimatedElement
                imageSrc="images/about/cressco_logo.avif"
                alt="Cressco Logo"
                side={SIDE.LEFT}
                onClick={handlePaperOpen}
                value={cresscoValue}
              />
              <AnimatedElement
                imageSrc="images/about/truora_logo.avif"
                alt="Truora Logo"
                side={SIDE.LEFT}
                onClick={handlePaperOpen}
                value={truoraValue}
              />
            </div>
          </div>
          <div className="about__window-stack" aria-hidden="true">
            <img
              className="about__window-img"
              src="images/about/window.avif"
              alt="View from the window draw"
              loading="lazy"
              draggable={false}
            />
          </div>
        </section>

        <section className="about__section about__section--globe">
          <div className="about__main about__main--left">
            <AnimatedElement
              imageSrc="images/about/travel.avif"
              alt="Traveling earth globe"
              side={SIDE.LEFT}
              onClick={handlePaperOpen}
              value={globeValue}
            />
          </div>
          <DoodlePlane
            className="about__plane-img"
            color="#1e1e1e"
          />
        </section>

        <section className="about__section about__section--gym">
          <div className="about__main about__main--right">
            <AnimatedElement
              imageSrc="images/about/gym.avif"
              alt="Gym bell weights"
              side={SIDE.RIGHT}
              onClick={handlePaperOpen}
              value={gymValue}
            />
          </div>
          <DoodleHeadset
            className="about__headsets-img"
            color="#1e1e1e"
          />
          <DoodleArrow
            className="about__doodle-arrow-img"
            color="#1e1e1e"
            width="130px"
          />
        </section>
      </div>

      <Door
        label="Projects"
        openImage="images/door_open.avif"
        closedImage="images/door_close.avif"
      />
    </section>
  );
}
