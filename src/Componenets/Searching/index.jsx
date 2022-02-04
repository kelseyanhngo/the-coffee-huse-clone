import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Input } from "reactstrap";

Searching.propTypes = {};

function Searching(props) {
  return (
    <div className="searching">
      <div className="title">
        <p className="title1">
          <i class="icon1 fas fa-home"></i>
          Our Shop Location
        </p>
        <p className="title2">
          See All Stores
          <i class="fal fa-arrow-right"></i>
        </p>
      </div>

      <div className="input">
        <select className="input__location">
        <option value="">
          Choose your location.. 
         </option>

          <option value="1"> Ottawa</option>
          <option value="2"> Toronto</option>

          <option value="3"> Vancouver</option>

          <option value="4"> London </option>

          <option value="5"> Regina </option>

        </select>
      </div>
    </div>
  );
}

export default Searching;
