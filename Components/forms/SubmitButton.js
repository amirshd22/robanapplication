import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, color, textColor }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      textColor={textColor}
      color={color}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;
