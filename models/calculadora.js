function somar(a, b) {
  if (typeof a !== "string") {
    return "erro";
  }
  return a + b;
}

exports.somar = somar;
