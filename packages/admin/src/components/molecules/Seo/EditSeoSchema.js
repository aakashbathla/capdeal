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
        keyword: {
          type: "string",
          title: "Keyword",
        },
        script: {
          type: "string",
          title: "Script",
        },
      },
      required: ["title", "description", "keyword", "script"],
    },
  },
  required: ["page"],
};

export const uiSchema = {
  classNames: "form-handler-css",
};
