const details = [
  { name: "Alice", phno: "9876543210", age: 20, address: "123 Elm Street, Springfield" },
  { name: "Bob", phno: "8765432109", age: 35, address: "456 Oak Avenue, Metropolis" },
  { name: "Charlie", phno: "7654321098", age: 19, address: "789 Pine Road, Gotham City" },
  { name: "Diana", phno: "6543210987", age: 21, address: "101 Maple Lane" },
  { name: "Eve", phno: "5432109876", age: 28, address: "202 Birch Boulevard, Star City" }
];

const filteredDetails = function () {
  return details.filter(function (person) {
    return person.age > 20;
  })
}

const detialsIncludingGuardian = [
  { name: "Alice", phno: "9876543210", age: 20, address: "123 Elm Street, Springfield", guardianName: "suresh", guardianPhno: "5556667771" },
  { name: "Bob", phno: "8765432109", age: 35, address: "456 Oak Avenue, Metropolis", guardianName: "harsha", guardianPhno: "9996667771" },
  { name: "Charlie", phno: "7654321098", age: 19, address: "789 Pine Road, Gotham City", guardianName: "naidu", guardianPhno: "8889997771" },
  {
    name: "Diana", phno: "6543210987", age: 21, address: "101 Maple Lane",
    guardianName: "laxmi", guardianPhno: "4446667771"
  },
  { name: "Eve", phno: "5432109876", age: 28, address: "202 Birch Boulevard, Star City", guardianName: "sai", guardianPhno: "2226667771" }
];

const detailsOfPersonsYoungerThan30 = function () {
  return detialsIncludingGuardian.filter()
}

console.log(filteredDetails());