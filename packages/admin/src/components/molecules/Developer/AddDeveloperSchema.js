import MultipleMediaPreviewWidget from "../../../utils/MultipleMediaPreviewWidget";
export const schema = {
  title: "Add Developer",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    experience: {
      type: "integer",
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
    imageFile: {
      type: "string",
      title: "Media",
    },
  },
  required: ["name", "experience", "description", "major_projects"],
};

export const uiSchema = {
  description: {
    "ui:widget": "textarea",
  },
  imageFile: {
    "ui:widget": MultipleMediaPreviewWidget,
    "ui:options": {
      number: 1,
    },
  },
  classNames: "form-handler-css",
};
