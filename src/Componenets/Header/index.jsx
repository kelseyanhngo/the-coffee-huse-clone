import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link, NavLink } from "react-router-dom";
import Promotion from "../Promotion";
import "./style.scss";

Header.propTypes = {};

function Header(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [promotionIsOpen, setPromotionIsOpen] = useState(false);
  const customStylesPromotion = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "600px",
      width: "400px",
      borderRadius: "8px",
    },
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "700px",
      borderRadius: "20px",
      marginTop: "70px",
    },
  };
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          {" "}
          <p>THE COFFEE HOUSE</p>{" "}
        </Link>
      </div>

      <div className="header__order">
        <img
          className="order-icon"
          src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png"
          alt=""
        />

        <p> What is your address? </p>
        <i class="order-icon1 fas fa-angle-down"></i>
      </div>

      <ul className="header__list">
        <li>
          <NavLink to="/products" activeClassName="active" exact={true}>
            Shipping
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName="active" exact={true}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/shops" activeClassName="active" exact={true}>
            Shops
          </NavLink>
        </li>
        <li>
          <p onClick={() => setPromotionIsOpen(true)}>Promotion</p>

          <ReactModal
            style={customStylesPromotion}
            isOpen={promotionIsOpen}
            onRequestClose={() => setPromotionIsOpen(false)}
          >
            <div className="main-main1">
              <div className="container-main1">
                <div className="closing-icon1">
                  <h3>Promotion</h3>
                  <i
                    onClick={() => setPromotionIsOpen(false)}
                    class="fas fa-times-circle"
                  ></i>
                </div>
                <div className="span-part">
                  <span>Ready to use</span>
                </div>
                <Promotion />
              </div>
            </div>
          </ReactModal>
        </li>
      </ul>

      <div className="header__icon">
        <i
          onClick={() => setModalIsOpen(true)}
          class="icon1 far fa-user-circle"
        ></i>

        <ReactModal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <div className="main-main">
            <div className="container-main">
              <div className="closing-icon">
                <i
                  onClick={() => setModalIsOpen(false)}
                  class="fas fa-times-circle"
                ></i>
              </div>
              <div className="logine-img">
                <img
                  src="https://order.thecoffeehouse.com/_nuxt/img/squarelogo.035676b.png"
                  alt=""
                />
              </div>
              <div className="login-title">
                <h3>Login</h3>
              </div>

              <div className="login-form">
                <label for="fname">
                  <i class="fas fa-user"></i>
                  Username:
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Type your username"
                />
                <label for="lname">
                  <i class="fas fa-lock"></i>
                  Password:
                </label>
                <input
                  class="fontAwesome"
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="
                 
                  Type your password"
                />
                <h4>Forgot password?</h4>

                <button className="login-button">Login</button>

                <div className="login-using">
                  <p>Or Sign Up Using</p>
                  <div className="login-icon">
                    <i class="fab fa-facebook"></i>

                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                  </div>
                </div>
                <div className="login-signup">
                  <p>Or Sign Up Using</p>
                
                  <Link 
                  style={{ color: 'grey', textDecoration: 'inherit'}}
                  to="/signUp" exact={true}>
                  <h5
                  onClick={() => setModalIsOpen(false)}
                  >SIGN UP

                  </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ReactModal>

        <Link to="/confirmOrder" exact={true}>
          <i class="icon2 fas fa-shopping-cart"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
