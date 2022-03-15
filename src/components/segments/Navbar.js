import * as React from "react";
import logo from "../../assets/logo.jpeg";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
    menu: [
      {
        subtitle: "",
        url: "/",
      },
    ],
  },
  {
    title: "About Us",
    menu: [
      {
        subtitle: "About Us",
        url: "/about",
      },
      {
        subtitle: "Company Overview",
        url: "/company",
      },
      {
        subtitle: "Vision and Mision",
        url: "/vision",
      },
      {
        subtitle: "Board of Directors",
        url: "/directors",
      },
      {
        subtitle: "Key Managerial Personnel",
        url: "/personnel",
      },
      {
        subtitle: "Business Partner",
        url: "/business",
      },
    ],
  },
  {
    title: "Products",
    menu: [
      {
        subtitle: "",
        url: "/products",
      },
    ],
  },
  {
    title: "Investors",
    menu: [
      {
        subtitle: "Announcements",
        url: "/announcements",
      },
      {
        subtitle: "Right Issue",
        url: "/issue",
      },
      {
        subtitle: "Notices Of Record Date & BM",
        url: "/notices",
      },
      {
        subtitle: "Financials",
        url: "/financials",
      },
      {
        subtitle: "Corporate Governance",
        url: "/corporate",
      },
    ],
  },
  {
    title: "Electric Vehicles",
    menu: [
      {
        subtitle: "",
        url: "/vehicles",
      },
    ],
  },
  {
    title: "Projects",
    menu: [
      {
        subtitle: "",
        url: "/projects",
      },
    ],
  },
  {
    title: "Contact Us",
    menu: [
      {
        subtitle: "",
        url: "/contact",
      },
    ],
  },
];

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
            {pages.map((page) =>
              page.title !== "About Us" || page.title !== "Investors" ? (
                <Button
                  key={page.title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ) : (
                <>
                  {/* <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {page.title}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={page.title}
                        key={page.title}
                      >
                        <MenuItem value={page.menu.subtitle}>
                          <Typography textAlign="center">
                            {page.menu.subtitle}
                          </Typography>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box> */}
                  <Button
                    key={page.title}
                    sx={{ my: 2, color: "white", display: "block" }}
                    onClick={handleOpenUserMenu}
                  >
                    {page.title}
                    <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page.menu.subtitle}
                        onClick={handleCloseUserMenu}
                      >
                        <Typography textAlign="center">
                          {page.menu.subtitle}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
