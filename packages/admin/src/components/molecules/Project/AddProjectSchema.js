import MediaApiWidget from "../../../utils/MediaApiWidget";
import MultipleMediaApiWidget from "../../../utils/MultipleMediaApiWidget";
import getList from "../../../utils/getList";
import apis from "../../../constants/apis/services";
export const schema = {
  title: "Add Project",
  type: "object",
  properties: {
    developer: {
      type: "integer",
      title: "Developer",
    },
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
      type: "integer",
      format: "data-url",
      title: "Video",
    },
    broucher: {
      type: "integer",
      format: "data-url",
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
    media: {
      type: "string",
      title: "Media",
    },
    floor_plans: {
      type: "array",
      title: "Floor Plans",
      items: {
        type: "object",
        required: ["title"],
        properties: {
          title: {
            type: "string",
            title: "Title",
          },
          inventory: {
            type: "integer",
            title: "Inventory",
          },
          saleable_area: {
            type: "string",
            title: "Saleable Area",
          },
          pricing: {
            title: "Pricing",
            type: "string",
          },
        },
      },
    },
    amenities: {
      type: "array",
      title: "Amenities",
      items: {
        type: "object",
        required: ["name"],
        properties: {
          name: {
            type: "string",
            title: "Name",
          },
          category: {
            type: "integer",
            title: "Category",
          },
          media: {
            type: "string",
            title: "Media",
          },
        },
      },
    },
  },
};

export const uiSchema = {
  description: {
    "ui:widget": "textarea",
  },
  amenities: {
    items: {
      media: {
        "ui:widget": MultipleMediaApiWidget,
      },
      category: {
        "ui:widget": getList,
        "ui:options": {
          url: apis.amenitiesCategoryChoice,
        },
      },
    },
  },
  broucher: {
    "ui:widget": MediaApiWidget,
    "ui:options": { accept: ".pdf" },
  },
  media: {
    "ui:widget": MultipleMediaApiWidget,
  },
  video: {
    "ui:widget": MediaApiWidget,
    "ui:options": { accept: "video/*" },
  },
  developer: {
    "ui:widget": getList,
    "ui:options": {
      url: apis.developerListChoice,
    },
  },
  property_type: {
    "ui:widget": getList,
    "ui:options": {
      url: apis.projectTypeChoice,
      type: "normal",
    },
  },
  status: {
    "ui:widget": getList,
    "ui:options": {
      url: apis.projectStatusChoice,
      type: "normal",
    },
  },
  classNames: "form-handler-css",
};
