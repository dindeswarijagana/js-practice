const filePromise1 = Deno.readTextFile("./sample.txt");
const filePromise2 = Deno.readTextFile("./sample1.txt");
const filePromise3 = Deno.readTextFile("./sample2.txt");
console.log(filePromise1);
for (let index = 0; index < 10000000; index++);
console.log(filePromise1);

const allPromises = Promise.all([filePromise1, filePromise2, filePromise3]);
console.log(allPromises);

const p1 = new Promise((res, rej) => {
  console.log("this is first instance of promise");
  rej(2);
});

const a = p1
  .then(
    () => "resolved value",
    () => "rejected value"
  )
  .catch(() => "rejected value caught");
