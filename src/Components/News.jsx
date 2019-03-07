import React, { Component } from "react";
import { Image, Container, Col } from "react-bootstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  Badge,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import "./News.css";
export default class News extends Component {
  state = {
    RecipeName: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    description: "",
    newFood: []
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };
  onSubmit = e => {
    e.preventDefault();
    const {
      RecipeName,
      description,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      newFood
    } = this.state;

    var createFood = {
      RecipeName,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      description
    };
    const newFoods = this.state.newFood;
    console.log(newFoods);

    newFoods.push(createFood);
    this.setState({
      newFood: newFoods,
      RecipeName,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      description
    });
    e.target.reset();
  };
  deleteItem = (e, indexToRemove) => {
    const newFood = this.state.newFood.filter(
      (ele, index) => index !== indexToRemove
    );
    this.setState({ newFood });
  };
  render() {
    return (
      <div>
        <Image src="img/7.jpeg" className="kleine" />
        <Container>
          <Col xs0={12} sm={8}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illo voluptatibus nemo ad harum consequatur temporibus dolore
              quibusdam, iure, voluptas ipsa modi eum. Facere quis, fugiat
              numquam enim harum aliquam?
            </p>
          </Col>
          <Col xs={12} sm={8} className="main-section">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis repellat minima expedita ab voluptas qui modi veritatis
              ea. Architecto nostrum fuga, quasi similique libero veritatis!
              Culpa voluptas dolorem quod dignissimos?
            </p>
          </Col>
          <Col xs={12} sm={4}>
            <Image src="img/8.jpeg" className="kleine" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias nam fuga, consequatur tempora, accusantium suscipit et
              autem fugit impedit, itaque distinctio molestiae. Illo iusto
              perferendis fugit ad maxime commodi quo?
            </p>
          </Col>
        </Container>
        <div className="container bg-warning ">
          <h1>Add your Own Recipe</h1>
        </div>
        <div className="container bg-info p-2">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Recipe Name</Label>
              <Input
                onChange={this.onChange}
                type="text"
                name="RecipeName"
                id="Recipe"
                placeholder="recipe name..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Ingredients</Label>
              <Input
                onChange={this.onChange}
                type="text"
                name="ingredient1"
                id="recipe"
                placeholder="ingredient..."
              />
              <Input
                onChange={this.onChange}
                type="text"
                name="ingredient2"
                id="Recipe"
                placeholder="ingredient..."
              />
              <Input
                onChange={this.onChange}
                type="text"
                name="ingredient3"
                id="Recipe"
                placeholder="ingredient..."
              />
              <Input
                onChange={this.onChange}
                type="text"
                name="ingredient4"
                id="Recipe"
                placeholder="ingredient..."
              />
              <Input
                onChange={this.onChange}
                type="text"
                name="ingredient5"
                id="Recipe"
                placeholder="ingredient..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input
                type="textarea"
                name="description"
                onChange={this.onChange}
                id="exampleText"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Image</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Option one is this and
                  that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Option two can be
                  something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled /> Option three is
                  disabled
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Check me out
              </Label>
            </FormGroup>
            <Button color="secondary">Submit</Button>
          </Form>
          <br />
          <div className="container styling">
            <div className="row">
              {this.state.newFood &&
                this.state.newFood.map((item, i) => (
                  <div key={i} className="col-md-4 mb-auto">
                    <Card>
                      <CardImg top src="img/4.jpeg" alt="Card image cap" />
                      <CardBody>
                        <Badge color="primary">{item.recipeName}</Badge>

                        <CardText>
                          <p>Ingredient:</p>

                          <ul>
                            <li>{item.ingredient1}</li>
                            <li>{item.ingredient2}</li>
                            <li>{item.ingredient3}</li>
                            <li>{item.ingredient4}</li>
                            <li>{item.ingredient5}</li>
                          </ul>
                        </CardText>
                        {item.description}
                        <CardText />
                        <Button
                          color="danger"
                          onClick={e => this.deleteItem(e, i)}
                        >
                          Delete
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
