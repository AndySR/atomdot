import React, { Component } from "react";
import { Container, Row, Col, Badge, Button, Card, CardBody } from "reactstrap";
class Pricing extends Component {
  render() {
    return (
      <section className="section section-lg bg-gradient-default">
        <Container className="pt-lg pb-300">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <h2 className="display-3 text-white">
                Choose a plan that's right for you
              </h2>
              <p className="lead text-white">
                <span className="mr-3">Monthly</span>
                <label className="custom-toggle">
                  <input defaultChecked type="checkbox" />
                  <span className="custom-toggle-slider rounded-circle" />
                </label>
                <span className="ml-3">Yearly(save10%)</span>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <Row>
                        <Col md="6" xs="6">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                        </Col>
                        <Col md="6" xs="6">
                          <h6 className="text-success text-uppercase">Free</h6>
                        </Col>
                      </Row>

                      <h6 className="text-primary text-uppercase">$0.00/mo</h6>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap 4
                        that includes the most important components and
                        features.
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          design
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          system
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          creative
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Get started
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <Row>
                        <Col md="6" xs="6">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                        </Col>
                        <Col md="6" xs="6">
                          <h6 className="text-success text-uppercase">
                            Advanced
                          </h6>
                        </Col>
                      </Row>
                      <h6 className="text-success text-uppercase">
                        $39.00 /mo <span>$468 Billed Yearly</span>
                      </h6>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap 4
                        that includes the most important components and
                        features.
                      </p>
                      <div>
                        <Badge color="success" pill className="mr-1">
                          business
                        </Badge>
                        <Badge color="success" pill className="mr-1">
                          vision
                        </Badge>
                        <Badge color="success" pill className="mr-1">
                          success
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="success"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Start Free Trial
                      </Button>
                      <p>Purchase Now</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <Row>
                        <Col md="6" xs="6">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                        </Col>
                        <Col md="6" xs="6">
                          <h6 className="text-warning text-uppercase">Ultra</h6>
                        </Col>
                      </Row>

                      <h6 className="text-warning text-uppercase">
                        $99.00 /mo <span>$1188 Billed Yearly</span>
                      </h6>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap 4
                        that includes the most important components and
                        features.
                      </p>
                      <div>
                        <Badge color="warning" pill className="mr-1">
                          marketing
                        </Badge>
                        <Badge color="warning" pill className="mr-1">
                          product
                        </Badge>
                        <Badge color="warning" pill className="mr-1">
                          launch
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="warning"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Start Free Trial
                      </Button>
                      <p>Purchase Now</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    );
  }
}
export default Pricing;
