import { greetings } from "./util/functions";
import heroImage from "../assets/hero_image.png";
import { heroMessage } from "./util/details";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function HeroSection() {
  const greet  = greetings();
  const index  = useRef(0)
  const msgRef = useRef(null)
  const [heroMsg, setheroMsg] = useState(heroMessage[index.current]);
  
  useEffect(()=>{
    const heroMsgCycle = setInterval(() => {
      index.current = (index.current+1) % heroMessage.length;
      setheroMsg(() => heroMessage[index.current]);
    }, 10000);

    return ()=>{
      clearInterval(heroMsgCycle);
    }
  },[])

  useGSAP(()=>{
    gsap.fromTo(msgRef.current, {opacity: 0, y: 10}, {opacity: 1, y: 0, duration: 1}
    )
  },[heroMsg])
  
  return (
    <>
      <div id="top" className="hero min-h-screen visi-bg-img text-fuchsia-600">
        <div className="hero-content text-center">
          <div className="max-w-fit place-items-center">
            <h1 className="text-7xl tracking-tight font-extrabold">
              Hi, <span className="text-fuchsia-800">{greet}!</span>
            </h1>
            <p ref={msgRef} key={index.current} className="w-xl text-xl py-6 fadeIn">{heroMsg}</p>
            <button className="visiButton-ghost ">Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}
