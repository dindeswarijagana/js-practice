const handleConnection = async (conn) => {
  // const reader = await conn.readable.getReader().read();
  // console.log(new TextDecoder().decode(reader.value));

  // const response = "HTTP/1.1 200 OK\r\nContent-type:text/plain\r\n\r\nhelo\r\n";
  // const encode = new TextEncoder().encode(response);
  // conn.write(encode);

  for await (const chunk of conn.readable) {
    console.log(new TextDecoder().decode(chunk));
    const response =
      "HTTP/1.1 200 OK\r\nContent-type:text/plain\r\nContent-Length:4\r\n\r\nhelo\r\n";
    await conn.write(new TextEncoder().encode(response));
  }
};

async function main() {
  const listener = Deno.listen({ port: 8001 });
  for await (const conn of listener) {
    handleConnection(conn);
  }

  // const conn = await listener.next();
}

await main();
