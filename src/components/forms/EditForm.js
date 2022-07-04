import InputForm from "./InputForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../StyledComponents";

export default function EditForm({ editResource, getResource, formType }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getResource(id)
      .then((data) => setFormData(data))
      .catch((err) => {
        console.error(err.message);
        navigate(`/${formType}/all`);
      });
  }, [getResource, id, formType, navigate]);

  const formUtils = {
    formName: `update ${formType}`.toUpperCase(),
    submitName: "Update",
    onSubmit: async (newData) => {
      await editResource(newData);
      navigate(`/${formType}/all`);
    },
    onCancel: () => {
      navigate(`/${formType}/all`);
    },
  };

  return (
    <>
      {formData?.id ? (
        <InputForm
          formType={formType}
          formData={formData}
          formUtils={formUtils}
        />
      ) : (
        <Loader />
      )}
    </>
  );
}
