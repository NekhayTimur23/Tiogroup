import Carousel from "./Carousel/Carousel";
import { forwardRef, useState, useEffect } from "react";
import "./Garrery.sass";

const Gallery = forwardRef((props, ref) => {
  let newMapCards = [
    {
      name: "Сенеж",
      id: 1,
      url: "/gallery/GVVGVhbhbhvfCg.png",
    },
    {
      name: "Сенеж",
      id: 2,
      url: "/gallery/JBGVhuhugtF.png",
    },
    {
      name: "Сенеж",
      id: 3,
      url: "/gallery/RFHijijnHVC.jpg",
    },
    {
      name: "Сенеж",
      id: 4,
      url: "/gallery/whwJGJLo.png",
    },
  ];

  return (
    <Carousel ref={ref} >
      {newMapCards.map((card) => (
        <div
          key={card.id}
          className={`item imet-${card.id}`}
          url={card.url}
        >
          {card.name}
        </div>
      ))}
    </Carousel>
  );
});

Gallery.displayName = "Gallery";
export default Gallery;
