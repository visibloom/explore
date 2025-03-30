import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { images } from "./util/images"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

export default function About(){
    const aboutRef = useRef(null)
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

        fadeAnimation(".fade")
        fadeAnimation(".fadeUp",{y: 150, duration: 0.7})
        fadeAnimation(".fadeLeft",{x: -150, duration: 0.7})
        fadeAnimation(".fadeRight",{x: 150, duration: 0.7})
    },{scope: aboutRef})
    return(
        <>
        <div id="about" ref={aboutRef} className="visi-section scroll-m-20">
            <div className="visi-container">
                <h2 className="subheading max-sm:px-3 fadeUp">ABOUT US</h2>
                <p className="paragraph max-sm:px-3 fadeUp">Visibloom was born from a shared passion for helping businesses thrive in the digital world. Founded by three college graduates with diverse skills, we came together with a vision to make social media management more accessible and impactful. At Visibloom, we believe every business has a unique story to tell — and we're here to help amplify that voice. Whether it's crafting engaging content, optimizing your online presence, or building meaningful connections with your audience, we're dedicated to helping your brand bloom across social platforms.</p>
                <p className="paragraph max-sm:px-3 fadeUp">We understand that navigating the ever-changing landscape of social media can be overwhelming. That's why we combine creativity, strategy, and data-driven insights to create personalized solutions that align with your brand's goals. Our team is committed to staying ahead of trends, so you don't have to — giving you the freedom to focus on what you do best while we help your business grow, engage, and thrive online.</p>
                <div className="visi-divider fade" style={{background: `url(${images.about.img1})`}}>Spread the beauty and artistic nature your posts and contents!</div>
                <div className="grid grid-cols-2 gap-4 mt-20 max-sm:grid-cols-1 max-sm:mt-4">
                    <div className="p-18 max-sm:p-5 fadeLeft">
                        <p className="quote">" Staying the same is the greatest risk of All. "</p>
                        <p className="quoter">- Ian Desmar</p>
                    </div>
                    <div>
                        <img src={images.about.img2} className="w-auto rounded-2xl fadeRight" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-20 max-sm:grid-cols-1 max-sm:mt-4">
                    <div className="max-sm:order-2">
                        <img src={images.about.img3} className="w-auto rounded-2xl fadeLeft" alt="" />
                    </div>
                    <div className="pl-10 max-sm:order-1 max-sm:p-3">
                        <p className="subtitle fadeRight">Our Mission.</p>
                        <p className="paragraph fadeRight">At Visibloom, our mission is to empower businesses to grow and reach a wider audience through the power of digital platforms and social media. We strive to create meaningful connections between brands and their audiences by crafting engaging content, building strategic online presence, and staying ahead of the latest digital trends. Our goal is to help businesses bloom in the digital landscape, turning ideas into impact and presence into growth.</p> 
                        <div className="paragraph fadeRight">We are not just about increasing numbers — we are about creating meaningful engagement. Our passion lies in helping businesses navigate the ever-evolving digital landscape, unlocking opportunities for growth and ensuring their brand reaches its fullest potential in the online world.</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}