// Generate a random math problem using JavaScript
function getRandomMathProblem() {
  // Get two random numbers between 1 and 10
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  
  // Generate a random math operator (+, -, x, /)
  let operator = ["+", "-", "x", "/"][Math.floor(Math.random() * 4)];
  
  // Return the problem and answer
  return {
    problem: `What is ${num1} ${operator} ${num2}?`,
    answer: `${num1} ${operator} ${num2}`
  };
}
