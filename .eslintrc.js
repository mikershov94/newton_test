module.exports =  {

    parser:  '@typescript-eslint/parser',  // Задает парсер ESLint
  
    extends:  [
  
      'plugin:react/recommended',  // Использует рекомендуемые правила из @ eslint-plugin-react
      'plugin:@typescript-eslint/recommended',  // Использует рекомендуемые правила из @typescript-eslint/eslint-plugin
    ],
  
    parserOptions:  {
        ecmaVersion:  2019,  // Позволяет анализировать современные функции ECMAScript
        sourceType:  'module',  // Разрешает использование импорта
        ecmaFeatures:  {
            jsx:  true,  //Разрешает анализ JSX
        },
  
    },
  
    settings:  {
      react:  {
        version:  'detect',  // Указывает eslint-plugin-react автоматически определять версию React для использования
      },
    },
  };