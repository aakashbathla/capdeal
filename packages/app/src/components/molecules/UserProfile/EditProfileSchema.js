/* eslint-disable */
import LayoutGridField from "react-jsonschema-form-layout-grid";
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
      },
      alternate_number: {
        type: "string",
        title: "Alternate No.",
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
  },
  required: [
    "contact_number",
    "email",
    "name",
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
                { "ui:col": { md: 6, children: ["email"] } },
                { "ui:col": { md: 6, children: ["contact_number"] } },
                { "ui:col": { md: 6, children: ["alternate_number"] } },
                { "ui:col": { md: 6, children: ["address"] } },
                { "ui:col": { md: 6, children: ["city"] } },
                { "ui:col": { md: 6, children: ["state"] } },
              ],
            },
          ],
        },
      },
    ],
  }
};

