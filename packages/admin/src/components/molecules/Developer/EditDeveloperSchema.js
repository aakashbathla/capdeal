export const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    experience: {
      type: "string",
    },
    number_or_projects: {
      type: "integer",
    },
    description: {
      type: "string",
    },
    projects: {
      type: "string",
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
};
