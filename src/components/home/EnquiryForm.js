import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import { Button } from "@material-ui/core";

export default function EnquiryForm() {
  return (
    <div style={{ margin: "30px 0px" }} className="reveal">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography
          variant="h3"
          align="center"
          style={{
            margin: 5,
            padding: 10,
            fontSize: 38,
            color: "white",
            backgroundColor: "#58aa97",
            borderRadius: "0px 30px",
            boxShadow: "grey 15px 15px 8px",
            width: "50%",
          }}
        >
          Contact Us
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "40px 0px",
        }}
      >
        <div
          style={{
            border: "2px solid white",
            borderRadius: "20px",
            width: "60%",
            boxShadow: "10px 10px 50px lightgrey",
            display: "flex",
            justifyContent: "center",
            height: "60vh",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "10px 0px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{
                color: "var(--darkblue)",
                fontWeight: "bold",
              }}
            >
              Enquire Now!
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  style={{ borderRadius: "20px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phone"
                  name="phone"
                  label="Phone"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  autoComplete="phone-number"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="E-mail Address"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  autoComplete="email-address"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="message"
                  name="message"
                  label="Message"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ChatRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  multiline
                  variant="standard"
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              size="medium"
              align="center"
              style={{
                margin: 10,
                padding: 10,
                backgroundColor: "var(--primarygreen)",
                color: "var(--darkblue)",
                width: "150px",
                borderRadius: 10,
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
