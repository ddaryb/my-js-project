module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
  testEnvironment: "node",
  collectCoverageFrom: [
    "index.js",         // Добавь этот файл в покрытие
    "src/**/*.js",      // Если есть другие файлы в src/
    "!**/node_modules/**",
    "!**/tests/**"      // Исключаем папку с тестами
  ]
};
