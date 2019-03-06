import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import HomeSearch from "../Components/HomeSearch";

import { connect } from "react-redux";
import { fetchPosts } from "../action/postFood";
import SearchBar from "./SearchBar";
import "./Home.css";
class Home extends Component {
  search = term => {
    this.props.fetchPosts(term);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <section>
            <Image src="img/6.jpeg" className="kleine" />
            <SearchBar onSearchTerm={this.search} />
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="img/2.jpeg" roundedCircle className="profile-pic" />
                <h3>Food</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  aspernatur obcaecati itaque voluptatem similique. Eum veniam
                  ad quisquam est maiores repudiandae neque, laboriosam libero
                  voluptates aspernatur illo possimus distinctio. Debitis.
                </p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="img/3.jpeg" roundedCircle className="profile-pic" />
                <h3>Food</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  aspernatur obcaecati itaque voluptatem similique. Eum veniam
                  ad quisquam est maiores repudiandae neque, laboriosam libero
                  voluptates aspernatur illo possimus distinctio. Debitis.
                </p>
              </Col>{" "}
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="img/4.jpeg" roundedCircle className="profile-pic" />
                <h3>Food</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  aspernatur obcaecati itaque voluptatem similique. Eum veniam
                  ad quisquam est maiores repudiandae neque, laboriosam libero
                  voluptates aspernatur illo possimus distinctio. Debitis.
                </p>
              </Col>
            </Row>
          </section>
        </div>
        <br />

        <HomeSearch />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  fetchPosts
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
