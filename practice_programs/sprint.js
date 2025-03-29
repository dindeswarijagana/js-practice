const put = function (location) {
  const num = code[location + 1];
  const resultLoc = code[location + 2];
  code[resultLoc] = num;

  return location + 3;
};

const copy = function (location) {
  const numLoc = code[location + 1];
  const resultLoc = code[location + 2];
  code[resultLoc] = code[numLoc];

  return location + 3;
};

const jumpIfLessThan = function (location) {
  const num1Loc = code[location + 1];
  const num2Loc = code[location + 2];

  if (code[num1Loc] > code[num2Loc]) {
    return location + 4;
  }
  return code[location + 3];
};

const jumpIfEqual = function (location) {
  const num1Loc = code[location + 1];
  const num2Loc = code[location + 2];

  if (code[num1Loc] !== code[num2Loc]) {
    return location + 4;
  }
  return code[location + 3];
};

const sub = function (location) {
  const num1Loc = code[location + 1];
  const num2Loc = code[location + 2];
  const resultLoc = code[location + 3];

  code[resultLoc] = code[num1Loc] - code[num2Loc];
  return location + 4;
};

const add = function (location) {
  const num1Loc = code[location + 1];
  const num2Loc = code[location + 2];
  const resultLoc = code[location + 3];

  code[resultLoc] = code[num1Loc] + code[num2Loc];
  return location + 4;
};

const jump = function (location) {
  return code[location + 1];
};

const executeSprint = function (instructions, instruction, location) {
  while (instruction !== 9) {
    if (!(instruction in instructions)) {
      return "Invalid Instruction";
    }

    location = instructions[instruction](location);
    instruction = code[location];
  }
  return code;
};

const main = function () {
  const instructions = {
    3: jump,
    1: add,
    2: sub,
    4: jumpIfEqual,
    5: jumpIfLessThan,
    7: copy,
    0: put,
  };

  return executeSprint(instructions, code[0], 0);
};

const code = prompt("enter your code").split(" ").map(Number);

console.log(main());

// 3 5 1 3 0 3 13 0 0 1 1 0 0 7 2 4 4 3 11 54 4 9 3 53 4 8 2 38 1 7 4 7 1 8 10 8 3 24 1 9 10 9 7 7 4 7 11 8 7 11 7 3 20 9 7 10 4 3 53
