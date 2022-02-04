import React, { useState } from "react";
import Searching from "../Searching";
import Slideshow from "./../Sliders/index";
import "./styles.scss";
Shops.propTypes = {};

function Shops(props) {
  const [status, setStatus] = useState({
    activeObject: null,
    objects: [
      { id: 1, title: "Toronto (20)" },
      { id: 2, title: "Ottawa (16)" },
      { id: 3, title: "London (21)" },
      { id: 4, title: "Montreal (19)" },
      { id: 5, title: "Quebec (29)" },
    ],
  });
  function toggleActive(index) {
    setStatus({ ...status, activeObject: status.objects[index] });
  }
  function toggleActiveStyle(index) {
    if (status.objects[index] === status.activeObject) {
      return "box active";
    } else {
      return "box inactive";
    }
  }
  return (
    <div className="container-shop">
      {/* <Slideshow /> */}
      <div className="title-shop">
        <h2>
          <i class="fas fa-home"></i>
          Our Shops Location
        </h2>
      </div>
      <div className="list-shops">
        {status.objects.map((element, index) => (
          <div
            key={index}
            className={toggleActiveStyle(index)}
            onClick={() => {
              toggleActive(index);
            }}
          >
            <div className="title-list">{element.title}</div>
          </div>
        ))}
      </div>
      <Searching />
    </div>
  );
}

export default Shops;
