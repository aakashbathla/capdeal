export const schema = {
  type: "object",
  title: "Edit Team Member Details",
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
};

export const uiSchema = {
  classNames: "form-handler-css",
};
