import React from "react";
import "./styles.scss";

SuggestionFeature.propTypes = {};

function SuggestionFeature({ feature }) {
  return (
    <div className="sugFeature">
      <div className="sugFather">
        <div className="sugFather__pic">
          <img src={feature.pic} alt="pic" />
        </div>
        <div className="sugFather2">
          <div className="sugFather__name">
            <p> {feature.name}</p>
          </div>
          <div className="sugFather__price">
            <p> {feature.price}</p>
          </div>
          <div className="sugFather__icon">
            <i class="fas fa-plus-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestionFeature;
