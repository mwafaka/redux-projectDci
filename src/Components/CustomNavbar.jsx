import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";
export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand to="/">Feed me</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
