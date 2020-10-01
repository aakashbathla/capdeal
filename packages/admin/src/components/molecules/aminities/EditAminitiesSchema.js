export const schema = {
  type: "object",
  title: "Edit Aminities",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
  },
  required: ["name"],
};

export const uiSchema = {
  classNames: "form-handler-css",
};
