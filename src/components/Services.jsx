import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { images } from "./util/images";
import { serviceCards } from "./util/details";
import Carousel from "./elements/Carousel";

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
    <div id="services" ref={serviceRef} className="my-18 max-sm:my-10">
        <div className="visi-container">
          <h2 className="subheading text-center fadeUp">Our Services</h2>
          <p className="paragraph text-black text-center fadeUp">We offer personalized social media management, content creation and digital strategy to help businesses grow and thrive online.</p>
          <div className="grid grid-cols-1 gap-4 px-5">
            {serviceCards.map((imgs, index)=>(
              <div className="service-card" key={index}>
                <Carousel carouselItem={imgs}/>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
