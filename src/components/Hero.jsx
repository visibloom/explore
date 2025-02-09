import { greetings } from "./util/functions";
import heroImage from "../assets/hero_image.png";

export default function HeroSection() {
  const greet = greetings();
  return (
    <>
      <div
        id="top"
        className="hero min-h-screen visi-bg-img text-fuchsia-600" 
      >
        <div className="hero-content text-center">
          <div className="max-w-fit place-items-center">
            <h1 className="text-6xl font-extrabold">
              Hi, <span className="text-fuchsia-800">{greet}!</span>
            </h1>
            <p className="w-xl text-xl py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="visiButton-ghost ">Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}
