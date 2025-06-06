import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { populatePortfolio } from "./portfolio";

populatePortfolio();

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
});
