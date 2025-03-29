const add = (params) => {
  return +params[0] + +params[1];
};

const main = () => {
  console.log("this is main");
  console.log(add(Deno.args));
};

main();

const _a = 5;
