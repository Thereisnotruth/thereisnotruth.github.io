module.exports = {
  root: true,
  ignorePatterns: [
    ".cache/",
    "public/",
    "node_modules/",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "never"],
  },
}
