import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl
} from "react-bootstrap";

import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <container>
        <Image src="img/6.jpeg" className="kleine" />

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="img/2.jpeg" roundedCircle className="profile-pic" />
            <h3>Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              aspernatur obcaecati itaque voluptatem similique. Eum veniam ad
              quisquam est maiores repudiandae neque, laboriosam libero
              voluptates aspernatur illo possimus distinctio. Debitis.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="img/3.jpeg" roundedCircle className="profile-pic" />
            <h3>Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              aspernatur obcaecati itaque voluptatem similique. Eum veniam ad
              quisquam est maiores repudiandae neque, laboriosam libero
              voluptates aspernatur illo possimus distinctio. Debitis.
            </p>
          </Col>{" "}
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="img/4.jpeg" roundedCircle className="profile-pic" />
            <h3>Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              aspernatur obcaecati itaque voluptatem similique. Eum veniam ad
              quisquam est maiores repudiandae neque, laboriosam libero
              voluptates aspernatur illo possimus distinctio. Debitis.
            </p>
          </Col>
        </Row>
      </container>
    );
  }
}
