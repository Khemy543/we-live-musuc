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
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import data from "data";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;

class ProfilePage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
      artist:[],
      contact:[]
    };
  }
  componentDidMount() {
    console.log(data);
    let tempData = data;
    let selectedArtist = tempData.find(item=>item.id === this.props.location.state.id);
    if(selectedArtist !== undefined){
      console.log(selectedArtist);
      this.setState({artist:selectedArtist, contact:selectedArtist.contact})
    }
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    const {id, name, about, profile} = this.state.artist;
    const {facebook, twitter, instagram} = this.state.contact;
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">{name}</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description" style={{marginTop:"10px"}}>
                   {about}
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href={twitter}
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href={facebook}
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="dribbble"
                      href={instagram}
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={profile}
                      />
                      <h4 className="title">Profile</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">Artist Information</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>The Daily: Nexo to Pay on Stable...</td>
                              </tr>
                              <tr>
                                <td>Venezuela Begins Public of Nation...</td>
                              </tr>
                              <tr>
                                <td>PR: BitCanna – Dutch Blockchain...</td>
                              </tr>
                            </tbody>
                          </Table>
                          </Nav>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">All Musics</h1>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                    An artist of considerable range, Ryan — the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
                    </Button>
                    <Button
                      className="btn-simple"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Check it!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
         
          <Footer />
        </div>
      </>
    );
  }
}

export default ProfilePage;
