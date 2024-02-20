import React from "react";
import { Grid, Typography, TextField, Button, Box, Paper } from "@mui/material";

const Hero = () => {
  return (
    <div style={{ width: "100%", backgroundImage: "url('security.png')" }}>
      <Grid container spacing={3}>
        {/* First Div */}
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              backgroundColor: "transparent",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Security Guards
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "20px" }}>
              Meticulously screened and extensively trained security
              professionals adept at safeguarding businesses across diverse
              sectors and events.
            </Typography>
          </Paper>
        </Grid>

        {/* Second Div */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} sx={{ p: 2, backgroundColor: "transparent" }}>
            <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
              GET A FREE QUOTE TODAY
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Name" fullWidth className="homeCommon" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    fullWidth
                    className="homeCommon"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email Id"
                    fullWidth
                    className="homeCommon"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Location"
                    fullWidth
                    className="homeCommon"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    className="homeCommon"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button variant="contained" color="primary">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
