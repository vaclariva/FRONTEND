import React from "react";
import "aos/dist/aos";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Industri.css";
const Kategori = () => {
  const Kategori = {
    borderRadius: "20px",
    background: "#0081F9",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "10px 0",
    marginBottom: "40px",
    fontWeight: "bold",
    fontSize: "28px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    letterSpacing: "5px",
  };

  const cardImage = {
    objectFit: 'cover',
    width: '100%',
    aspectRatio: '3/2',
  }

  return (
    <div className="m-5 overflow-x-hidden">
      <h1 style={Kategori}>Industri</h1>
      <Row>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg" style={cardImage} />
            <Card.Body>
              <Card.Title>Industri 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime vel minus, dignissimos temporibus sit saepe tempore sapiente amet ipsa illum, voluptates molestias quidem? Error voluptatibus qui laudantium vitae
                amet.
              </Card.Text>
              <Link to="/industri/detail">
                <Button variant="primary">Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg" style={cardImage} />
            <Card.Body>
              <Card.Title>Industri 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime vel minus, dignissimos temporibus sit saepe tempore sapiente amet ipsa illum, voluptates molestias quidem? Error voluptatibus qui laudantium vitae
                amet.
              </Card.Text>
              <Link to="/industri/detail">
                <Button variant="primary">Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img src="https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_640.jpg" style={cardImage} />
            <Card.Body>
              <Card.Title>Industri 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime vel minus, dignissimos temporibus sit saepe tempore sapiente amet ipsa illum, voluptates molestias quidem? Error voluptatibus qui laudantium vitae
                amet.
              </Card.Text>
              <Link to="/industri/detail">
                <Button variant="primary">Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img src="https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_640.jpg" style={cardImage} />
            <Card.Body>
              <Card.Title>Industri 4</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime vel minus, dignissimos temporibus sit saepe tempore sapiente amet ipsa illum, voluptates molestias quidem? Error voluptatibus qui laudantium vitae
                amet.
              </Card.Text>
              <Link to="/industri/detail">
                <Button variant="primary">Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img src="https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_640.jpg" style={cardImage} />
            <Card.Body>
              <Card.Title>Industri 5</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime vel minus, dignissimos temporibus sit saepe tempore sapiente amet ipsa illum, voluptates molestias quidem? Error voluptatibus qui laudantium vitae
                amet.
              </Card.Text>
              <Link to="/industri/detail">
                <Button variant="primary">Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img src="https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_640.jpg" style={cardImage} />
            <Card.Body>
              <Card.Title>Industri 5</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime vel minus, dignissimos temporibus sit saepe tempore sapiente amet ipsa illum, voluptates molestias quidem? Error voluptatibus qui laudantium vitae
                amet.
              </Card.Text>
              <Link to="/industri/detail">
                <Button variant="primary">Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Kategori;
