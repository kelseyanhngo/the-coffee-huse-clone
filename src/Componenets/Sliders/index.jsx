
import React, { useEffect, useRef, useState } from "react";
import { SliderData } from "./sliderData";
import "./styles.scss";
// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 3000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

 useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {SliderData.map((item, index) => (
          <div
            className="slide"
            key={index}
            style={{item  }}
          >
           
            <img src= {item.image} alt=""/>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {SliderData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slideshow;
// ReactDOM.render(<Slideshow />, document.getElementById("App"));