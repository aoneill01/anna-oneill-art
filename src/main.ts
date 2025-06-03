import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

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

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
});
