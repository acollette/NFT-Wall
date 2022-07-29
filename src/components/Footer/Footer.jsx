import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap"
import {Link} from "react-router-dom"
import "./footer.css";

const TrueLabs = [
    {display:   "About",
    url: "#",
    },
    {display: "Projects",
    url: "#"
    },
    {display: "Community",
    url: "#"
    }
]

const Footer = () => {
    return <footer className='footer'>
        <Container>
            <Row>
                <Col lg="3" md="6" sm="6">
                    <div className="">
                        <h2 className=" d-flex gap-2 align-items-center ">
                            <span>
                               <i class="ri-fire-fill"></i>
                            </span>
                             NFT Wall
                         </h2>
                         <p>
                            Lorem ipsum
                         </p>

                     </div>     
                </Col>
                <Col lg="2" md="3" sm="6">
                    
                </Col>
                <Col lg="2" md="3" sm="6"></Col>
                <Col lg="2" md="3" sm="6">
                <h5>TrueLabs</h5>
                    <ListGroup className="list__group">
                        {TrueLabs.map((item,index)=>(
                            <ListGroupItem key={index} className="list__item">
                                <Link to={item.url}> {item.display}</Link>
                            </ListGroupItem>
                        )

                        )}
                    </ListGroup>
                </Col>
                <Col lg="3" md="6" sm="6">
                    <h5>Newsletter</h5>
                    <input type="text" className="newsletter" placeholder="Email"/>
                    <div className="social__links d-flex gap-3 align-items-center">
                        <span><Link to="#"><i class="ri-twitter-fill"></i></Link></span>
                        <span><Link to="#"><i class="ri-discord-fill"></i></Link></span>
                    </div>
                </Col>
                <Col lg="12" className="mt-4 text-align-left">
                   
                </Col>
            </Row>
        </Container>

    </footer>
}

export default Footer;