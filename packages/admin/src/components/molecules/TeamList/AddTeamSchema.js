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
    password: {
      type: "string",
      title: "Passowrd",
    },
    first_name: {
      type: "string",
      title: "First Name",
    },
    last_name: {
      type: "string",
      title: "Last Name",
    },
    role: {
      type: "integer",
      title: "User Role",
      enum: [1, 2],
      enumNames: ["Managers", "Workers"],
    },
  },
  required: [
    "phone_number",
    "email",
    "password",
    "first_name",
    "last_name",
    "role",
  ],
};
export const uiSchema = {
  classNames: "form-handler-css",
};
