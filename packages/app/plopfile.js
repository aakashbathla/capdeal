module.exports = (plop) => {
  plop.setGenerator("component-atoms", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        // Plop will create directories for us if they do not exist
        // so it's okay to add files in nested locations.
        path: "src/components/atoms/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/Component/Component.js.hbs",
      },
      {
        type: "add",
        path:
          "src/components/atoms/{{pascalCase name}}/{{pascalCase name}}.scss",
        templateFile: "plop-templates/Component/Component.scss.hbs",
      },
      {
        type: "add",
        path: "src/components/atoms/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/Component/index.js.hbs",
      },
    ],
  });
  plop.setGenerator("component-molecules", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        // Plop will create directories for us if they do not exist
        // so it's okay to add files in nested locations.
        path:
          "src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/Component/Component.js.hbs",
      },
      {
        type: "add",
        path:
          "src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.scss",
        templateFile: "plop-templates/Component/Component.scss.hbs",
      },
      {
        type: "add",
        path: "src/components/molecules/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/Component/index.js.hbs",
      },
    ],
  });
  plop.setGenerator("component-organisms", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        // Plop will create directories for us if they do not exist
        // so it's okay to add files in nested locations.
        path:
          "src/containers/organisms/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/Container/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/containers/organisms/{{pascalCase name}}/actions.js",
        templateFile: "plop-templates/Container/actions.js.hbs",
      },
      {
        type: "add",
        path: "src/containers/organisms/{{pascalCase name}}/reducer.js",
        templateFile: "plop-templates/Container/reducer.js.hbs",
      },
      {
        type: "add",
        path: "src/containers/organisms/{{pascalCase name}}/sagas.js",
        templateFile: "plop-templates/Container/sagas.js.hbs",
      },
      {
        type: "add",
        path: "src/containers/organisms/{{pascalCase name}}/constants.js",
        templateFile: "plop-templates/Container/constants.js.hbs",
      },
    ],
  });
};
