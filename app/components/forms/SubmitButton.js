import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../Button";

function SubmitButton({ title, color }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton color={color} title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
