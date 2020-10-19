/* eslint-disable */
import LayoutGridField from "react-jsonschema-form-layout-grid";
export const schema = {
type: "object",
  properties: {
      name: {
        type: "string",
        title: "Name",
      },
      geo: {
        type: "string",
        title: "Geo Location",
      },
      carpet_area: {
        type: "string",
        title: "Carpet Area",
      },
      prop_type: {
        type: "string",
        title: "Property Type",
      },
      address: {
        type: "string",
        title: "Address",
      },
      city: {
        type: "string",
        title: "City",
      },
      state: {
        type: "string",
        title: "State",
      },
      age: {
        type: "string",
        title: "Age of the Property",
      },
      facing: {
        type: "string",
        title: "Facing",
      },
      price_calc: {
        type: "string",
        title: "Price Calculator",
      },
      desc: {
        type: "string",
        title: "Description",
      },
  },
  required: [
    "contact_number",
    "carpet_area",
    "prop_type",
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
                { "ui:col": { md: 6, children: ["name"] } },
                { "ui:col": { md: 6, children: ["geo"] } },
                { "ui:col": { md: 6, children: ["carpet_area"] } },
                { "ui:col": { md: 6, children: ["prop_type"] } },
                { "ui:col": { md: 6, children: ["address"] } },
                { "ui:col": { md: 6, children: ["city"] } },
                { "ui:col": { md: 6, children: ["state"] } },
                { "ui:col": { md: 6, children: ["age"] } },
                { "ui:col": { md: 6, children: ["facing"] } },
                { "ui:col": { md: 6, children: ["price_calc"] } },
                { "ui:col": { md: 12, children: ["desc"] } },
              ],
            },
          ],
        },
      },
    ],
  },
  desc: {
    "ui:widget": "textarea",
  },
};

