import * as Yup from "Yup";

export const userRegSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(6)
    .required("Password is must be at least 6 characters."),
  accountType: Yup.string().default("seeker"),
  contact: Yup.string().required("Contact is required"),
  location: Yup.string().required("Location is required"),
  profileUrl: Yup.string(),
  jobTitle: Yup.string().required("Job title is required"),
  about: Yup.string().required("About is required"),
});
export const loginUserSchema = Yup.object({
  email: Yup.string()
    .email("Must be  valid email.")
    .required("Email is required.")
    .trim()
    .lowercase(),
  password: Yup.string().required("Password is required."),
});
