export const schema = {
  title: "Add Aminities",
  type: "object",
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
