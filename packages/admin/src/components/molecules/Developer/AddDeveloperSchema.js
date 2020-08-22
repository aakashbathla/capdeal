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
  required: [
    "name",
    "experience",
    "number_or_projects",
    "description",
    "projects",
  ],
};

export const uiSchema = {
  description: {
    "ui:widget": "textarea",
  },
  classNames: "form-handler-css",
};
