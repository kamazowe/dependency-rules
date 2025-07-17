// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const sheriff = require('@softarc/eslint-plugin-sheriff');
const {rules} = require("@softarc/eslint-plugin-sheriff");

module.exports = tseslint.config({
        files: ["src/**/*.ts"],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            sheriff.configs.all
        ],
        rules: {
            "no-console": "warn",
        }
    }
);
