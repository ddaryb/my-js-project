const getDate = () => `Hello, World! Time: ${new Date().toLocaleDateString()}`;

// Экспорт функции для тестов
module.exports = { getDate };