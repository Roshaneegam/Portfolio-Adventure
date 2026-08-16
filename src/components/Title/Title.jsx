import { useEffect, useRef } from "react";
import gsap from "gsap";

import PaperContainer from "../PaperContainer/PaperContainer";
import { PERSONAL_INFO } from "../../data/profile.data.js";

import "./Title.css";

export default function Title() {
  const imgWrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = imgWrapperRef.current;
    if (!wrapper) return;

    const juandaImg = wrapper.querySelector(".title__img--juanda");
    const adventureImg = wrapper.querySelector(".title__img--adventure");

    const tl = gsap.timeline({
      onComplete: () => {
        wrapper.classList.add("is-idle");
      }
    });

    gsap.set([juandaImg, adventureImg], { opacity: 0 });

    tl.fromTo(
      juandaImg,
      { scale: 2.5, rotation: -25, opacity: 0 },
      { scale: 1, rotation: -1, opacity: 1, duration: 0.45, ease: "back.out(1.4)" }
    ).fromTo(
      adventureImg,
      { scale: 2.5, rotation: 25, opacity: 0 },
      { scale: 1, rotation: 1, opacity: 1, duration: 0.45, ease: "back.out(1.4)" },
      "-=0.25"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="title">
      <div className="title__scraps" aria-hidden="true">
        <span className="title__scrap title__scrap--tape-l" />
        <span className="title__scrap title__scrap--paper-l" />
        <span className="title__scrap title__scrap--map-r" />
        <span className="title__scrap title__scrap--tape-r" />
        <span className="title__scrap title__scrap--stamp" />
      </div>
      <h1 className="title__text sr-only">
        {PERSONAL_INFO.fullName} | {PERSONAL_INFO.title}
      </h1>
      <div className="subtitle__text-wrapper">
        <a
          href={PERSONAL_INFO.canonicalUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="subtitle__handle tape-button"
          aria-label={`${PERSONAL_INFO.shortName} profile`}
        >
          {PERSONAL_INFO.handle}
        </a>
        <PaperContainer className="subtitle__year">
          <p>
            @{new Date().getFullYear()}
          </p>
        </PaperContainer>
      </div>
      <div className="title__img-wrapper" ref={imgWrapperRef}>
        <picture>
          <source media="(max-width: 550px)" srcSet="/images/title/shan's--mobile.avif" />
          <img
            className="title__img title__img--juanda"
            src="/images/title/shan's.avif"
            alt={`${PERSONAL_INFO.shortName}'s paper collage style title`}
            aria-label={`${PERSONAL_INFO.shortName}'s`}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <picture>
          <source media="(max-width: 550px)" srcSet="/images/title/adventure--mobile.avif" />
          <img
            className="title__img title__img--adventure"
            src="/images/title/adventure.avif"
            alt="Adventure paper collage style title"
            aria-label="Adventure"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
    </section>
  );
}
