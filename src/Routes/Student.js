import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// components
import TableDisplay from "../components/TableDisplay";
import DeleteForm from "../components/forms/DeleteForm";
import EditForm from "../components/forms/EditForm";
import AddForm from "../components/forms/AddForm";

import useResource from "../useResource";
import { Loader } from "../components/StyledComponents";

const Student = () => {
  const location = useLocation();
  let formType = location.pathname.split("/")[1];
  const [students, studentOps, loading] = useResource(formType);
  const { addResource, getResource, deleteResource, editResource } = studentOps;

  return (
    <>
      <Routes>
        <Route
          path="all"
          element={
            loading ? (
              <Loader />
            ) : (
              <TableDisplay tableType={formType} tableData={students} />
            )
          }
        />
        <Route
          path="add"
          element={<AddForm formType={formType} addResource={addResource} />}
        />
        <Route
          path="edit/:id"
          element={
            <EditForm
              editResource={editResource}
              getResource={getResource}
              formType={formType}
            />
          }
        />
        <Route
          path="delete/:id"
          element={
            <DeleteForm
              formType={formType}
              getResource={getResource}
              deleteResource={deleteResource}
            />
          }
        />
        <Route path="*" element={<Navigate to="all" />} />
      </Routes>
    </>
  );
};

export default Student;
