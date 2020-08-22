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
    description: {
      type: "string",
      title: "Description",
    },
    major_projects: {
      type: "array",
      title: "Projects",
      className: "zmdi zmdi-back",
      items: {
        type: "string",
      },
    },
  },
  required: ["name", "experience", "description", "major_projects"],
};

export const uiSchema = {
  description: {
    "ui:widget": "textarea",
  },
  classNames: "form-handler-css",
};
