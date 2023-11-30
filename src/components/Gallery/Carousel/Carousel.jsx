"use client";

import {
  useState,
  useEffect,
  Children,
  cloneElement,
  forwardRef,
  useRef,
} from "react";
import "./Carousel.sass";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

const Carousel = forwardRef(({ children, sectionPhone }, ref) => {
  const [peges, setPages] = useState([]);
  const [slid, setSlid] = useState("0");
  const [slidCounter, setSlidCounter] = useState(1);
  const [slide, setSlide] = useState(undefined);

  const rar = useRef();

  //  ДЛЯ ПК ПОВОРАЧИВАЕТ НА ЛЕГО
  function addArrowsLeft() {
    setSlid((currentSlid) => {
      const newSlid = currentSlid + 100;
      return Math.min(newSlid, 0);
    });
    setSlidCounter((currentSlid) => {
      const slidCounter = currentSlid - 1;
      return Math.max(slidCounter, 1);
    });
  }

  //  ДЛЯ КП ПОВОРАЧИВАЕТ НА ПРАВО
  function addArrowsRight() {
    setSlid((currentSlid) => {
      const newSlid = currentSlid - 100;
      return Math.max(newSlid, -(peges.length - 1) * 100);
    });
    setSlidCounter((currentSlid) => {
      const slidCounter = currentSlid + 1;
      return Math.min(slidCounter, peges.length);
    });
  }

  // ДЛЯ ТЕЛЕФОНА ГОВОРИТ КУДА БЫЛО СДЕЛАН ПОВОРОТ
  const initializeSwipeDetection = (element) => {
    let startX;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      startX = touch.clientX;
    };

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const endX = touch.clientX;

      if (startX - endX > 50) {
        // Свайп влево
        addArrowsRight();
      } else if (startX - endX < -50) {
        // Свайп вправо
        addArrowsLeft();
      }
    };

    element.addEventListener("touchstart", handleTouchStart, false);
    element.addEventListener("touchend", handleTouchEnd, false);

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  };

  useEffect(() => {
    const element = rar.current;
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            // backgroundImage: `url("${child.props.url}")`,
          },
        });
      })
    );

    if (element) {
      const cleanup = initializeSwipeDetection(element);
      return cleanup;
    }
  }, [sectionPhone, slide]);

  return (
    <div ref={ref} className="carousel-section">
      <div className="carousel-contianer">
        <div className="arrows arrowLeft">
          <TiChevronLeft onClick={addArrowsLeft} />
        </div>
        <div className="carousel-window">
          <div
            ref={rar}
            className="all-pages-container"
            style={{ transform: `translateX(${slid}%)` }}
            onTouchMove={() => {
              setSlide(rar.current);
            }}
          >
            {peges}
          </div>
          <div className="slides">
            {peges.map((e, i) => (
              <div
                key={Math.random(1)}
                className={`${
                  slidCounter === i + 1 ? "number-slid active" : "number-slid"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="arrows arrowRight">
          <TiChevronRight onClick={addArrowsRight} />
        </div>
      </div>
    </div>
  );
});

Carousel.displayName = "Carousel";

export default Carousel;
