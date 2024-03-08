import Yup from "Yup";

export const jobRegSchema = Yup.object({
  Title: Yup.string().required("jobTitle is required"),
  company: Yup.string().required("Company is required"),
  location: Yup.string().required("Location is required"),
  description: Yup.string().required("Description is required"),
  jobType: Yup.string().required("Job type is required"),
  salary: Yup.string().required("Salary is required"),
});
