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

class AllArtist extends React.Component {
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
        <section className="section section-lg section-coins" style={{marginTop:"-10px"}}>
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
                    All Artist{" "}
                    <span className="text-info">that you want to view</span>
                  </h1>
                </Col>
              </Row>
              <Row>
              {data.map((value,key)=>(
                <Col md="4" key={key}>
                  <Card className="card-coin card-plain" style={{marginTop:"65px"}}>
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
            </Container>
          </section>
          <Footer />
      </>
    );
  }
}
  export default AllArtist;