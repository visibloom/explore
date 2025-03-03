import { NavButton , NavButtonIcon} from "./elements/NavButton";
import logo from "../assets/visibloom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function icon(icon){
  return <FontAwesomeIcon icon={icon}/>;
}

export const iconButtons = [
  {iconComponent: () => icon(faFacebookF), href:"https://www.facebook.com/profile.php?id=61572707286789"},
  {iconComponent: () => icon(faInstagram), className:'visiIconInvert', href:''},
  {iconComponent: () => icon(faTiktok),    className:'visiIconInvert', href:'https://www.tiktok.com/@visibloom3'},
]

function Navbar() {
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const btnGroup = useRef(null)

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY){
        navRef.current.classList.add("visi-bg")
      }else{
        navRef.current.classList.remove("visi-bg")
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[])

  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(logoRef.current,{opacity: 0, x: -300, duration: 0.7})
    tl.from("a",{opacity: 0, y: 15, duration: 0.4, stagger: 0.2 })
  },{scope: btnGroup})

  return (
    <>
      <div ref={navRef} className="navbar visi-navbar">
        <div className="flex">
          <a ref={logoRef} href="#top" className="flex">
            <img src={logo} alt="" className="w-40 max-sm:w-30"/>
          </a>
        </div>
        <div className="flex-none">
          <div ref={btnGroup} className="flex gap-4 max-sm:gap-2 ">
            {iconButtons.map(({iconComponent, className, href}, index) => 
               <NavButtonIcon className={className} key={index} IconComponent={iconComponent()} pathlink={href}/>
            )}
            <NavButton attributes={{className: "visiButton max-sm:hidden"}} label={"Contact Us!"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
