import Yup from "Yup";

export const recruiterRegSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(6)
    .required("Password is must be at least 6 characters."),
  contact: Yup.string().required("Contact is required"),
  location: Yup.string().required("Location is required"),
  profileUrl: Yup.string().default(""),
  jobTitle: Yup.string().required("Job title is required"),
  about: Yup.string().required("About is required"),
  accountType: Yup.string().default("recruiter"),
  skills: Yup.string().required("Skills are required"),
  experience: Yup.string().required("Experience is required"),
  education: Yup.string().required("Education is required"),
  certification: Yup.string().required("Certification is required"),
  languages: Yup.string().required("Languages are required"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Must be  valid email.")
    .required("Email is required.")
    .trim()
    .lowercase(),
  password: Yup.string().required("Password is required."),
});
