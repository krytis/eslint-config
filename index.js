module.exports = {
  "extends": "@pkmn",
  "rules": {
    "@typescript-eslint/indent": ["error", 4],
    "@typescript-eslint/unbound-method": ["error", {"ignoreStatic": true}],
    "@typescript-eslint/quotes": ["error", "single", {"allowTemplateLiterals": true}],
    "max-len": ["error", {"code": 120, "ignoreUrls": true}],
  },
  "overrides": [{
    "files": ["**/tests/**.ts", "**/*.test.ts"],
    "plugins": ["jest"],
    "rules": {
      "@typescript-eslint/unbound-method": "off",
      "jest/unbound-method": "error",
    },
  }],
};
