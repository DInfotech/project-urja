import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const styles = {
  header: {
    color: "#fe7701",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
  },
  box: {
    width: 200,
    height: 100,
    margin: "5px 50px",
    padding: "10px 0px",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    color: "black",
  },
};
const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.header}>
      <Typography align="center" fontWeight="bold">
        CIN NO: L67120DL1992PLC048983 | GSTIN NO: 07AAACC0367M1ZN
      </Typography>
      <Box className={classes.box}>
        <CallOutlinedIcon fontSize="large" sx={{ margin: 2 }} />
        <div className={classes.text}>
          <Typography fontWeight="light">Toll-Free</Typography>
          <Typography fontWeight="bold">8000-500-789</Typography>
        </div>
      </Box>
      <Box className={classes.box}>
        <EmailOutlinedIcon fontSize="large" sx={{ margin: 2 }} />
        <div className={classes.text}>
          <Typography fontWeight="light">Email</Typography>
          <Typography fontWeight="bold">info@urjaglobal.in</Typography>
        </div>
      </Box>
    </Toolbar>
  );
};
export default Header;
