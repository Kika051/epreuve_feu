const evaluateExpression = (expression) => {
  const result = eval(expression);
  console.log(result);
};

const expression = process.argv[2];

if (!expression) {
  console.log("Veuillez fournir une expression arithmétique.");
  process.exit(1);
}

evaluateExpression(expression);
