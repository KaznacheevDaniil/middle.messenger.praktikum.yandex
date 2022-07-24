module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ['airbnb-base'],
  parserOptions: {
    "ecmaVersion": 2017
  },
  rules: {
    'max-len': ["error", { "ignoreStrings": true, "code": 140 }],
    'no-underscore-dangle': ["error", { "enforceInClassFields": true, "allow": ["_createResources", "_block", "_props", "_blockClass",  "_addEvents", "__instance", "_rootQuery", "_onRoute", "_currentRoute", "_addAttributes", "_createDocumentElement","_element", "_meta", "_getChildren", "_makePropsProxy", "_registerEvents", "_componentDidMount", "_render", "_componentDidUpdate", "_id", "_removeEvents", "_pathname"  ] }],
    '@typescript-eslint/no-unused-vars': 0,
    'no-constructor-return': 0,
    'no-unused-vars': 0,
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      ts: "never",
      jsx: 'never',
    }],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
