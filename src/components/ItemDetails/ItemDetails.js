import React, { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="items-details-button"
          BsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? ` + ` : ` - `}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    alt="thumbnail"
                    src="https://tinyurl.com/y847oaeo"
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    Essentials by OFM ESS-3005 Racing Style Leather Gaming
                    Chair, Red
                  </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong> {`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">
                        {`$${this.props.originalPrice}`}
                      </strong>
                    </Col>
                    <Col md={6}>Oty:1</Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
