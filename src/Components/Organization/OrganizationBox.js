import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, Paper, Box } from "@material-ui/core";
import { display } from "@mui/system";
import { Container, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InformationModal from "./InformationModal";
import DogHandlerModal from "./DogHandlerModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import axios from "axios";
import EditDogHandlerModal from "./EditDogHandlerModal";

const OrganizationBox = () => {
  const [open, setOpen] = useState(false);
  const [selectedDogHandler, setSelectedDogHandler] = useState(null);
  const [openDogHandlerModal, setOpenDogHandlerModal] = useState(false);
  const [openEditDogHandlerModal, setOpenEditDogHandlerModal] = useState(false);
  const [dogHandlerList, setdogHandlerList] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDgHanlerModalClose = () => {
    setOpenDogHandlerModal(false);
  };

  const handleDgHanlerModalOpen = () => {
    setOpenDogHandlerModal(true);
  };
  const handleEditDgHanlerModalClose = () => {
    setOpenEditDogHandlerModal(false);
  };

  const handleEditDgHanlerModalOpen = () => {
    if (selectedDogHandler) {
      setOpenEditDogHandlerModal(true);
    }
  };

  function handleSelectDogHandler(item) {
    setSelectedDogHandler(item);
  }

  const array = [
    {
      name: "Organization 1",
    },
    { name: "Organization 2" },
    { name: "Organization 3" },
    { name: "Organization 4" },
    { name: "Organization 5" },
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

  async function getDogHandlerList() {
    try {
      const { data } = await axios.get(
        "/api/v1/dogHandler/getByOrgId/65d50f062d04677868e3bbf4"
      );
      console.log(data);
      setdogHandlerList(data);
    } catch (error) {
      toast.error(error.response.data?.message);
      console.log(error);
    }
  }
  useEffect(() => {
    getDogHandlerList();
  }, []);

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
                  overflowY: "auto",
                }}
              >
                {dogHandlerList.map((item) => (
                  <ListItem
                    // selected={selectedDogHandler}
                    key={item._id}
                    onClick={() => handleSelectDogHandler(item)}
                    style={{
                      backgroundColor:
                        selectedDogHandler?._id === item._id
                          ? "#C8E1F4"
                          : "transparent",
                    }}
                  >
                    <ListItemText primary={item.name} />
                    <ListItemIcon>
                      <DeleteIcon sx={{ color: "red" }} />
                    </ListItemIcon>
                  </ListItem>
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
                  onClick={handleDgHanlerModalOpen}
                >
                  Add
                </Button>
                <Button
                  onClick={handleEditDgHanlerModalOpen}
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
                  width: "20rem",
                  marginLeft: "3px",
                  padding: "1vmax",
                  boxSizing: "border-box",
                }}
              >
                {selectedDogHandler ? (
                  <Box>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Details
                    </Typography>
                    <Typography variant="body1">
                      <span style={{ fontWeight: "600" }}>Name:</span>{" "}
                      {selectedDogHandler?.name}
                      <Typography variant="body1">
                        <span style={{ fontWeight: "600" }}>Email:</span>{" "}
                        {selectedDogHandler?.email}
                      </Typography>
                      <Typography variant="body1">
                        <span style={{ fontWeight: "600" }}>Address:</span>{" "}
                        {selectedDogHandler?.address}
                      </Typography>
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body1" marginTop={20}>
                    No dog handler is selected
                  </Typography>
                )}
              </Paper>
            </Box>
          </Box>
        </Grid>
        <DogHandlerModal
          open={openDogHandlerModal}
          getList={getDogHandlerList}
          handleClose={handleDgHanlerModalClose}
        />
        <EditDogHandlerModal
          getList={getDogHandlerList}
          dogHandler={selectedDogHandler}
          open={openEditDogHandlerModal}
          handleClose={handleEditDgHanlerModalClose}
        />
        {/* <DogHandlerModal  open={open} handleClose={handleClose} /> */}
      </Grid>
    </Container>
  );
};

export default OrganizationBox;
