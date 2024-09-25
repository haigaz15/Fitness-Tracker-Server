const pluginJs = require("@eslint/js");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const prettierConfig = require("eslint-config-prettier");
const prettierPlugin = require("eslint-plugin-prettier");
const globals = require("globals"); // Assuming you need globals, make sure to require it if necessary

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browsers,
      },
    },
    rules: {
      "prefer-const": "warn", // Add your rule here
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: true },
      ],
      "prettier/prettier": "warn",
    },
  },
  pluginJs.configs.recommended,
  tsPlugin.configs.recommended,
  prettierConfig,
  prettierPlugin.configs.recommended,
];
