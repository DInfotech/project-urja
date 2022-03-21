import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import logo from "../../assets/logo (8).png";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const styles = {
  header: {
    color: "var(--primarygreen)",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    width: 200,
    height: 100,
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
    <div className={classes.header}>
      <IconButton size="large" style={{ marginRight: 10 }}>
        <Avatar
          alt="Urja Global"
          src={logo}
          variant="square"
          sx={{ width: 56, height: 56 }}
        />
      </IconButton>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          align="center"
          fontWeight="bold"
          className="heading"
          style={{ paddingTop: 20, marginTop: 5 }}
        >
          CIN NO: L67120DL1992PLC048983
        </Typography>
        <Typography
          align="center"
          fontWeight="bold"
          style={{ color: "var(--darkblue)", margin: 9 }}
        >
          GSTIN NO: 07AAACC0367M1ZN
        </Typography>
      </div>
      <div style={{ display: "flex", marginRight: "15px" }}>
        <Box className={classes.box}>
          <CallOutlinedIcon fontSize="large" />
          <div className={classes.text}>
            <Typography fontWeight="light">Toll-Free:</Typography>
            <Typography fontWeight="bold" className="sub-heading">
              8000-500-789
            </Typography>
          </div>
        </Box>
        <Box className={classes.box}>
          <EmailOutlinedIcon fontSize="large" />
          <div className={classes.text}>
            <Typography fontWeight="light">Email:</Typography>
            <Typography fontWeight="bold" className="sub-heading">
              info@urjaglobal.in
            </Typography>
          </div>
        </Box>
      </div>
    </div>
  );
};
export default Nav_Header;
