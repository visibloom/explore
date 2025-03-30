export default function Carousel({carouselItem = []}) {
  return (
    <>
      <div className="carousel rounded-box h-96">
        {carouselItem.map((src, index)=>(
          <div key={index} className="carousel-item h-full">'
            <img src={src} />
          </div>
        ))}
      </div>
    </>
  );
}
