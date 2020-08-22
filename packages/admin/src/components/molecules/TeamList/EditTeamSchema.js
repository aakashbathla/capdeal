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
      type: "string",
    },
    last_name: {
      type: "string",
    },
    role: {
      type: "string",
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
