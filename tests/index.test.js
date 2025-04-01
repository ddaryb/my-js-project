const { getDate } = require('../index');

describe('getDate', () => {
  it('should return a string with "Hello, World!" and current date', () => {
    const result = getDate();
    expect(result).toContain('Hello, World! Time:');
    expect(result).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/); // Проверка формата даты
  });
});