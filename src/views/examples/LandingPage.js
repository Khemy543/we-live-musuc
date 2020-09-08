/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  FormText,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import data from "data";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
          <div className="page-header"
          style={{
          backgroundImage: "url(" + require("assets/img/chester-wade.jpg") + ")",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
          }}>
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    We Live Music <br />
                    <span className="text-white" style={{fontSize:"17px",fontStyle:"italic"}}>Music and Beyond</span>
                  </h1>
                  <p className="text-white mb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel...
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      Follow Us
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="https://twitter.com/welivemusic2"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="https://www.instagram.com/welivemusic99/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="6" md="6">
                </Col>
              </Row>
            </div>
          </div>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-trophy text-warning" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,237</CardTitle>
                                  <p />
                                  <p className="card-category">Awards</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats upper bg-default">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-coins text-white" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,653</CardTitle>
                                  <p />
                                  <p className="card-category">Commits</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-gift-2 text-info" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">593</CardTitle>
                                  <p />
                                  <p className="card-category">Presents</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-credit-card text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">10,783</CardTitle>
                                  <p />
                                  <p className="card-category">Forks</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5">
                      <h1>
                        Large <br />
                        Achivements
                      </h1>
                      <p>
                        I should be capable of drawing a single stroke at the
                        present moment; and yet I feel that I never was a
                        greater artist than now.
                      </p>
                      <br />
                      <p>
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray.
                      </p>
                      
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg section-coins" style={{marginTop:"-50px"}}>
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png")}
            />
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Select an artist{" "}
                    <span className="text-info">that you want to view</span>
                  </h1>
                </Col>
              </Row>
              <Row>
              {data.map((value,key)=>(
                <Col md="4" key={key}>
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={value.profile}
                        style={{borderRadius:"50%"}}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">{value.name}</h4>
                          <span>{value.music_type}</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>{value.no_of_tracks} tracks available</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary" onClick={()=>this.props.history.push("/profile-page",{id:value.id})}>
                        View Artist
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              ))}
              </Row>
              <br />
                      <a
                        className="font-weight-bold text-info mt-5"
                        href="/allartist-page"
                      >
                        Show all{" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
            </Container>
          </section>
          <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path5.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/head2.jpeg")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">573 K</CardTitle>
                          <p className="card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">10 425</CardTitle>
                          <p className="card-category text-white">Business</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Awesome features</h3>
                    <p>
                      The design system comes with three pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Contact Us</h1>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input defaultValue="Mike" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                placeholder="mike@email.com"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input defaultValue="001-12321345" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Message</label>
                              <Input placeholder="Hello there!" type="textarea" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="button"
                        >
                          Send text
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" md="4" style={{marginTop:"100px"}}>
                <div className="">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring / mail</h4>
                      <p>
                        We Live Music <br />
                        +233 26 780 8850 <br />
                        welivemusic99@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className=""  style={{marginTop:"20px"}}>
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us</h4>
                      <p>
                        Bld Mihail Kogalniceanu, nr. 8, <br />
                        7652 Bucharest, <br />
                        Romania
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
      </>
    );
  }
}

export default LandingPage;
