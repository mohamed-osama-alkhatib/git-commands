import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Alert,
} from "@mui/material";

const AddCodeDialog = ({ open, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!code.trim()) {
      setError("Please enter code");
      return;
    }
    onSave({ title: title || "Code explanation", code });
    handleClose();
  };

  const handleClose = () => {
    setTitle("");
    setCode("");
    setError("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Add New Code</DialogTitle>
      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Code"
          fullWidth
          multiline
          minRows={4}
          variant="outlined"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCodeDialog;
