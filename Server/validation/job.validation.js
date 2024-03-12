import Yup from "Yup";
import {
  jobTitle,
  EducationLevel,
  country,
  Salary,
  Experiences,
  Skills,
  JobTypeOption,
} from "../constants/general.constant.js";

export const JobValidationSchema = Yup.object({
  companyName: Yup.string().required("Company name is required"),
  companyLocation: Yup.string().required("Company location is required"),
  companyPhoneNumber: Yup.string().required("Company phone number is required"),
  jobTitle: Yup.string()
    .oneOf(jobTitle, "Job title is required")
    .required("Job title is required"),
  education: Yup.string()
    .oneOf(EducationLevel)
    .required("Education is required"),
  country: Yup.string().oneOf(country).required("Country is required"),
  jobType: Yup.string().oneOf(JobTypeOption).required("Job type is required"),
  salary: Yup.string().oneOf(Salary).required("Salary is required"),
  vacancies: Yup.number()
    .positive("Vacancy must be a positive number.")
    .integer("Vacancy must be an integer value.")
    .required("Vacancy is required"),
  experiences: Yup.string()
    .oneOf(Experiences)
    .required("Experience is required"),
  skills: Yup.string().oneOf(Skills).required("Skills is required"),
  jobDescription: Yup.string()
    .required("Description is required")
    .trim()
    .max(1000, "Description must be at max 1000 characters."),
});

export const paginationSchema = Yup.object({
  page: Yup.number("Page must be a number.")
    .min(1, "Page must be at least 1.")
    .integer("Page must be an integer value.")
    .default(1),

  limit: Yup.number()
    .min(1, "Limit must be at least 1.")
    .integer("Limit must be an integer value.")
    .default(1),
  searchText: Yup.string().nullable().trim().default(null),
  jobTitle: Yup.string().oneOf(jobTitle).nullable().trim().default(null),
});

export let seekerPaginationSchema = Yup.object({
  page: Yup.number().default(1).min(1),
  limit: Yup.number().default(10).min(1),
  searchText: Yup.string().nullable().trim().default(null),
  jobTitle: Yup.string().oneOf(jobTitle).nullable().trim().default(null),
});
