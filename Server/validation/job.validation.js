import Yup from "Yup";

export const JobListValidationSchema = Yup.object({
  jobTitle: Yup.string().required("Job title is required."),
  companyName: Yup.string().required("Company name is required."),
  location: Yup.string().required("Location is required."),
  jobType: Yup.string().required("Job type is required."),
  salary: Yup.string().required("Salary is required."),
});

export const getJobListValidationSchema = Yup.object({
  page: Yup.number("Page must be a number.")
    .min(1, "Page must be at least 1.")
    .integer("Page must be an integer value.")
    .default(1),

  limit: Yup.number()
    .min(1, "Limit must be at least 1.")
    .integer("Limit must be an integer value.")
    .default(1),
});
