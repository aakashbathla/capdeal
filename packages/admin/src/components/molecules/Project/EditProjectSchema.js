export const schema = {
  type: "object",
  title: "Edit Project",
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
};

export const formData = {
  name: "4BHK Rohini, New Delhi",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit Aliquam gravida magna et fringilla convallis. Pellentesque habitant morb",
  rera_no: "CR3124242",
  address_line1: "",
  address_line2: "",
  city: "New Delhi",
  state: "New Delhi",
  zipcode: "110092",
  status: "Ready to move",
  property_type: "Commercial"
};

export const uiSchema = {
  description: {
    "ui:widget": "textarea",
  },
  classNames: "form-handler-css",
};
