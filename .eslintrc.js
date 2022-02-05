module.exports = {
	  env: {
	    browser: true,
	    es2021: true,
	  },
	  extends: [
	    "airbnb",
	    "airbnb/hooks",
	    "plugin:import/errors",
	    "plugin:import/warnings",
	    "plugin:prettier/recommended",
	    "plugin:react/recommended",
	    "plugin:react/jsx-runtime",
	    "eslint:recommended",
	    "plugin:@typescript-eslint/recommended",
	    "prettier",
	  ],
	  parser: "@typescript-eslint/parser",
	  parserOptions: {
	    ecmaFeatures: {
	      jsx: true,
	    },
	    ecmaVersion: "latest",
	    sourceType: "module",
	  },
	  plugins: ["react", "@typescript-eslint"],
	  rules: {
	    // indent: ["error", 2],
	    "linebreak-style": ["error", "unix"],
	    quotes: ["error", "single"],
	    semi: ["error", "always"],
	    "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
	    "import/extensions": ["error", "never", { ignorePackage: false }],
	    // import "./test" 를 사용하지 못함
	    "import/no-unresolved": [0],
	    // export {default} 를 사용 하지 못 하게 함
	    "no-restricted-exports": [0],
	    // jsx파일은 tsx 파일 이어야 함
	    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
	  },
	};
