export const schema = {
  type: "object",
  title: "Add Team Member",
  properties: {
    phone_number: {
      type: "string",
      title: "Phone Number",
    },
    email: {
      type: "string",
      title: "Email",
    },
    first_name: {
      type: "integer",
      title: "First Name",
    },
    last_name: {
      type: "string",
      title: "Last Name",
    },
    role: {
      type: "string",
      title: "User Role",
      enum: ["Admin", "Cutomer", "Manager"],
    },
  },
  required: ["phone_number", "email", "first_name", "last_name", "role"],
};
export const uiSchema = {
  classNames: "form-handler-css",
};
