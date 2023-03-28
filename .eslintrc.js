module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:nuxt/recommended",
        "eslint:recommended",
        'plugin:vue/vue3-recommended',
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": 'vue-eslint-parser',
    "parserOptions": {
        "parser": '@typescript-eslint/parser',
    },
    "plugins": [
        "vue",
        "@typescript-eslint",
        "nuxt"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-undef": [
            "off"
        ],
        "vue/multi-word-component-names": [
            "off"
        ]
    }
}
