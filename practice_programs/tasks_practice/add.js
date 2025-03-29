const main = (args) => {
  const numbers = args.map(Number);
  const sum = numbers.reduce((a, num) => num + a, 0);
  console.log(sum);
};

main(Deno.args);
