# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules, plus some extras and formatted files ready to go.

Plugins installed:

- [@rocketseat/eslint-config](https://github.com/Rocketseat/eslint-config-rocketseat)
- [eslint-plugin-import-helpers](https://github.com/willhoney7/eslint-plugin-import-helpers)

## ESLint configuration

```js
{
  // rocketseat/eslint-config
  "extends": "@rocketseat/eslint-config/react",

  // eslint-plugin-import-helpers
  "plugins": ["eslint-plugin-import-helpers"],
  "rules": {
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          "/^react/",
          "module",
          "/^@shared/",
          ["parent", "sibling", "index"]
        ],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ]
  }
}
```
