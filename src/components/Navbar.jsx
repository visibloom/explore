import { NavButton, NavButtonIcon } from "./elements/NavButton";
import logo from "../assets/visibloom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function icon(icon) {
  return <FontAwesomeIcon icon={icon} />;
}

export const iconButtons = [
  {
    iconComponent: () => icon(faFacebookF),
    href: "https://www.facebook.com/profile.php?id=61572707286789",
  },
  {
    iconComponent: () => icon(faInstagram),
    className: "visiIconInvert",
    href: "",
  },
  {
    iconComponent: () => icon(faTiktok),
    className: "visiIconInvert",
    href: "https://www.tiktok.com/@visibloom3",
  },
];

function Navbar() {
  const navRef = useRef(null);

  useGSAP(
    () => {
      var tl = gsap.timeline();
      tl.from("#logo", { autoAlpha: 1, x: -300, duration: 0.7 })
        .from("#btnGroup>a", { autoAlpha: 0, y: 15, duration: 0.4, stagger: 0.2 })
        // .from(".visiButton", { autoAlpha: 1, y: 15})

      ScrollTrigger.create({
        trigger: navRef.current,
        start: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress > 0.1) {
            navRef.current.classList.add("visi-bg");
          } else {
            navRef.current.classList.remove("visi-bg");
          }
        },
      });
    },
    { scope: navRef }
  );

  return (
    <>
      <div ref={navRef} className="navbar visi-navbar visi-bgv">
        <div className="flex">
          <a href="#top" className="flex" id="logo">
            <img src={logo} alt="" className="w-40 max-sm:w-30" />
          </a>
        </div>
        <div className="flex-none">
          <div id="btnGroup" className="flex gap-4 max-sm:gap-2 ">
            {iconButtons.map(({ iconComponent, className, href }, index) => (
              <NavButtonIcon
                className={className}
                key={index}
                IconComponent={iconComponent()}
                pathlink={href}
              />
            ))}
            <NavButton
              attributes={{ className: "visiButton max-sm:hidden" }}
              label={"Contact Us!"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
