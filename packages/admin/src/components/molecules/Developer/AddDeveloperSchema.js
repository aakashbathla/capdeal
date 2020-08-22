export const schema = {
  title: "Add Developer",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    experience: {
      type: "string",
      title: "Experience",
    },
    number_of_projects: {
      type: "integer",
      title: "Number of Projects",
    },
    description: {
      type: "string",
      title: "Description",
    },
    major_projects: {
      type: "array",
      title: "Projects",
      classNames: "zmdi zmdi-plus",
      items: {
        type: "string",
      },
    },
  },
  required: [
    "name",
    "experience",
    "number_of_projects",
    "description",
    "major_projects",
  ],
};

export const uiSchema = {
  description: {
    "ui:widget": "textarea",
  },
  classNames: "form-handler-css",
};
