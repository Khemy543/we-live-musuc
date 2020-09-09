import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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

class MusicPage extends React.Component {
    state={
        music:[],
        links:[]
    }
  componentDidMount() {
    let tempData = data;
    let selected = tempData.find(item=>item.id === this.props.location.state.artist);
    if(selected !== undefined){
        let selectedMusic = selected.music.find(item=>item.id === this.props.location.state.id);
        if(selectedMusic !== undefined){
            this.setState({music:selectedMusic, links:selectedMusic.link})
        }
    }
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    const {cover, name, artists} = this.state.music;
    return (
      <>
        <ExamplesNavbar />
        <div className="section">
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
            <Container style={{marginTop:"100px"}}>
              <Row>
                <Col md="4" className="ml-auto mr-auto">
                <h3 style={{textAlign:"center", fontSize:"25px",fontWeight:"bolder"}}>{name}</h3>
                 <Card>
                    <CardBody>
                        <img 
                            alt="#"
                            src={cover}
                        />
                    </CardBody>
                    <CardFooter>
                        <h3>{name}</h3>
                        <p style={{marginTop:"-30px",marginBottom:"30px"}}>{artists}</p>
                        <div style={{textAlign:"center"}}>
                            <p style={{fontWeight:"bold"}}>Choose a music service</p>
                            {this.state.links.map((value,index)=>(
                            <Row style={{marginTop:"15px"}} key={index}>
                                <Col>
                                <h4 style={{fontWeight:"bolder", fontSize:"22px"}}>{value.name}</h4>
                                </Col>
                                <Col>
                                <a 
                                href={value.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <Button
                                className="btn-round"
                                color="primary"
                                style={{color:"white"}}
                                >Play</Button>
                                </a>
                               
                                </Col>
                            </Row>
                            ))}
                        </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
      </>
    );
  }
}
  export default MusicPage;