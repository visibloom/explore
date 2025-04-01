export default function Carousel({carouselItem = []}) {
  return (
    <>
      <div className="carousel rounded-box">
        {carouselItem.map(({src, details}, index)=>(
          <div key={index} id={`item${index}`} className="carousel-item h-full">
            <div className="carousel-container">
              <img src={src} className="w-full" />
              <p className="carousel-details">{details}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex w-full justify-center gap-2 py-2">
        {carouselItem.map((obj, index)=>(<a key={index} href={`#item${index}`} className="btn btn-xs">{index}</a>))}
      </div> */}
    </>
  );
}
