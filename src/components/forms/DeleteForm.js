import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { DeleteSpan, Loader } from "../StyledComponents";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DeleteForm({ getResource, deleteResource, formType }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getResource(id)
      .then((data) => setUserData(data))
      .catch((err) => {
        console.error(err.message);
        navigate(`/${formType}/all`);
      });
  }, [getResource, id, formType, navigate]);

  return (
    <>
      {userData?.id ? (
        <Stack
          sx={{ textAlign: "center", maxWidth: 400, margin: "0 auto" }}
          spacing={2}
        >
          <Typography variant="h6">
            Are you sure you want to delete {formType} with name
            <DeleteSpan>{" " + userData.name + " "}</DeleteSpan>
            and email
            <DeleteSpan>{" " + userData.email}</DeleteSpan>?
          </Typography>
          <Button
            onClick={async () => {
              await deleteResource(userData.id);
              navigate(`/${formType}/all`);
            }}
            variant="contained"
          >
            Yes, Go Ahead
          </Button>
          <Button
            onClick={() => {
              navigate(`/${formType}/all`);
            }}
            variant="contained"
          >
            Cancel
          </Button>
        </Stack>
      ) : (
        <Loader />
      )}
    </>
  );
}
