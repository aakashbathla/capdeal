import getList from "../../../utils/getList";
import apis from "../../../constants/apis/services";
export const schema = {
  type: "object",
  title: "Add Team Member",
  properties: {
    phone_number: {
      type: "string",
      title: "Phone Number",
      pattern: "^([+][9][1])([6-9]{1})([0-9]{9})$",
    },
    email: {
      type: "string",
      title: "Email",
      pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
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
  phone_number: {
    "ui:placeholder": "+919999999999",
  },
  password: {
    "ui:placeholder":
      "one digit, one lowercase and one uppercase alphabet and, minimum length 6",
    "ui:widget": "password",
  },
  role: {
    "ui:widget": getList,
    "ui:options": {
      url: apis.userRole,
    },
  },
};
