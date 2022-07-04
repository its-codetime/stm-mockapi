import InputForm from "./InputForm";
import { useNavigate } from "react-router-dom";

export default function AddForm({ addResource, formType }) {
  const navigate = useNavigate();

  const formData = { name: "", email: "" };
  const formUtils = {
    formName: `add ${formType}`.toUpperCase(),
    submitName: "Add",
    onSubmit: async (newData) => {
      await addResource(newData);
      navigate(`/${formType}/all`);
    },
    onCancel: () => {
      navigate(`/${formType}/all`);
    },
  };

  return (
    <>
      <InputForm
        formType={formType}
        formData={formData}
        formUtils={formUtils}
      />
    </>
  );
}
