import Yup from "Yup";

export const recruiterRegSchema = Yup.object({
  recruiterName: Yup.string().required("Recruiter name is required."),
  companyEmail: Yup.string()
    .email("Invalid email address.")
    .required("Company email is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required."),
  companyName: Yup.string().required("Company name is required."),
  CompanyContact: Yup.string(),
  location: Yup.string().required("Location is required."),
});

export const loginValidationSchema = Yup.object({
  companyEmail: Yup.string()
    .email("Must be  valid email.")
    .required("Email is required.")
    .trim()
    .lowercase(),
  password: Yup.string().required("Password is required."),
});
