import { gsap } from "gsap";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { populatePortfolio } from "./portfolio";

populatePortfolio();

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollTrigger.create({
  trigger: "#grass",
  endTrigger: "#horizon",
  pin: true,
  start: "99% bottom",
  end: "bottom bottom",
  scrub: true,
  pinSpacing: false,
});

const dialog = document.querySelector("dialog");
const dialogImage = dialog?.querySelector("img");
const trigger = document.querySelectorAll("li");

trigger.forEach((element) => {
  const data = {
    percent: 100,
  };

  const img = element.querySelector("img");
  img?.addEventListener("click", () => {
    dialogImage?.setAttribute("src", img.getAttribute("src")!);
    dialog?.showModal();
  });

  const setTransformOrigin = gsap.quickSetter(img, "transformOrigin");

  gsap.to(data, {
    scrollTrigger: {
      trigger: element,
      scrub: 1,
      start: "top bottom",
      end: "bottom top",
    },
    percent: 0,
    onUpdate: () => {
      setTransformOrigin(`center ${data.percent}%`);
    },
  });
});

// ScrollSmoother.create({
//   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
//   effects: true, // looks for data-speed and data-lag attributes on elements
// });

const bottom = document.querySelector("footer");
const copy = document.createElement("p");
copy.textContent = `© ${new Date().getFullYear()} by Anna O'Neill`;
bottom?.appendChild(copy);

const beeTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#horizon",
    start: "top top",
    toggleActions: "play none none reset",
  },
});

beeTl
  .add("start")
  .to(
    ".bee",
    {
      x: "150vw",
      top: "60%",
      duration: 5,
      ease: "none",
    },
    "start"
  )
  .to(
    ".bee",
    {
      y: "5vh",
      yoyo: true,
      repeat: 20,
      ease: "sine.inOut",
      duration: 0.3,
    },
    "start"
  );

for (const header of document.querySelectorAll("h2, h3")) {
  let split = SplitText.create(header, { type: "words chars" });

  // now animate the characters in a staggered fashion
  gsap.from(split.chars, {
    delay: 0.5,
    duration: 0.3,
    y: 20,
    x: "random(-50, 50)",
    rotation: "random(-45, 45)",
    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
    stagger: 0.05, // 0.05 seconds between each
    scrollTrigger: header,
    onComplete: () => {
      split.revert(); // clean up the SplitText instance
    },
  });
}

gsap.to(".cloud", {
  scrollTrigger: {
    trigger: "#sky",
    start: "top top",
    end: "+=2000",
    scrub: 2,
  },
  y: 1000,
});
