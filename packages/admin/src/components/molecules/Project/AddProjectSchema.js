export const schema = {
  title: "Add Project",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    description: {
      type: "string",
      title: "Description",
    },
    rera_no: {
      type: "integer",
      title: "Rera Number",
    },
    address_line1: {
      type: "string",
      title: "Address Line 1",
    },
    address_line2: {
      type: "string",
      title: "Address Line 2",
    },
    city: {
      type: "string",
      title: "City",
    },
    state: {
      type: "string",
      title: "State",
    },
    zipcode: {
      type: "integer",
      title: "Zipcode",
    },
    video: {
      type: "string",
      title: "Video",
    },
    broucher: {
      type: "string",
      title: "Broucher",
    },
    status: {
      type: "string",
      title: "Status",
    },
    property_type: {
      type: "string",
      title: "Property Type",
    },
  },
  required: [
    "name",
    "rera_no",
    "description",
    "address_line1",
    "city",
    "state",
    "zipcode",
    "status",
    "property_type",
  ],
};

export const uiSchema = {
  description: {
    "ui:widget": "textarea",
  },
  classNames: "form-handler-css",
};
