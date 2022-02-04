import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Footer from './../../Pages/Footer/index';
ConfirmOrder.propTypes = {};

function ConfirmOrder(props) {
  return (
    <div className="container-confirm">
      <div className="title-confirm">
        <h1>
          <i class="fas fa-file"></i>
          Confirm Order
        </h1>
      </div>

      <div className="main-content-confirm">
        <div className="part-left">
          <div className="part-left-contents">
            <div className="order-title">
              <h3> Shipping </h3>
            </div>
            <div className="change-method">
              <h4>Change to Pick-up</h4>
            </div>
          </div>

          <div className="content-text">
            <div className="content-text-one">
              <img
                src="https://minio.thecoffeehouse.com/images/tch-web-order/Pickup2.png"
                alt=""
              />

              <div className="text1">
                <b> Quaaak Technology Solutions Pvt. Ltd.</b>
                <p>
                  Quaaak Technology Solutions Pvt. Ltd., F3, 20, Vaishika
                  Enclave, Bhavani Amman Koil St, RamaKrishna Nagar, Adambakkam,
                  Chennai, Tamil Nadu 600088, India"
                </p>
              </div>
            </div>

            <div className="content-text-two">
              <div className="text2">
                <b> Receive your order 15-30 mins</b>
                <h6>When: As soon as possible</h6>
              </div>
              <i class="fas fa-chevron-right"></i>
            </div>

            <div className="input-sections">
              <input className="form-name" placeholder="Recipient's name" />
              <input
                className="form-tel-number"
                placeholder="Recipient's number.."
              />
              <input
                className="form-address"
                placeholder="Recipient's address.."
              />
              <input
                className="form-add-detail"
                placeholder="Any notes for our shop?"
              />
            </div>

            <div className="payment-methods">
              <div className="pay-check">
                <input id="cash" name="pay" type="radio" />

                <label for="cash">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg"
                    alt=""
                  />
                  <span>Cash </span>
                </label>
              </div>
              <div className="pay-check">
                <input id="momo" name="pay" type="radio" />

                <label for="momo">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png"
                    alt=""
                  />
                  <span>Momo </span>
                </label>
              </div>
              <div className="pay-check">
                <input id="zaloPay" name="pay" type="radio" />

                <label for="zaloPay">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/388_ic_zalo@3x.png"
                    alt=""
                  />
                  <span>Zalo Pay </span>
                </label>
              </div>
              <div className="pay-check">
                <input id="shopee" name="pay" type="radio" />

                <label for="shopee">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/1120_1119_ShopeePay-Horizontal2_O.png"
                    alt=""
                  />
                  <span>Shopee Pay </span>
                </label>
              </div>
            </div>

            <div className="agreement">
                <input id="agreement" name="pay" type="checkbox" />

                <label for="agreement">
              
                  <span>
                   Agree to the terms and {""}
                    <a href="/#">
                         conditions of purchase
                    </a>
                    {""} {""}
                    of The Coffee House.
                  </span>
                </label>
              </div>
          </div>
        </div>
        <div className="part-right">
        <div className="right-head">
            <h3>Selected dishes</h3>
            <h4>More dishes</h4>
        </div>

        <div className="dishes">

        </div>
        <div className="total-price">

        </div>
        </div>
      </div>
  {/* <Footer/> */}

    </div>
  );

}

export default ConfirmOrder;
