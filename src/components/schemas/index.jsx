import * as Yup from "yup";
export const newRegisterSchema = Yup.object({
  employee_id: Yup.number().min(6, "MIN 6").required("*Required"),
  designation: Yup.string().required("*Required"),
  contact_no: Yup.string()
    .min(10, "Invalid")
    .max(12, "Invalid")
    .required("*Required"),
  dob: Yup.string().required("*Required"),
  city: Yup.string().required("*Required"),
  user_role: Yup.string()
    .oneOf(["admin", "student", "faculty"], "invalid user role")
    .required("*Required"),
  // right column
  name: Yup.string()
    .min(2, "*Should be between 2-25 Characters")
    .max(25, "*Should be between 2-25 Characters")
    .required("*Required"),
  email: Yup.string().email().required("*Required"),
  gender: Yup.string()
    .oneOf(["male", "female", "others"], "invalid gender")
    .required("*Required"),
  address: Yup.string().required("*Required"),
  state: Yup.string().required("*Required"),
  checkbox: Yup.boolean().oneOf([true],'You must agree the terms and conditions.')
});
