import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// components
import TableDisplay from "../components/TableDisplay";
import DeleteForm from "../components/forms/DeleteForm";
import useResource from "../useResource";
import EditForm from "../components/forms/EditForm";
import AddForm from "../components/forms/AddForm";
import { Loader } from "../components/StyledComponents";

const Teacher = () => {
  const [teachers, teacherOps, loading] = useResource("teacher");
  const { getResource, addResource, deleteResource, editResource } = teacherOps;
  const location = useLocation();
  let formType = location.pathname.split("/")[1];
  return (
    <Routes>
      <Route
        path="all"
        element={
          loading ? (
            <Loader />
          ) : (
            <TableDisplay tableType={formType} tableData={teachers} />
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
            getResource={getResource}
            deleteResource={deleteResource}
            formType={formType}
          />
        }
      />
      <Route path="*" element={<Navigate to={"/teacher/all"} />} />
    </Routes>
  );
};

export default Teacher;
