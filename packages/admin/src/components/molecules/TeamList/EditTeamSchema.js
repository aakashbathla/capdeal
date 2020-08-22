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
    first_name: {
      type: "string",
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
};

export const formData = {
  phone_number: "+919205456797",
  email: "aakash.bathla7@gmail.com",
  first_name: "Aakash",
  last_name: "Bathla",
  role: "Manager",
};

export const uiSchema = {
  classNames: "form-handler-css",
};
