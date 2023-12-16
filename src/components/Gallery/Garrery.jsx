import { forwardRef } from "react";
import styles from "./Garrery.module.sass";

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

  return <div className=""></div>;
});

Gallery.displayName = "Gallery";
export default Gallery;
