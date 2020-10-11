export const schema = {
type: "object",
  properties: {
      name: {
        type: "string",
        title: "Name",
      },
      email: {
        type: "string",
        title: "Email Id",
        pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
      },
      contact_number: {
        type: "string",
        title: "Contact No.",
        pattern: "^([+][9][1])([6-9]{1})([0-9]{9})$",
      },
      city: {
        type: "string",
        title: "City",
      },
      enable_update_through_whats_app: {
        type: "boolean",
        enum: [true, false],
        title: "Enable updates through WhatsApp",
      },
      schedule_meeting_with_sales_expert: {
        type: "boolean",
        enum: [true, false],
        title: "Schedule meeting with Sale Expert",
      },
  },
  required: [
    "contact_number",
    "email",
    "name",
  ],
};
export const uiSchema = {
  phone_number: {
      "ui:placeholder": "+919999999999",
  },
};
