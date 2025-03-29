const listener = Deno.listen({ port: 8000 });
let connectionId = 0;

for await (const connection of listener) {
  handleConnection(connection, connectionId++);
}

async function handleConnection(connection, clientId) {
  try {
    while (true) {
      const buf = new Uint8Array(1000);
      const bytesCount = await connection.read(buf);
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();
      const msg = decoder.decode(buf.slice(0, bytesCount));
      if (msg.trim() === "exit") {
        await connection.write(encoder.encode("Bye\n"));
        connection.close();
        clearInterval(intervalId);
        return;
      }
      console.log(`Client Id: ${clientId})`, msg);

      await connection.write(
        encoder.encode(`Server > Client ${clientId}: ${msg}`)
      );
    }
  } catch {
    console.log("error handled");
  }
}

// const listener = Deno.listen({ port: 8000 });

// for await (const connection of listener) {
//   const buf = new Uint8Array(100);
//   const bytesCount = await connection.read(buf);
//   const decoder = new TextDecoder();
//   const encoder = new TextEncoder();
//   const msg = decoder.decode(buf.slice(0, bytesCount));

//   await connection.write(encoder.encode(`Server > Client: ${msg}`));

//   console.log(msg);
// }

// function handleConnection(connection, clientId) {
//   const intervalId = setInterval(async () => {

//     if (msg.trim() === "exit") {
//       await connection.write(encoder.encode("Bye\n"));
//       connection.close();
//       clearInterval(intervalId);
//       return;
//     }

// }
