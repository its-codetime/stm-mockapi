import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const TableDisplay = ({ tableData, tableType }) => {
  const navigate = useNavigate();
  if (!tableData.length) {
    return (
      <Stack sx={{ maxWidth: 400, margin: "0 auto" }} spacing={1}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          No {tableType}s left.
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/${tableType}/add`);
          }}
        >
          Add more {tableType}s.
        </Button>
      </Stack>
    );
  }

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2 }}>
        {tableType.toUpperCase()} LIST
      </Typography>
      <TableContainer
        sx={{
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell
                  sx={{ paddingRight: 0, paddingLeft: 0 }}
                  align="left"
                >
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      onClick={() => {
                        navigate(`/${tableType}/edit/${row.id}`);
                      }}
                      color="primary"
                      aria-label="edit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        navigate(`/${tableType}/delete/${row.id}`);
                      }}
                      color="error"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableDisplay;
