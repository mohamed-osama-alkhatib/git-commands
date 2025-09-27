import React from "react";
import { Paper, Box, Typography, IconButton, Tooltip } from "@mui/material";
import {
  ContentCopy as CopyIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

const CodeCard = ({ item, onCopy, onDelete }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        mb: 2,
        backgroundColor: "#0d1117",
        border: "1px solid #30363d",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#161b22",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #30363d",
        }}
      >
        <Box
          sx={{
            width: "4px",
            height: "16px",
            backgroundColor: "#58a6ff",
            borderRadius: "2px",
            mr: 1,
          }}
        />
        <Typography variant="body2" sx={{ color: "#c9d1d9", flexGrow: 1 }}>
          {item.title}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          padding: "12px",
          "& pre": {
            margin: 0,
            color: "#c9d1d9",
            fontFamily:
              "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
            fontSize: "14px",
            lineHeight: "1.5",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            overflowX: "auto",
            maxHeight: "300px",
            scrollbarWidth: "thin",
            scrollbarColor: "#444d56 #0d1117",
            "&::-webkit-scrollbar": { width: "8px" },
            "&::-webkit-scrollbar-track": { background: "#0d1117" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#444d56",
              borderRadius: "6px",
            },
            "&::-webkit-scrollbar-thumb:hover": { backgroundColor: "#6e7681" },
          },
        }}
      >
        <pre>{item.code}</pre>
        <Tooltip title="Copy code">
          <IconButton
            onClick={() => onCopy(item.code)}
            size="small"
            sx={{
              position: "absolute",
              top: "8px",
              right: "8px",
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              "&:hover": { backgroundColor: "#30363d" },
            }}
          >
            <CopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete code">
          <IconButton
            onClick={() => onDelete(item.id)}
            color="secondary"
            size="small"
            sx={{
              position: "absolute",
              top: "8px",
              right: "40px",
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
};

export default CodeCard;
