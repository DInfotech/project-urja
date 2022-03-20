import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./FooterPage.css"
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import AirportShuttleSharpIcon from '@mui/icons-material/AirportShuttleSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const year = new Date().getFullYear();

const FooterPage = () => {
  return (
    <div class="footer-bg">

    <Container>
  <Row>
    <Col>
      <h5 class="footer-title" > Contact Us</h5>
      <p class="footer-content"><HomeSharpIcon/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Integer vel magna quis quam mollis rutrum. Nam aliquam pretium nibh, nec rhoncus magna posuere id.
     </p>

     <p><CallSharpIcon/>+91-9000030240</p>
    </Col>

    <Col>
    <h5 class="footer-title" >Online Shopping</h5>
    <p class="footer-content">
      <ul type="none">
        <li><a href="#">Men</a></li>
        <li><a href="#">WoMen</a></li>
        <li><a href="#">Kids</a></li>
        <li><a href="#">Beauty</a></li>
        <li><a href="#">Gift Cards</a></li>
        <li><a href="#">Home & Living</a></li>
      </ul>
    </p>

    </Col>

    <Col>
    <h5 class="footer-title" >Useful Links</h5>
    <p class="footer-content">
      <ul type="none">
        <li><a href="#">FAQ</a></li>
        <li><a href="#">T&C</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Track Orders </a></li>
        <li><a href="#">Shipping</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </p>

    </Col>

    <Col>
    <p style={{margin:'2vw 0 0 2vw'}}><CheckCircleSharpIcon/>100% ORIGINAL gaurantee for all products at phoenixfashion.com</p>

    <p style={{margin:'1vw 0 0 2vw'}}><AirportShuttleSharpIcon/>Return within 30 days of recieving your order</p>
    <h5 style={{margin:'1vw 0 0 2vw'}}>Keep In Touch</h5>
    <p style={{margin:'0.5rem 0 0 2vw'}}>
    <span class="social-icon"><FacebookSharpIcon/></span>
    <span class="social-icon"><YouTubeIcon/></span>
    <span class="social-icon"><InstagramIcon/></span>
    <span class="social-icon"><TwitterIcon/></span>

    </p>
    </Col>
  </Row>
</Container>
     <div style={{marginTop : "2rem"}}>
      <h5  style={{color:"rgb(73, 72, 72)"}} className="end-footer"> © Copyright Phoenix {year}</h5>
     </div>
  
</div>

  );
}

export default FooterPage;

// Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// Integer vel magna quis quam mollis rutrum. Nam aliquam pretium nibh, nec rhoncus magna posuere id.
// Vestibulum enim ante, porta ac neque ac, vehicula facilisis dolor. 
// Nulla quis consequat neque, et cursus orci. 
// Suspendisse sit amet dui semper, rhoncus lectus non, efficitur risus