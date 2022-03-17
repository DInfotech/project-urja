import * as React from "react";
import logo from "../../assets/logo.jpeg";
import Header from "./Nav_Header";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "@material-ui/core";

const styles = {
  navbar: {
    backgroundColor: "#fe7701",
    color: "white",
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
    url: "/projects",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

const ResponsiveAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Header />
      <Container maxWidth="xl" className={classes.navbar}>
        <Toolbar disableGutters>
          <IconButton size="large">
            <Avatar
              alt="Urja Global"
              src={logo}
              variant="square"
              sx={{ width: 56, height: 56 }}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  href={page.url}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {page.title}
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
