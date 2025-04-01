module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
  testEnvironment: "node",
  collectCoverageFrom: [
    "index.js",         // ������ ���� ���� � ��������
    "src/**/*.js",      // ���� ���� ������ ����� � src/
    "!**/node_modules/**",
    "!**/tests/**"      // ��������� ����� � �������
  ]
};
