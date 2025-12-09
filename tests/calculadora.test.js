const calculadora = require("../models/calculadora.js");

test("Deve retornar 5 para a soma de 2 e 3", () => {
  const resultado = calculadora.somar(2, 3);
  console.log("o valor é " + resultado);
  expect(resultado).toBe(5);
});

test("Deve retornar 105 para a soma de 5 e 100", () => {
  const resultado = calculadora.somar(5, 100);
  console.log("o valor é " + resultado);
  expect(resultado).toBe(105);
});

test("Deve retornar erro para a soma de banana e 100", () => {
  const resultado = calculadora.somar("banana", 100);
  console.log("o valor é " + resultado);
  expect(resultado).toBe("erro");
});
