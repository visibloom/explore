import { useEffect, useRef } from "react";

export function NavButton({ attributes = {}, label }) {
    var id = attributes.id;
    var click = attributes.click;
    var className = attributes.className;
  
    return (
      <button className={className} id={id} onClick={click}>
        {label}
      </button>
    );
  }
  
export function NavButtonIcon({ pathlink = "", className = 'visiIconBtn' , IconComponent }) {
  const navBtn = useRef(null);
  useEffect(()=>{
      const handleScroll = () => {
          if(window.scrollY){
            navBtn.current.classList.remove(className)
            navBtn.current.classList.add("visiIconBtn")
          }else{
            navBtn.current.classList.remove("visiIconBtn")
            navBtn.current.classList.add(className)
          }
        }
        window.addEventListener("scroll", handleScroll)
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
      }
  },[])
  return (
    <a ref={navBtn} href={pathlink} className={className}>
      {IconComponent}
    </a>
  );
}
  