import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Services extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">Out of the box integrations</h2>
                <p className="lead">
                  There's a lot you can do with our robust and powerful API's.
                  Take a look at our add-on partners listed below. We are also
                  keen to hear if you have any interesting integration ideas.
                </p>
                <div className="btn-wrapper">
                  <Button color="primary" href="#">
                    View how it works
                  </Button>
                  <Button
                    className="mt-3 mt-md-0"
                    color="default"
                    href="#"
                    target="_blank"
                  >
                    View all services
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="blur--hover">
              <a href="#">
                <div className="icons-container blur-item mt-5 on-screen">
                  <i className="icon ni ni-diamond" />
                  <i className="icon icon-sm ni ni-album-2" />
                  <i className="icon icon-sm ni ni-app" />
                  <i className="icon icon-sm ni ni-atom" />
                  <i className="icon ni ni-bag-17" />
                  <i className="icon ni ni-bell-55" />
                  <i className="icon ni ni-credit-card" />
                  <i className="icon icon-sm ni ni-briefcase-24" />
                  <i className="icon icon-sm ni ni-building" />
                  <i className="icon icon-sm ni ni-button-play" />
                  <i className="icon ni ni-calendar-grid-58" />
                  <i className="icon ni ni-camera-compact" />
                  <i className="icon ni ni-chart-bar-32" />
                </div>
                <span className="blur-hidden h5 text-success">
                  Eplore all the 21.000+ Atomdot services
                </span>
              </a>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Services;
