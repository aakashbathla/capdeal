export const schema = {
  type: "object",
  title: "Add Team Member",
  properties: {
    phone_number: {
      type: "string",
    },
    email: {
      type: "string",
    },
    first_name: {
      type: "integer",
    },
    last_name: {
      type: "string",
    },
    role: {
      type: "string",
      enum: ["Admin", "Cutomer", "Manager"],
    },
  },
  required: ["phone_number", "email", "first_name", "last_name", "role"],
};
export const uiSchema = {
  classNames: "form-handler-css",
};
