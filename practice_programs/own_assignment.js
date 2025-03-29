const employeeDetails = [
  { name: "alice", salary: 50000, score: 8 },
  { name: "charlie", salary: 40000, score: 5 },
  { name: "bob", salary: 60000, score: 4 },
  { name: "david", salary: 30000, score: 9 },
  { name: "eve", salary: 35000, score: 5 },
];

const getIncreasedSalaries = function (person) {
  if (person.score > 7 && person.score < 11) {
    person.salary = Math.ceil(person.salary * 1.15);
  }

  if (person.score <= 4) {
    person.salary = Math.ceil(person.salary * 0.9);
  }

  return person;
};

const updateSalaries = function (employeeDetails) {
  return employeeDetails.map(getIncreasedSalaries);
};

console.log(updateSalaries(employeeDetails));
