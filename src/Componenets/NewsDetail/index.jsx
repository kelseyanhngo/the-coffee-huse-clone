import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

NewsDetail.propTypes = {};

function NewsDetail({ detail }) {
  return (
    
      <div 
  data-aos='zoom-in'
      data-aos-delay='0'
      data-aos-duration='800'
      // data-aos-mirror='true'
      data-aos-easing='ease'

       className="news-detail">
        <div className="pic-detail">
          <img src={detail.img} alt="pic" />
        </div>
        <div className="title-detail">
          <p>{detail.title}</p>
        </div>
        <div className="content-detail">
          <p>{detail.content}</p>
        </div>
        <div className="button-detail">
          <button>
            <p>Read</p>
          </button>
        </div>
        
      </div>
    
  );
}

export default NewsDetail;
