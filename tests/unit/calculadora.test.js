const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado);
  expect(resultado).toBe(4);
});

test("somar 4 + 2 retornar 6", () => {
  const resultado = calculadora.somar("banana", 2);
  console.log(resultado);
  expect(resultado).toBe("banana2");
});
