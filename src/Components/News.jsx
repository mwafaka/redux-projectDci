import React, { Component } from "react";
import { Image, Container, Col } from "react-bootstrap";
export default class News extends Component {
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
      </div>
    );
  }
}
