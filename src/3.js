function getRandomMathProblem() {
  const numbers = [1, 2, 3, 4, 5];
  const operators = ["+", "-", "*", "/"];
  const problem = `${numbers[0]} ${operators[0]} ${numbers[1]} =`;
  return problem;
}
