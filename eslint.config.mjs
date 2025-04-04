import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: { globals: globals.browser },
},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off", // Disable the rule globally for React 17+
      "react/prop-types": "off", // Disable prop-types validation for TypeScript
      // Add any other custom rules here
    },
  },
  {
    ignores: ["node_modules/", ".git/", "build/"]
  },
];
