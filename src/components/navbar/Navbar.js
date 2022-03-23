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

const styles = {
  navbar: {
    backgroundColor: "var(--primarygreen)",
    color: "var(--darkblue)",
  },
};
const useStyles = makeStyles(styles);

const pages = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },

  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Investors",
    url: "/investors",
  },

  {
    title: "Electric Vehicles",
    url: "/vehicles",
  },
  {
    title: "Projects",
    url: "../SolarProjects",
  },
  {
    title: "Gallery",
    url: "/gallery",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

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
            {pages.map((page) => (
              <Button
                key={page.title}
                sx={{
                  margin: "1px",
                  color: "var(--darkblue)",
                  display: "block",
                }}
              >
                <Link
                  href={page.url}
                  style={{
                    textDecoration: "none",
                    color: "var(--darkblue)",
                    fontSize: "13px",
                    fontWeight: 1000,
                  }}
                >
                  {page.title}
                </Link>
              </Button>
            ))}
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
