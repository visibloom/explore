export default function Carousel({carouselItem = []}) {
  return (
    <>
      <div className="carousel rounded-box">
        {carouselItem.map(({src, details, title}, index)=>(
          <div key={index} id={`item${index}`} className="carousel-item h-full">
            <div className="carousel-container">
              <img src={src} className="w-full max-sm:w-[320px]" />
              <div className="carousel-details">
                <h1 className="text-center text-3xl mb-3 font-extrabold">{title}</h1>
                <p>{details}</p>
              </div>
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
