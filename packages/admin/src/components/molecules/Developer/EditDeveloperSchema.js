import MultipleMediaPreviewWidget from "../../../utils/MultipleMediaPreviewWidget";
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
    description: {
      type: "string",
      title: "Description",
    },
    major_projects: {
      type: "array",
      title: "Projects",
      classNames: "zmdi zmdi-plus",
      default: [],
      items: {
        type: "string",
      },
    },
    imageFile: {
      type: "string",
      title: "Media",
    },
  },
  required: [
    "name",
    "experience",
    "description",
    "major_projects",
    "imageFile",
  ],
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
