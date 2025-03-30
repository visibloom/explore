export default function Carousel({carouselItem = []}) {
  return (
    <>
      <div className="carousel rounded-box">
        {carouselItem.map((src, index)=>(
          <div key={index} className="carousel-item h-full">
            <div className="carousel-container">
              <img src={src} />
              <p className="carousel-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, blanditiis.</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
