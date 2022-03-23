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
import { DropdownButton, Dropdown } from "react-bootstrap";

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
              justifyContent: "flex-start",
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
            <DropdownButton
              variant="button"
              title="About Us"
              style={{ color: "var(--darkblue)" }}
            >
              <Dropdown.Item href="/about">About Us</Dropdown.Item>
              <Dropdown.Item href="/company_overview">
                Company Overview
              </Dropdown.Item>
              <Dropdown.Item href="/vision_mission">
                Vision and Mission
              </Dropdown.Item>
              <Dropdown.Item href="/board_directors">
                Board of Directos
              </Dropdown.Item>
              <Dropdown.Item href="/key_managerial">
                Key Managerial Personnel
              </Dropdown.Item>
              <Dropdown.Item href="/business_partner">
                Business Partners
              </Dropdown.Item>
            </DropdownButton>
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
                Products
              </Link>
            </Button>
            <DropdownButton variant="button" title="Investors">
              <Dropdown.Item href="#">Announcements</Dropdown.Item>
              <Dropdown.Item href="#">Right Issue</Dropdown.Item>
              <Dropdown.Item href="#">
                Notices of record date & BM
              </Dropdown.Item>
              <Dropdown.Item href="#">Financials</Dropdown.Item>
              <Dropdown.Item href="#">Corporate Governance</Dropdown.Item>
              <Dropdown.Item href="#">Share Holding Patterns</Dropdown.Item>
              <Dropdown.Item href="#">Annual Report</Dropdown.Item>
              <Dropdown.Item href="#">Contact Information</Dropdown.Item>
            </DropdownButton>
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
                href="/"
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
                href="/"
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
              justifyContent: "flex-end",
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
                    fontSize: "small",
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
