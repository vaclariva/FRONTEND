import React from "react";
import "aos/dist/aos.css";
import { Row, Col, Card } from "react-bootstrap";

const Berita = () => {
  const h3Style = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#007BFF",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const newsItems = [
    {
      imageUrl: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
      author: "Jhon Due",
      date: "20-08-2022",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta accusantium praesentium ducimus",
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg",
      author: "Jhon Due",
      date: "20-08-2022",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta accusantium praesentium ducimus",
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_640.jpg",
      author: "Jhon Due",
      date: "20-08-2022",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta accusantium praesentium ducimus",
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg",
      author: "Jhon Due",
      date: "20-08-2022",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta accusantium praesentium ducimus",
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2019/10/18/09/29/cat-4558651_640.jpg",
      author: "Jhon Due",
      date: "20-08-2022",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta accusantium praesentium ducimus",
    },
  ];

  return (
    <div className="m-5 overflow-x-hidden">
      <h3 className="mb-4 text-center" style={h3Style}>
        List of News
      </h3>
      <Row>
        {newsItems.map((item, index) => (
          <Col key={index} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src={item.imageUrl}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  aspectRatio: "1/1",
                }}
              />
              <Card.Body>
                <Card.Text>
                  <b>
                    {item.author} | {item.date}
                  </b>
                  <br />
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Berita;