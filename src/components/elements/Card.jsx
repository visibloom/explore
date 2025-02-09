
import { greetings } from "./util/functions";

function Card() {
  const greet = greetings();
  return (
    <>
      <div className="card bg-violet-600 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{greet}, Welome to Visibloom</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="visiButton-ghost">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
