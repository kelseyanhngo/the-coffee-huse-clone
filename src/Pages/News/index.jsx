import React from "react";
import { Col, Container, Row } from "reactstrap";
import NewsFeature from "../../Componenets/NewsFeature";
import "./styles.scss";

News.propTypes = {};

function News(props) {
  const newsItem = [
    {
      id: 1,
      img: "https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg",
      title: "Barista Art",
      content:
        "Welcome to The Coffee Shop and right here you can enjoy the best coffee of the season everytime",
    },
  ];
  return (
    <div>
      <p className="news-title">
        <i class="fas fa-newspaper"></i>
        News{" "}
      </p>

      <Container className="borderless">
        <Row xs="4">
          <Col className=" borderless">
            <NewsFeature items={newsItem} />
          </Col>
          <Col className=" borderless">
            <NewsFeature items={newsItem} />
          </Col>
          <Col className=" borderless">
            <NewsFeature items={newsItem} />
          </Col>
          <Col className=" borderless">
            <NewsFeature items={newsItem} />
          </Col>
        </Row>

        <Row>
          <Col className=" borderless">
            <NewsFeature items={newsItem} />
          </Col>
          <Col className=" borderless">
            <NewsFeature items={newsItem} />
          </Col>
          <Col className=" borderless">
            <NewsFeature items={newsItem} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default News;
