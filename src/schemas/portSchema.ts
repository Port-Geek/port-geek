import * as yup from "yup";

export const schemaMaxDate = () => {
  const date = new Date();
  const dateArray = date.toLocaleDateString().split("/");
  const atualDate = `${+dateArray[2] - 18}/${dateArray[1]}/${dateArray[0]}`;
  return atualDate;
};

export const schemaPortModal = yup.object({
  name: yup.string().required("Name is required"),
  age: yup.number(),
  birthDate: yup
    .date()
    .nullable()
    .max(schemaMaxDate(), "Must be over 18 years old")
    .required("Birth date is required")
    .typeError("Birth date is required"),
  aboutYou: yup.string().required("Description about you is required"),
  city: yup
    .string()
    .required("City is required")
    .matches(
      /([-]{1}[A-Z]{2})|([-]{1}[\s]+[A-Z]{2})/g,
      "The format is City-STATE"
    ),
  country: yup.string().required("Country is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  experience: yup.string().required("Experience is required"),
  gender: yup.string().required("Gender is required"),
  github_url: yup
    .string()
    .url("Enter a valid GitHub profile URL")
    .required("GitHub profile URL is required"),
  linkedin_url: yup
    .string()
    .url("Enter a valid Linkedin profile URL")
    .required("Linkedin URL is required"),
  projectDeploy_url: yup
    .string()
    .url("Enter a valid project deploy URL")
    .required("Project deploy URL is required"),
  projectImage_url: yup
    .string()
    .url("Enter a valid profile image URL")
    .required("Project image URL is required"),
  projectRepository_url: yup
    .string()
    .url("Enter a valid project repository URL")
    .required("Project repository URL is required"),
  project_description: yup.string().required("Project description is required"),
  project_title: yup.string().required("Project title is required"),
  skills: yup.string().required("Skills is required"),
  street: yup
    .string()
    .required("Street is required")
    .matches(/[\d]+/g, "Must contain the address number")
    .matches(
      /([\d](,)[a-zA-Z]|[\d][\s]+[a-zA-Z])+|([\d](,)[\s]+[a-zA-Z]|[\d][\s]+[a-zA-Z])+|([\d][\s]+(,)[\s]+[a-zA-Z]|[\d][\s]+[a-zA-Z])/g,
      "Must contain the address district"
    ),
  telephone: yup
    .string()
    .required("Telephone contact is required")
    .matches(/([\d]{2})[\s][9][\d]{8}/g, "The format should be: DDD 9XXXXXXXX"),
  userImage_url: yup
    .string()
    .url("Enter a valid project image URL")
    .required("Project image URL is required"),
  training: yup.string().required("Formation is required"),
  zipCode: yup.string().required("ZipCode is required"),
  selected_layout: yup.string(),
});
