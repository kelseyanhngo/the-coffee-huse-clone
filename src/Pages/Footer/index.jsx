import React from "react";
import { Button, Card, CardBody, UncontrolledCollapse } from "reactstrap";
import "./styles.scss";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div>
      <div className="footer">
        <div className="col-4 col-sm3 col-lg-2">
          <div className="logo">
            <img
              src="https://www.thecoffeehouse.com/_nuxt/img/logo-footer.72c86fc.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-8 col-sm9 col-lg-10">
          <ul className="footer_list">
            <li className="footer_item">
              <style>
                {`
                .items_title Button{
                  background-color: Transparent;
                  background-repeat:no-repeat;
                  border: none;
                  cursor:pointer;
                  overflow: hidden;
                  outline:none;

                  font-size: 16px;

                }
                .items_title Button:focus {
                  border: none;
                  background-color: Transparent;
                  background-repeat:no-repeat;
                  outline:none;
                  cursor:pointer;
                  overflow: hidden;

                    }
                  .items_title Button:hover {
                  border: none;
                  background-color: Transparent;
                  background-repeat:no-repeat;
                  outline:none;
                    }
                  .card__body {
                  border: none;
                  background-color: Transparent;
                  background-repeat:no-repeat;
                  outline:none;

                  }
                  .card__body li {
                    {/* list-style: circle !important ;
                    color: white; */}
                  }
                  .card__body p{
                    color: white;
                    font-style: italic;

                  }
                  .card__body p:hover {
                   opacity: 0.7;
                  }
              `}
              </style>
              <ul>
                <div className="items_title">
                  <Button id="toggler">About Us</Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card className="card__body">
                      <CardBody>
                        <li className="footer_item">
                          <a href={"#"}>
                            <p>Home </p>
                          </a>
                        </li>
                        <li className="footer_item">
                          <a href={"#"}>
                            <p> Order </p>{" "}
                          </a>
                        </li>
                        <li className="footer_item">
                          <a href={"#"}>
                            <p> News </p>{" "}
                          </a>
                        </li>
                        <li className="footer_item">
                          <a href={"#"}>
                            <p> Voucher </p>{" "}
                          </a>
                        </li>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </ul>
            </li>

            <li className="footer_item">
              <ul>
                <div className="items_title">
                  <Button id="toggler1">Policy</Button>
                  <UncontrolledCollapse toggler="#toggler1">
                    <Card className="card__body">
                      <CardBody>
                        <li className="footer_item">
                          <a href={"#"}>
                            {" "}
                            <p> Website Policy</p>
                          </a>
                        </li>
                        <li className="footer_item">
                          <a href={"#"}>
                            {" "}
                            <p> Information Security</p>
                          </a>
                        </li>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </ul>
            </li>

            <li className="footer_item">
              <ul>
                <div className="items_title">
                  <Button id="toggler2">Hotline</Button>
                  <UncontrolledCollapse toggler="#toggler2">
                    <Card className="card__body">
                      <CardBody>
                        <li className="footer_item">
                          <a href={"#"}>
                            {" "}
                            <p> For Ordering</p>
                          </a>
                        </li>
                        <li className="footer_item">
                          <a href={"#"}>
                            {" "}
                            <p> For Feedback</p>
                          </a>
                        </li>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </ul>
            </li>

            <li className="footer_item">
              <ul>
                <div className="items_title">
                  <Button id="toggler3">Contact</Button>
                  <UncontrolledCollapse toggler="#toggler3">
                    <Card className="card__body">
                      <CardBody>
                        <li className="footer_item">
                          <a
                            href={
                              "https://www.linkedin.com/in/anh-thu-ngo-b15948211/"
                            }
                          >
                            <p> LinkedIn</p>
                          </a>
                        </li>
                        <li className="footer_item">
                          <a href={"mailto:ngo00074@algonquinlive.com"}>
                            <p> Email</p>
                          </a>
                        </li>

                        <li className="footer_item">
                          <a
                            href={
                              "https://www.linkedin.com/in/anh-thu-ngo-b15948211/"
                            }
                          >
                            <p> Anhthu Ngo</p>
                          </a>
                        </li>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="text">
          <p>Copyright © 2021 The Coffee House. All rights reserved.</p>
        </div>
        <div className="imagine">
          <img src="https://i.pinimg.com/originals/3a/06/94/3a0694ed94296bfc5da8939622766a40.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
