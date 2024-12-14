import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],

    // Define language options, including globals
    languageOptions: {
      globals: {
        ...globals.browser, // For browser-specific globals
        process: "readonly", // Add additional global variables if needed
      },
    },

    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-unused-expressions": "error",
      "no-console": "warn",
      "no-undef": "error",
    },
  },
  {
    ignores: ["node_modules/*"], // Adjust ignored directories
  },

  // Include recommended configs
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // Add Prettier recommended plugin
  eslintPluginPrettierRecommended,
];
