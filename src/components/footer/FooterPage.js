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
import { FiMail} from 'react-icons/fi';
import { IoLocationSharp} from "react-icons/io5";
import { IoCallOutline} from "react-icons/io5";
const year = new Date().getFullYear();

const FooterPage = () => {
  return (
    <div class="footer-bg">

      <Container>
        <Row>
          <Col>

            <h4 class="footer-title" >Useful Links</h4>
            <p class="footer-content">
              <ul type="none">
                <li><a href="#">Home</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy & Policy</a></li>
                <li><a href="#">Refund Policy</a></li>

              </ul>
            </p>
          </Col>

          <Col>
            <h4 class="footer-title" >Corporate Address</h4>
            <p class="footer-content">
              <ul type="none">
                <li><a href="#"><CallSharpIcon />+91-11-25279143 | 45588275</a></li>
                <li><a href="#"><FiMail/>  info@urjaglobal.in</a></li>
                <li><a href="#"><IoLocationSharp/>487/63, 1st Floor, National Market, Peeragarhi, New Delhi-110087
                </a></li>
                <li><a href="#"><CallSharpIcon /> Toll Free: 8000-500-789</a></li>

              </ul>
            </p>

          </Col>

          <Col >
            <h4 class="footer-title" >Factory Address</h4>
       
            <p class="footer-content">
              <ul type="none">
              <li><a href="#"><CallSharpIcon /> +91-11-25279143 | 45588275</a></li>
                <li><a href="#"><FiMail/>  info@urjaglobal.in</a></li>
                <li><a href="#"><IoLocationSharp/> Plot No.11, Sec.16, HSIIDC, Industrial complex, Bahadurgarh, Distt. Jhajjar, Haryana – 124507, India
                </a></li>
                <li><a href="#"><IoLocationSharp/> Urja Incubation/Training Center:
487/63, 1st Floor, National Market, Peeragarhi, New Delhi-87</a></li>

              </ul>
            </p>


          </Col>

          <Col >
          <h4 class="footer-title" >Contact Us</h4>
           
            {/* <h4 style={{ margin: '1vw 0 0 2vw' }}>Keep In Touch</h4> */}
            <p style={{ margin: '0',padding:"0", color:"white" }}>
              <span class="social-icon"><FacebookSharpIcon /></span>
              <span class="social-icon"><YouTubeIcon /></span>
              <span class="social-icon"><InstagramIcon /></span>
              <span class="social-icon"><TwitterIcon /></span>

            </p>
          </Col>
        </Row>
      </Container>
      <hr style={{color:"white",marginTop: "0rem"}}></hr>
      <div style={{ marginTop: "1rem" }}>
        <p style={{ color: "rgb(73, 72, 72)",marginBottom:"0" }} className="end-footer"> © Urja Global Limited 2020 | CIN NO: L67120DL1992PLC048983 | GSTIN NO: 07AAACC0367M1ZN </p>
      </div>

    </div>

  );
}

export default FooterPage;

