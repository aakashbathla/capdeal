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
};
