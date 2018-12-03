import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class TaxesFees extends React.Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Est. taxes & fees (Based on 54546)</Col>
        <Col md={6}> {`$${this.props.taxes}`}</Col>
      </Row>
    );
  }
}
