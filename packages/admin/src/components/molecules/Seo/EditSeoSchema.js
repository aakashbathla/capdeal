export const schema = {
  type: "object",
  title: "Edit SEO",
  properties: {
    page: {
      type: "string",
      title: "Page",
    },
    meta_data: {
      type: "object",
      title: "Meta Data",
      properties: {
        title: {
          type: "string",
          title: "Title",
        },
        description: {
          type: "string",
          title: "Description",
        },
        ogurl: {
          type: "string",
          title: "OG:Url",
        },
      },
    },
  },
  required: ["name"],
};

export const uiSchema = {
  classNames: "form-handler-css",
};
