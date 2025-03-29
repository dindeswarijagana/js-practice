const file = await Deno.open(
  "../assignments/js-scorecard-dindeswarijagana/data/match_1.js",
  { read: true }
);

for await (const chunk of file.readable) {
  // const text = new TextDecoder().decode(chunk);
  console.log(chunk);
}
