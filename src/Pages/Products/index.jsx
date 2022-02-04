import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import data from "./data";

import ProductFeature from "../../Componenets/ProductFeature";

Products.propTypes = {};

function Products(props) {
  const [filteredDrink, setFilteredDrink] = useState("FC"); // mặc định là FC
  const [filteredData, setFilteredData] = useState(); //state để filter data
  
  useEffect(() => {
    // listen lien tuc, nếu có một prop hoặc state thay đổi thì nó sẽ chạy lại liên tục
    console.log(filteredDrink);
    const newArray = data.filter((item) => item.type === filteredDrink);
    setFilteredData(newArray); //update array
  }, [filteredDrink]); //nêú ko truyền tham số thì chỉ chạy một lần duy nhất,
  //nếu filter này thay đổi thì uêfect này sẽ chạy lại một lần

  const fastCoffee = () => {
    setFilteredDrink("FC");
  };
  const coffee = () => {
    setFilteredDrink("CF");
  };
  const tea = () => {
    setFilteredDrink("tea");
  };
  const smoothy = () => {
    setFilteredDrink("smoothy");
  };
  const cake = () => {
    setFilteredDrink("cake");
  };
  const gift = () => {
    setFilteredDrink("gift");
  };

  return (
    <div 
    
    className="product">

      <h2>
      <i class="fas fa-trophy"></i>

       Our Menu </h2>
      <div
      data-aos='zoom-in'
      data-aos-delay='0'
      data-aos-duration='800'
      // data-aos-mirror='true'
      data-aos-easing='ease'

       className="menu-list">
        <div className="type-pro" onClick={fastCoffee}>
          <div className={`img_bg ${filteredDrink === 'FC' ? 'active' : '' } `} >
            <img
              src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_cpg_web.png"
              alt="pic"
            />
          </div>
          <p> Fast Coffee </p>
        </div>

        <div className="type-pro" onClick={coffee}>
          <div className={`img_bg ${filteredDrink === 'CF' ? 'active' : '' } `} >
            <img
              src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_coffee_web.png"
              alt="pic"
            />
          </div>
          <p> Coffee </p>
        </div>

        <div className="type-pro" onClick={tea}>
          <div className={`img_bg ${filteredDrink === 'tea' ? 'active' : '' } `} >
            <img
              src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_tea_milk_tea_web.png"
              alt="pic"
            />
          </div>
          <p> Tea - Boba Tea </p>
        </div>
        <div className="type-pro" onClick={smoothy}>
          <div className={`img_bg ${filteredDrink === 'smoothy' ? 'active' : '' } `} >
            <img
              src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_frappu_web.png"
              alt="pic"
            />
          </div>
          <p> Smoothy - Choco - Matcha </p>
        </div>

        <div className="type-pro" onClick={cake}>
          <div className={`img_bg ${filteredDrink === 'cake' ? 'active' : '' } `} >
            <img
              src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_snack_web.png"
              alt="pic"
            />
          </div>
          <p> Cake - Snacks </p>
        </div>

        <div className="type-pro" onClick={gift}>
          <div className={`img_bg ${filteredDrink === 'gift' ? 'active' : '' } `} >
            <img
              src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_merchandise_web.png"
              alt="pic"
            />
          </div>
          <p> Gift Collection</p>
        </div>
      </div>
      <ProductFeature feature={filteredData} />
    </div>
  );
}

export default Products;
