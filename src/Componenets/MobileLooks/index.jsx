import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

MobileLooks.propTypes = {};

function MobileLooks(props) {
  return (
    <div className="mobile-looks">
    
      <div className="logo">
        <img
          src="https://www.thecoffeehouse.com/_nuxt/img/squarelogo.035676b.png"
          alt=""
        />
      </div>

      <div className="list-pic">
        <img
          src="https://www.thecoffeehouse.com/_nuxt/img/newappv6.f2e1281.png"
          alt=""
        />
      </div>

    </div>
  );
}

export default MobileLooks;
