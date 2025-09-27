import React, { useState, useEffect } from "react";
import initialCodes from "./CodesData";
import { Container, Typography, Button, Box, Alert } from "@mui/material";

import CodeCard from "./CodeCard";
import AddCodeDialog from "./AddCodeDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";

const CodeManager = () => {
  const [codes, setCodes] = useState(() => {
    const saved = localStorage.getItem("savedCodes");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      } catch (e) {
        console.error("Failed to parse saved codes:", e);
      }
    }
    return initialCodes; // fallback to default
  });

  const [openAdd, setOpenAdd] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Save to localStorage when codes change
  useEffect(() => {
    localStorage.setItem("savedCodes", JSON.stringify(codes));
  }, [codes]);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const handleOpenConfirm = (id) => {
    const item = codes.find((c) => c.id === id);
    setItemToDelete(item);
    setOpenConfirm(true);
  };
  const handleCloseConfirm = () => setOpenConfirm(false);

  const handleSaveNewCode = (newCode) => {
    const item = {
      id: Date.now(),
      title: newCode.title,
      code: newCode.code,
    };
    setCodes((prev) => [...prev, item]);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      setCodes((prev) => prev.filter((item) => item.id !== itemToDelete.id));
      handleCloseConfirm();
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" component="h1">
          Code Manager
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenAdd}>
          Add New Code
        </Button>
      </Box>

      {codes.length === 0 ? (
        <Alert severity="info">
          No codes saved yet. Click "Add New Code" to get started.
        </Alert>
      ) : (
        codes.map((item) => (
          <CodeCard
            key={item.id}
            item={item}
            onCopy={handleCopy}
            onDelete={handleOpenConfirm}
          />
        ))
      )}

      <AddCodeDialog
        open={openAdd}
        onClose={handleCloseAdd}
        onSave={handleSaveNewCode}
      />

      <ConfirmDeleteDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        onConfirm={handleConfirmDelete}
        item={itemToDelete}
      />
    </Container>
  );
};

export default CodeManager;
