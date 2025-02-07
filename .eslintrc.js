module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['prettier'], // Prettier 플러그인 활성화
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'prettier/prettier': 'error', // Prettier 오류를 ESLint 오류로 표시
    // '@typescript-eslint/no-unused-vars': 'warn', // 미사용 변수에 대한 경고 표시
    'react/prop-types': 'off', // prop-types 규칙 비활성화 (TypeScript에서는 굳이 필요하지 않음)
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
