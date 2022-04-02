import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {
  const year = new Date().getFullYear();
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section style={{ width: "100%" }}>
          <MDBRow style={{ display: "flex", justifyContent: "center" }}>
            <MDBCol
              lg="3"
              md="6"
              className="mb-4 mb-md-0"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "30%",
                // marginLeft: 60,
              }}
            >
              <h5 className="text-uppercase">Useful Links</h5>

              <ul
                className="list-unstyled mb-0"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <li>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/career" className="text-white">
                    Career
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/terms&conditions" className="text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy_policy" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/refund_policy" className="text-white">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol
              lg="3"
              md="6"
              className="mb-4 mb-md-0"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "initial",
                width: "30%",
              }}
            >
              <h5 className="text-uppercase">Corporate Address</h5>

              <ul
                className="list-unstyled mb-0"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "initial",
                }}
              >
                <li>
                  <span className="text-white">
                    <MDBIcon fas icon="phone-alt" />
                    +91-11-25279143 | 45588275
                  </span>
                </li>
                <li>
                  <span className="text-white">
                    <MDBIcon far icon="envelope" /> info@urjaglobal.in
                  </span>
                </li>
                <li>
                  <span className="text-white">
                    <MDBIcon fas icon="map-marker-alt" />
                    487/63, 1st Floor, National Market, Peeragarhi, New
                    Delhi-110087
                  </span>
                </li>
                <li>
                  <span className="text-white">
                    <MDBIcon fas icon="phone-alt" />
                    Toll Free: 8000-500-789
                  </span>
                </li>
              </ul>
            </MDBCol>

            <MDBCol
              lg="3"
              md="6"
              className="mb-4 mb-md-0"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "initial",
                width: "30%",
              }}
            >
              <h5 className="text-uppercase">Factory Address</h5>

              <ul
                className="list-unstyled mb-0"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <li>
                  <span className="text-white">
                    <MDBIcon fas icon="phone-alt" />
                    +91-11-25279143 | 45588275
                  </span>
                </li>
                <li>
                  <span className="text-white">
                    <MDBIcon far icon="envelope" /> info@urjaglobal.in
                  </span>
                </li>
                <li>
                  <span className="text-white">
                    <MDBIcon fas icon="map-marker-alt" />
                    Plot No.11, Sec.16, HSIIDC, Industrial complex, Bahadurgarh,
                    Distt. Jhajjar, Haryana – 124507, India
                  </span>
                </li>
                <li>
                  <span className="text-white">
                    <MDBIcon fas icon="map-marker-alt" />
                    Urja Incubation/Training Center: 487/63, 1st Floor, National
                    Market, Peeragarhi, New Delhi-87
                  </span>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
        <section className="mt-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/urjagloballimited/"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/urjaglobal"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://in.pinterest.com/urjaglobal01/"
            role="button"
          >
            <MDBIcon fab icon="pinterest" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/urjaglobal/"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/urjaglobal/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.youtube.com/channel/UCbny-GY-kQxznv8Qio4xXsw"
            role="button"
          >
            <MDBIcon fab icon="youtube" />
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © Urja Global Limited {year} | CIN NO: L67120DL1992PLC048983 | GSTIN NO:
        07AAACC0367M1ZN
      </div>
    </MDBFooter>
  );
}
