import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const styles = {
  header: {
    color: "var(--primarygreen)",
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
    color: "var(--primarygreen)",
  },
};
const useStyles = makeStyles(styles);

const Nav_Header = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.header}>
      <Typography align="center" fontWeight="bold" className="heading">
        CIN NO: L67120DL1992PLC048983 | GSTIN NO: 07AAACC0367M1ZN
      </Typography>
      <Box className={classes.box}>
        <CallOutlinedIcon fontSize="large" sx={{ margin: 2 }} />
        <div className={classes.text}>
          <Typography fontWeight="light" className="sub-heading">
            Toll-Free
          </Typography>
          <Typography fontWeight="bold" className="sub-heading">
            8000-500-789
          </Typography>
        </div>
      </Box>
      <Box className={classes.box}>
        <EmailOutlinedIcon fontSize="large" sx={{ margin: 2 }} />
        <div className={classes.text}>
          <Typography fontWeight="light" className="sub-heading">
            Email
          </Typography>
          <Typography fontWeight="bold" className="sub-heading">
            info@urjaglobal.in
          </Typography>
        </div>
      </Box>
    </Toolbar>
  );
};
export default Nav_Header;
