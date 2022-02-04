import React from "react";
import "./styles.scss";

function PromotionDetail({ detail }) {
  return (
    <div className="container-promo">
      <div className="promotion-image">
        <img src={detail.image} alt="" />
      </div>

      <div className="part2">
        <div className="promotion-title">
          <h5>{detail.title}</h5>
        </div>
        <div className="promotion-name">
          <p>{detail.name}</p>
        </div>s
        <div className="promotion-date">
          <p>{detail.date}</p>
        </div>
        <div className="promotion-status">
          <p>{detail.status}</p>
        </div>
      </div>
    </div>
  );
}

export default PromotionDetail;
