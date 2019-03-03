import React, { Component } from "react";
import { Container, Image, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./About.css";
export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="img/1.jpeg" className="kleine" />

        <Container>
          <Image src="img/2.jpeg" className="about-profile-pic" rounded />
          <h3>food</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
            quidem nihil, voluptatibus nesciunt, omnis consequatur fugiat alias
            aspernatur dignissimos ut iure totam recusandae at tempora et?
            Dolore vel ipsa eaque?
          </p>
        </Container>
      </div>
    );
  }
}
