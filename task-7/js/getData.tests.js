/**
 * Aктуальное значение указывается первым аргументом,
 * а ожидаемое — вторым (кроме функции ok(),
 * в которой проверяется первый аргумент).
 * Последним аргументом может быть строка с пояснением,
 * что именно проверяется утверждением.
 *
 * ok() — ожидает истинность первого аргумента
 * equal() / notEqual() — для сравнения используется оператор ==
 * deepEqual() / notDeepEqual() — для сравнения используется оператор ===
 * strictEqual() / notStrictEqual() — для сравнения используется оператор (===
 * throws() — ожидает, что будет сгенерирована исключительная ситуация.
 *
 * test()
 * @arg1 string
 * @arg2 annone function whith testcode.
 *
 */

module('getData tests', {
  setup: function () {
    this.testObject = {
      'one': 1,
      'two': 2,
      'three': 3
    };
  }
});

test('getObjFromLocalStore().', function (assert) {
  if (null == localStorage.key(0)) {
    localStorage.setItem('testObject', JSON.stringify(this.testObject));
  }
  var actualObject = getData.getObjFromLocalStore();

  assert.ok(actualObject instanceof Object, 'Method return Object')
});