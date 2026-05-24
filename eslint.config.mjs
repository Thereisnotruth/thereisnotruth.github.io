import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: [
      ".cache/**",
      "public/**",
      "node_modules/**",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
    },
    rules: {
      semi: ["error", "never"],
    },
  },
)
