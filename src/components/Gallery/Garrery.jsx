import React, { forwardRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Garrery.sass";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

const Gallery = forwardRef((props, ref) => {
  const sliderCards = [
    {
      title: "Сенеж",
      subtitle: "подзаголовок",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tempore nisi maxime sed neque corporis, quibusdam dignissimos sint at, magnam enim impedit hic praesentium tenetur. Impedit dolore non nulla blanditiis.",
      cardBgImage: '/gallery/GVVGVhbhbhvfCg.webp',
      cardBgImagev2: '/gallery/GVVGVhbhbhvfCgv2.webp',
    },
    {
      title: "Сенеж2",
      subtitle: "подзаголовок",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tempore nisi maxime sed neque corporis, quibusdam dignissimos sint at, magnam enim impedit hic praesentium tenetur. Impedit dolore non nulla blanditiis.",
      cardBgImage: '/gallery/JBGVhuhugtF.webp',
      cardBgImagev2: '/gallery/JBGVhuhugtFv2.webp',
    },
    {
      title: "Сенеж3",
      subtitle: "подзаголовок",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tempore nisi maxime sed neque corporis, quibusdam dignissimos sint at, magnam enim impedit hic praesentium tenetur. Impedit dolore non nulla blanditiis.",
      cardBgImage: '/gallery/RFHijijnHVC.webp',
      cardBgImagev2: '/gallery/RFHijijnHVCv2.webp',
    },
    {
      title: "Сенеж4",
      subtitle: "подзаголовок",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tempore nisi maxime sed neque corporis, quibusdam dignissimos sint at, magnam enim impedit hic praesentium tenetur. Impedit dolore non nulla blanditiis.",
      cardBgImage: '/gallery/whwJGJLo.webp',
      cardBgImagev2: '/gallery/whwJGJLo.webp',
    },
  ];

  return (
    <>
      <Swiper
        ref={ref}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Parallax, Pagination, Navigation]}
        className="my-swiper"
      >
        <div className="text-garrery">
          НАШИ РАБОТЫ
        </div>
        {sliderCards.map((card, i) => (
          <SwiperSlide
            key={i}
            style={{ background: `radial-gradient(ellipse farthest-corner at 15% 80%, rgba(0, 0, 0, 0.621),rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('${card.cardBgImage}') center/cover no-repeat` }}
            className="swiper-slide"
          >
            <div className="title" data-swiper-parallax="-400">
              {card.title}
            </div>
            <div className="subtitle" data-swiper-parallax="-700">
              {card.subtitle}
            </div>
            <div className="text" data-swiper-parallax="-1200">
              <p>{card.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});

Gallery.displayName = "Gallery";
export default Gallery;
