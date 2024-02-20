import React, { useState } from "react";
import {
  Grid,
  Button,
  Typography,
  Paper,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Checkbox, Container } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const DashboardCard = () => {
  const array = [
    { name: "Organization 1" },
    { name: "Organization 2" },
    { name: "Organization 3" },
    { name: "Organization 4" },
    { name: "Organization 5" },
  ];

  const [organization, setOrganization] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openNewModal, setOpenNewModal] = useState(false);
  const [formData, setFormData] = useState({
    dropdownValue: "",
    information: "",
    additionalInformation: "",
    images: [],
  });

  const handleAddOrganization = () => {
    // Check if organization is already added
    if (!organization) {
      setOrganization("New Organization");
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenNewModal = () => {
    setOpenNewModal(true);
  };

  const handleCloseNewModal = () => {
    setOpenNewModal(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };

  const handleNext = () => {
    handleCloseModal();
    handleOpenNewModal();
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
            Report
          </Typography>
          <Box style={{ display: "flex", flexDirection: "row" }}>
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
                  onClick={handleOpenModal}
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
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

        {/* Modal */}
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Add Report</DialogTitle>
          <DialogContent>
            <TextField
              select
              label="Dropdown Menu"
              name="dropdownValue"
              value={formData.dropdownValue}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            >
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
              <MenuItem value="Option 3">Option 3</MenuItem>
            </TextField>
            <TextField
              label="Information"
              name="information"
              value={formData.information}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Additional Information"
              name="additionalInformation"
              value={formData.additionalInformation}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            {/* Add images button */}
            <input type="file" onChange={handleImageUpload} multiple />
            {/* Display uploaded images */}
            <List>
              {formData.images.map((image, index) => (
                <ListItem key={index}>
                  <ListItemText primary={image.name} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </DialogContent>
        </Dialog>

        {/* New Modal */}
        <Dialog open={openNewModal} onClose={handleCloseNewModal}>
          <DialogTitle>Save Info</DialogTitle>
          <DialogContent>
            {/* Add checkboxes here */}
            <Box>
              <Typography variant="body1">
                <Checkbox {...label} />
                Checkbox 1
              </Typography>

              <Typography variant="body1">
                <Checkbox {...label} />
                Checkbox 2
              </Typography>
              <Typography variant="body1">
                <Checkbox {...label} />
                Checkbox 3
              </Typography>
              <Typography variant="body1">
                <Checkbox {...label} />
                Checkbox 4
              </Typography>
              <Typography variant="body1">
                <Checkbox {...label} />
                Checkbox 5
              </Typography>
            </Box>
            {/* Add buttons */}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1vmax",
              }}
            >
              <Button variant="contained" color="primary">
                Save Info
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCloseNewModal}
                style={{ marginLeft: "1vmax" }}
              >
                Finish
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Grid>
    </Container>
  );
};

export default DashboardCard;
