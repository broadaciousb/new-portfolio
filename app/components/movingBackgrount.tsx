'use client';

import { gsap } from "gsap";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
gsap.registerPlugin(PhysicsPropsPlugin);


export default function MovingBackround() {
  

  return (
    <div className="stars">
      <div className="star w-[12px] h-[12px] bg-white"></div>
    </div>
  );
};

