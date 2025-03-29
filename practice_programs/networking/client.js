const connection = await Deno.connect({ port: 8000 });
// const buf = new Uint8Array(1024);
// console.log(buf);
const encoder = new TextEncoder();
// const data = await connection.read("hello");
await connection.write(encoder.encode("hello"));
