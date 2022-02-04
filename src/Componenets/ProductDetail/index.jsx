import React from "react";
import PropTypes from "prop-types";
import './styles.scss'

ProductDetail.propTypes = {};

function ProductDetail({ detail }) {
  return (


    <div 
      data-aos='zoom-in'
      data-aos-delay='0'
      data-aos-duration='800'
      // data-aos-mirror='true'
      data-aos-easing='ease'
     className="prod__detail">
      <div className="prod__img">
        <img src= {detail.img} alt="pic" />
      </div>
      <div className="prod__name">
       <p> {detail.name} </p>
      </div>
      <div className="prod__price">
       <p> {detail.price} </p>
      </div>
      <div className="prod__icon">
      <i class="fas fa-plus-circle"></i>     
       </div>
    </div>
  );
}

export default ProductDetail;
