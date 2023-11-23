
import styles from "./CarouselPhone.module.sass";

function CarouselPhone({ children }) {
  const [dataChildren, setDataChildren] = useState([]);
  const [slid, setSlid] = useState("0");
  const [slidCounter, setSlidCounter] = useState(1);

  const ref = useRef();

  // функция в лево
  const addArrowsLeft = () => {
    setSlid((currentSlid) => {
      const newSlid = currentSlid + 100;
      return Math.min(newSlid, 0);
    });
    setSlidCounter((currentSlid) => {
      const slidCounter = currentSlid - 1;
      return Math.max(slidCounter, 1);
    });
  };

  // что бы отследить движение пальцев
  function initializeSwipeDetection(element) {
    let startX;

    element.addEventListener(
      "touchstart",
      (e) => {
        const touch = e.touches[0];
        startX = touch.clientX;
      },
      false
    );

    element.addEventListener(
      "touchmove",
      (e) => {
        // Предотвращаем стандартное поведение прокрутки
        e.preventDefault();
      },
      false
    );

    element.addEventListener(
      "touchend",
      (e) => {
        const touch = e.changedTouches[0];
        const endX = touch.clientX;

        if (startX - endX > 1) {
          // Свайп влево
          console.log("Swiped left");
          addArrowsLeft;
        } else if (startX - endX < -1) {
          // Свайп вправо
          console.log("Swiped right");
        }
      },
      false
    );
  }

  // функция в право
  const addArrowsRight = () => {
    setSlid((currentSlid) => {
      const newSlid = currentSlid - 100;
      return Math.max(newSlid, -(peges.length - 1) * 100);
    });

    setSlidCounter((currentSlid) => {
      const slidCounter = currentSlid + 1;
      return Math.min(slidCounter, peges.length);
    });
  };

  // достаем обьек из пропсов
  useEffect(() => {
    setDataChildren(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "40vh",
            minWidth: "60vw",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "5px 5px 10px #00000083",
            margin: `${
              15 + ((20 - 15) * (window.innerWidth - 320)) / (1024 - 320)
            }px ${
              10 + ((40 - 10) * (window.innerWidth - 320)) / (1024 - 320)
            }px`,
            background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.166), rgba(0, 0, 0, 0.853)), url('/mainimg/danny-lau-HlAmpNz6nOc-unsplash.jpg') center/cover`
          },
        });
      })
    ),
      console.log(ref.current);
  }, [children]);

  return (
    <div className={styles.carouselSection}>
      <div
        ref={ref}
        onTouchMove={() => initializeSwipeDetection(ref.current)}
        className={styles.carouselWindow}
      >
        {dataChildren}
      </div>
    </div>
  );
}

export default CarouselPhone;
