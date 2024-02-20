import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";

const InformationModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            width: "80%",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            style={{ marginBottom: "16px" }}
          >
            Add Information
          </Typography>
          <Divider />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
              marginTop: "16px",
            }}
          >
            <Box style={{ width: "45%" }}>
              <Typography variant="h6" style={{ marginBottom: "16px" }}>
                Dog Handlers Details
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "16px" }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "16px" }}
              />
              <Typography variant="subtitle1" style={{ marginBottom: "8px" }}>
                Address
              </Typography>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "16px" }}
              />
              <TextField
                label="Postal Code"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "16px" }}
              />
              <TextField
                label="Province"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "16px" }}
              />
              <TextField label="City" variant="outlined" fullWidth />
            </Box>
            <Box style={{ width: "45%" }}>
              <Typography variant="h6" style={{ marginBottom: "16px" }}>
                Reporter Details
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "16px" }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "16px" }}
              />
              <TextField label="Number" variant="outlined" fullWidth />
            </Box>
          </Box>
          <Divider />
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button
              variant="outlined"
              onClick={handleClose}
              style={{ marginRight: "8px" }}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose} color="primary">
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default InformationModal;
