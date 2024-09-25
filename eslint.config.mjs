export default [
   {
     files: ['**/*.{js,mjs,cjs,ts}'],
     languageOptions: {
       parser: tsParser,
       globals: globals.browser,
     },
     rules: {
       '@typescript-eslint/no-unused-vars': [
         'warn',
         { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
       ],
       'prettier/prettier': 'warn',
     },
     extends: [
       'eslint:recommended',
       'plugin:@typescript-eslint/recommended',
       'prettier' // This disables ESLint rules that conflict with Prettier
     ]
   },
   pluginJs.configs.recommended,
   tseslint.configs.recommended,
   prettierPlugin.configs.recommended,
 ];
 