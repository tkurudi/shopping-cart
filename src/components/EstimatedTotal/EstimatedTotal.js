import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class EstimatedTotal extends React.Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>
          <h2>Est. Total</h2>
        </Col>
        <Col md={6}>
          <h2> {`$${this.props.price}`}</h2>
        </Col>
      </Row>
    );
  }
}
