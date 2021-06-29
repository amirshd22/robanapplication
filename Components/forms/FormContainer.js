import React from "react";
import { Formik, useFormik } from "formik";
import { View, StyleSheet } from "react-native";

function FromContainer({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      style={styles.container}
      enableReinitialize
    >
      {() => <View style={styles.container}>{children}</View>}
    </Formik>
  );
}

export default FromContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
