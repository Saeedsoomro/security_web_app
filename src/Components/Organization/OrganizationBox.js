import React, { useState } from "react";
import { Grid, Button, Typography, Paper, Box } from "@material-ui/core";
import { display } from "@mui/system";
import { Container } from "@mui/material";
import InformationModal from "./InformationModal";

const OrganizationBox = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const array = [
    {
      name: "Organization 1",
    },
    { name: "Organization 2" },
    { name: "Organization 3" },
    { name: "Organization 4" },
    { name: "Organization 5" },
  ];

  const array2 = [
    {
      name: "Dog Handler 1",
    },
    { name: "Dog Handler 2" },
    { name: "Dog Handler 3" },
    { name: "Dog Handler 4" },
    { name: "Dog Handler 5" },
  ];

  const [organization, setOrganization] = useState("");

  const handleAddOrganization = () => {
    // Check if organization is already added
    if (!organization) {
      setOrganization("New Organization");
    }
  };

  const handleEdit = () => {
    // Logic to edit organization in one of the boxes
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "2vmax", padding: "2vmax" }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            style={{
              marginTop: "1vmax",
              marginBottom: "1vmax",
              fontWeight: "bold",
            }}
          >
            Organizations
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1vmax",
                  boxSizing: "border-box",
                }}
              >
                {array.map((item) => (
                  <Typography variant="body1" style={{ padding: "0.3vmax" }}>
                    {item.name}
                  </Typography>
                ))}
              </Paper>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "1vmax",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "1vmax" }}
                  onClick={handleOpen}
                >
                  Add
                </Button>
                <Button
                  onClick={handleOpen}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
              </Box>
            </Box>
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "15rem",
                  marginLeft: "3px",
                  padding: "1vmax",
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold", fontStyle: "italic" }}
                >
                  Address
                </Typography>
                <Typography variant="body1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam minima dicta ad possimus.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            style={{
              marginTop: "1vmax",
              marginBottom: "1vmax",
              fontWeight: "bold",
            }}
          >
            Dog Handlers
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1vmax",
                  boxSizing: "border-box",
                }}
              >
                {array2.map((item) => (
                  <Typography variant="body1" style={{ padding: "0.3vmax" }}>
                    {item.name}
                  </Typography>
                ))}
              </Paper>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "1vmax",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "1vmax" }}
                  onClick={handleOpen}
                >
                  Add
                </Button>
                <Button
                  onClick={handleOpen}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
              </Box>
            </Box>
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "15rem",
                  marginLeft: "3px",
                  padding: "1vmax",
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold", fontStyle: "italic" }}
                >
                  Address
                </Typography>
                <Typography variant="body1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam minima dicta ad possimus.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Grid>
        <InformationModal open={open} handleClose={handleClose} />
      </Grid>
    </Container>
  );
};

export default OrganizationBox;
