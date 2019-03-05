import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import HomeSearch from "../Components/HomeSearch";
import "./Home.css";
class Home extends Component {
  // componentDidMount() {
  //   console.log("component did mount");
  //   this.props.fetchPosts();
  // }
  render() {
    return (
      <React.Fragment>
        <div>
          <container>
            <Image src="img/6.jpeg" className="kleine" />

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
          </container>
        </div>
        <br />
        <HomeSearch />
      </React.Fragment>
    );
  }
}
// const mapStateToProps = state => ({
//   posts: state.items
// });
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPosts: () => dispatch(fetchPosts())
//   };
// };

export default Home;
