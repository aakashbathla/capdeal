import LayoutGridField from "react-jsonschema-form-layout-grid";
import MediaApiWidget from "../../../utils/MediaApiWidget";
import MultipleMediaPreviewWidget from "../../../utils/MultipleMediaPreviewWidget";
import getList from "../../../utils/getList";
import apis from "../../../constants/apis/services";
export const schema = {
  type: "object",
  title: "Edit Project",
  required: ["developer", "name", "rera_no", "address_line1"],
  properties: {
    developer: {
      type: "integer",
      title: "Developer",
    },
    name: {
      type: "string",
      title: "Name",
      minLength: 3,
    },
    description: {
      type: "string",
      title: "Description",
      minLength: 3,
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
      type: "string",
      title: "Zipcode",
    },
    media_url: {
      type: "string",
      title: "Video Url",
    },
    min_price: {
      type: "number",
      title: "Price Range Min Value",
    },
    max_price: {
      type: "number",
      title: "Price Range Max Value",
    },
    home_page: {
      type: "boolean",
      enum: [true, false],
      title: "Homepage",
    },
    is_feature: {
      type: "boolean",
      enum: [true, false],
      title: "isFeature",
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
          mediaFile: {
            type: "string",
            title: "Media",
          },
        },
        required: ["name", "category", "mediaFile"],
      },
    },
    mediaFile: {
      type: "string",
      title: "Media",
    },
    features: {
      type: "array",
      title: "Features",
      items: {
        type: "object",
        properties: {
          description: {
            type: "string",
            title: "Description",
          },
          mediaFile: {
            type: "string",
            title: "Media",
          },
        },
        required: ["description", "mediaFile"],
      },
    },
  },
  required: [
    "developer",
    "amenities",
    "name",
    "status",
    "property_type",
    "min_price",
    "max_price",
    "features",
  ],
};
export const fields = {
  layout_grid: LayoutGridField,
};

export const uiSchema = {
  "ui:field": "layout_grid",
  "ui:layout_grid": {
    "ui:row": [
      {
        "ui:col": {
          md: 12,
          children: [
            {
              "ui:row": [
                { "ui:col": { md: 6, children: ["developer"] } },
                { "ui:col": { md: 6, children: ["name"] } },
                { "ui:col": { md: 6, children: ["rera_no"] } },
                { "ui:col": { md: 6, children: ["address_line1"] } },
                { "ui:col": { md: 6, children: ["address_line2"] } },
                { "ui:col": { md: 6, children: ["city"] } },
                { "ui:col": { md: 6, children: ["state"] } },
                { "ui:col": { md: 6, children: ["zipcode"] } },
                { "ui:col": { md: 12, children: ["media_url"] } },
                { "ui:col": { md: 3, children: ["price_range_min"] } },
                { "ui:col": { md: 3, children: ["price_range_max"] } },
                { "ui:col": { md: 6, children: ["status"] } },
                { "ui:col": { md: 6, children: ["property_type"] } },
                { "ui:col": { md: 12, children: ["description"] } },
                { "ui:col": { md: 6, children: ["video"] } },
                { "ui:col": { md: 6, children: ["broucher"] } },
                { "ui:col": { md: 6, children: ["mediaFile"] } },
                { "ui:col": { md: 3, children: ["home_page"] } },
                { "ui:col": { md: 3, children: ["is_feature"] } },
                { "ui:col": { md: 12, children: ["floor_plans"] } },
                { "ui:col": { md: 12, children: ["amenities"] } },
                { "ui:col": { md: 12, children: ["features"] } },
              ],
            },
          ],
        },
      },
    ],
  },
  description: {
    "ui:widget": "textarea",
  },
  amenities: {
    items: {
      mediaFile: {
        "ui:widget": MultipleMediaPreviewWidget,
        classNames: "upload-media",
      },
      category: {
        "ui:widget": getList,
        "ui:options": {
          url: apis.amenitiesCategoryChoice,
        },
      },
    },
  },
  floor_plans: {
    items: {
      title: {
        "ui:widget": getList,
        "ui:options": {
          url: apis.floorPlanChoice,
          type: "normal",
        },
      },
    },
  },
  features: {
    items: {
      mediaFile: {
        "ui:widget": MultipleMediaPreviewWidget,
        classNames: "upload-media",
        "ui:options": {
          number: 1,
        },
      },
      description: {
        "ui:widget": "textarea",
      },
    },
  },
  broucher: {
    "ui:widget": MediaApiWidget,
    "ui:options": { accept: ".pdf" },
    classNames: "file-upload",
  },
  mediaFile: {
    "ui:widget": MultipleMediaPreviewWidget,
    classNames: "upload-media",
  },
  video: {
    "ui:widget": MediaApiWidget,
    "ui:options": { accept: "video/*", type: "video" },
    classNames: "file-upload",
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
  classNames: "form-handler-css custom-form",
};
