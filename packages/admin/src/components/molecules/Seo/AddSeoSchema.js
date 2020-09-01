export const schema = {
  title: "Add SEO",
  type: "object",
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
        keyword: {
          type: "string",
          title: "Keyword",
        },
        script: {
          type: "string",
          title: "Script",
        },
      },
    },
  },
};

export const uiSchema = {
  classNames: "form-handler-css",
};
