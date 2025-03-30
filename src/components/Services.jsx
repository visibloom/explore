import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const serviceRef = useRef(null)
  useGSAP(()=>{
      const fadeAnimation = (selector, animationProps = {}) => {
          gsap.set(selector, { visibility: "hidden" });

          ScrollTrigger.batch(selector, {
              start: "40% bottom",
              onEnter: batch => gsap.from(batch, {
                  autoAlpha: 0,
                  stagger: 0.2,
                  ease: "power1.in",
                  ...animationProps,
              }),
              once: true,
          });
      };

      fadeAnimation(".fadeUp",{y: 150, duration: 0.7})
      fadeAnimation(".grid>*",{y: 150, duration: 1})
  },{scope: serviceRef})
  return (
    <div id="services" ref={serviceRef} className="visi-section">
        <div className="visi-container">
          <h2 className="subheading text-center fadeUp">Our Services</h2>
          <p className="paragraph text-center fadeUp">We offer personalized social media management, content creation and digital strategy to help businesses grow and thrive online.</p>
          <div className="grid grid-cols-3 gap-4 px-5 max-sm:grid-cols-1">
            <div className="service-card">
            </div>
            <div className="service-card">
            </div>
            <div className="service-card">
            </div>
          </div>
        </div>
    </div>
  )
}
