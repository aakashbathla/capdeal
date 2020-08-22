export const schema = {
  type: "object",
  title: "Edit Developer",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    experience: {
      type: "string",
      title: "Experience",
    },
    number_or_projects: {
      type: "integer",
      title: "Number of Projects",
    },
    description: {
      type: "string",
      title: "Description",
    },
    projects: {
      type: "string",
      title: "Projects",
    },
  },
};

export const formData = {
  name: "Aakash Bathla",
  experience: "2 Years",
  number_or_projects: "5",
  description:
    "Et et sed duo consetetur amet sit sit clita dolor. Erat inviduntnonumy erat accusam ut lorem ut lorem rebum",
  projects: "Orchid Petals, Orchid Garden",
};

export const uiSchema = {
  description: {
    "ui:widget": "textarea",
  },
  classNames: "form-handler-css",
};
