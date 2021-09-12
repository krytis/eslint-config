# `@krytis/eslint-config`

![License](https://img.shields.io/badge/License-MIT-blue.svg)
[![npm version](https://img.shields.io/npm/v/@krytis/eslint-config.svg)](https://www.npmjs.com/package/@krytis/eslint-config)&nbsp;

ESLint configuration used by [`@krytis`](https://github.com/krytis) projects
based off of [Pokémon Showdown's][0] and [Google’s][1] style guidelines.

```json
{
  "extends": "@krytis"
}
```

**NOTE:** [Due to how ESLint plugins work](https://github.com/eslint/eslint/issues/3458) you must
depend on **all** of the peer dependencies for this package (even if you don't use Typescript or
Jest etc).

## License

This package is distributed under the terms of the [MIT License](LICENSE).

  [0]: https://github.com/smogon/pokemon-showdown/blob/master/CONTRIBUTING.md#code-standards
  [1]: https://google.github.io/styleguide/jsguide.html
