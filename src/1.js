const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const mathProblems = [];
for (let i = 0; i < 5; i++) {
  const numberA = getRandomNumber();
  const numberB = getRandomNumber();
  const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
  mathProblems.push({
    problem: `${numberA} ${operator} ${numberB}`,
    answer: eval(`${numberA}${operator}${numberB}`),
  });
}

console.log(mathProblems);