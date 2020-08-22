export const schema = {
  type: "object",
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
