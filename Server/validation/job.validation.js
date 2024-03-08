import Yup from "Yup";

export const jobRegSchema = Yup.object({
  jobTitle: Yup.string().required("Job title is required."),
  companyName: Yup.string().required("Company name is required."),
  location: Yup.string().required("Location is required."),
  jobType: Yup.string().required("Job type is required."),
  salary: Yup.string().required("Salary is required."),
});
