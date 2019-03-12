import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../action/postFood";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";
import "./HomeSearch.css";

class HomeSearch extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { matches } = this.props.posts;

    const foodList = matches ? (
      matches.map(match => (
        <div key={match.id} className="col-md-4 mb-auto">
          <Card>
            <CardImg top src={match.smallImageUrls} alt="Card image cap" />
            <CardBody top width="100%">
              <Badge color="success" className="style1">
                Rating: {match.rating}
              </Badge>
              <br />
              <Badge color="primary" className="style1">
                {match.recipeName}
              </Badge>

              <CardText>
                <p>Ingredient:</p>
                {match.ingredients.map((x, i) => (
                  <ul className="ulc" key={i}>
                    <li className="ull">{x}</li>
                  </ul>
                ))}
              </CardText>
              <Button color="danger">Button</Button>
            </CardBody>
          </Card>
        </div>
      ))
    ) : (
      <div>Loading...</div>
    );

    return (
      <div className="container">
        <div className="row">{foodList}</div>
      </div>
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
