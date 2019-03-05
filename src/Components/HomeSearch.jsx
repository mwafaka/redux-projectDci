import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../action/postFood";
import { Col, Image, Row, Card, Button, CardDeck } from "react-bootstrap";
import "./HomeSearch.css";
import { Link } from "react-router-dom";
class HomeSearch extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const { matches } = this.props.posts;
    console.log(matches);
    return matches ? (
      matches.map(match => (
        <Card className="float-left styling" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={match.smallImageUrls} />
          <Card.Body>
            <Card.Title>{match.recipeName}</Card.Title>
            <Card.Text>
              <h5>Ingredients :</h5>
              <ul>
                {match.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
                <h7 className="red"> Rating: {match.rating}</h7>
              </ul>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.items
});
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSearch);
