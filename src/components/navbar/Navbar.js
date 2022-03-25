import * as React from "react";
import Header from "./Nav_Header";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "@material-ui/core";
import "../../common_styles/commonClasses.css";
import "./navbar.css";
import { NavDropdown } from "react-bootstrap";

const styles = {
  navbar: {
    backgroundColor: "var(--primarygreen)",
    color: "var(--darkblue)",
  },
};
const useStyles = makeStyles(styles);

const buttons = [
  {
    title: "Right Issue First Call",
    url: "/firstcall",
  },
  {
    title: "Right Issue Second and Final Call",
    url: "/secondcall",
  },
  {
    title: "Franchisee",
    url: "/franchisee",
  },
];

const ResponsiveAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Header />
      <Container maxWidth="xl" className={classes.navbar}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "baseline",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Home
              </Link>
            </Button>
            <NavDropdown
              title="ABOUT US"
              style={{
                color: "var(--darkblue) !important",
                fontWeight: 1000,
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/ceo">CEO</NavDropdown.Item>
              <NavDropdown.Item href="/company_overview">
                Company Overview
              </NavDropdown.Item>
              <NavDropdown.Item href="/vision_mission">
                Vision and Mission
              </NavDropdown.Item>
              <NavDropdown.Item href="/board_directors">
                Board of Directos
              </NavDropdown.Item>
              <NavDropdown.Item href="/key_managerial">
                Key Managerial Personnel
              </NavDropdown.Item>
              <NavDropdown.Item href="/business_partner">
                Business Partners
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/products"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Products
              </Link>
            </Button>
            <NavDropdown
              title="INVESTORS"
              style={{
                color: "var(--darkblue) !important",
                fontWeight: 1000,
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              <NavDropdown.Item href="#">Announcements</NavDropdown.Item>
              <NavDropdown.Item href="#">Right Issue</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Notices of record date & BM
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Financials</NavDropdown.Item>
              <NavDropdown.Item href="#">Corporate Governance</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Share Holding Patterns
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Annual Report</NavDropdown.Item>
              <NavDropdown.Item href="#">Contact Information</NavDropdown.Item>
            </NavDropdown>
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/electric_vehicles"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Electric Vehicles
              </Link>
            </Button>
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/solar_projects"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Projects
              </Link>
            </Button>
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Contact Us
              </Link>
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            {buttons.map((button) => (
              <Button
                key={button.title}
                sx={{
                  margin: "1px",
                  color: "var(--darkblue)",
                  backgroundColor: "white",
                  display: "block",
                  borderRadius: 10,
                  fontWeight: "bold",
                }}
              >
                <Link
                  href={button.url}
                  style={{
                    textDecoration: "none",
                    color: "var(--darkblue)",
                    fontSize: "13px",
                  }}
                >
                  {button.title}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
