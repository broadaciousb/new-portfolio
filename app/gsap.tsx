import { gsap } from "gsap";
    
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const tl = gsap.timeline({
  id: "text-scramble",
  defaults: { ease: "none" }
});

const cursorTl = gsap.timeline({ repeat: -1 });

gsap.set("#scramble-text-original", {
  opacity: 0
});

cursorTl
  .to("#scramble-cursor", {
    opacity: 0,
    duration: 0.5,
    ease: "none",
    delay: 0.2
  })
  .to("#scramble-cursor", {
    opacity: 1,
    duration: 0.5,
    ease: "none",
    delay: 0.2
  });

tl.to("#scramble-text-1", {
  scrambleText: {
    text: "Mix it up with ScrambleText.",
    chars: "lowerCase"
  },
  duration: 2
})
  .to("#scramble-text-2", {
    scrambleText: {
      text: "Animate using characters",
      chars: "XO",
      speed: 0.4
    },
    duration: 2
  })
  .to("#scramble-text-3", {
    scrambleText: { text: " numbers,", chars: "0123456789" },
    duration: 2
  })
  .to("#scramble-text-4", {
    scrambleText: { text: "UPPERCASE", chars: "upperCase", speed: 0.3 },
    duration: 1
  })
  .to("#scramble-text-5", {
    scrambleText: {
      text: "or lowercase.",
      chars: "lowerCase",
      speed: 0.3
    },
    duration: 1.5
  })
  .add(cursorTl);

window.onclick = () => tl.play(0); // clic