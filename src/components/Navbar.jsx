import { NavButton , NavButtonIcon} from "./elements/NavButton";
import logo from "../assets/visibloom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect, useRef } from "react";

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
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY){
        navRef.current.classList.add("visi-bg","shadow")
      }else{
        navRef.current.classList.remove("visi-bg","shadow")
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[])

  return (
    <>
      <div ref={navRef} className="navbar visi-navbar">
        <div className="flex">
          <a href="#top" className="flex">
            <img src={logo} alt="" className="w-40"/>
          </a>
        </div>
        <div className="flex-none">
          <div className="flex gap-4">
            {iconButtons.map(({iconComponent, className, href}, index) => 
               <NavButtonIcon className={className} key={index} IconComponent={iconComponent()} pathlink={href}/>
            )}
            <NavButton attributes={{className: "visiButton"}} label={"Contact Us!"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
