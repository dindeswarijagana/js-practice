const allGreetings = [];

// const serveSuccessGreet = () => {
//   console.log(allGreetings);
//   const { greeter, greeting } = { ...allGreetings.at(-1) };

//   return new Response("success", {
//     headers: {
//       "content-type": "text/plain",
//     },
//   });
// };

// const serveGreetingMsg = async (request) => {
//   const data = await request.formData();
//   const greeter = data.get("greeter");
//   const greeting = data.get("greeting");

//   allGreetings.push({ greeter, greeting });

//   return new Response(`<h1>${greeter} said ${greeting}<h1>`, {
//     status: 303,
//     headers: {
//       // "content-type": "text/html",
//       location: "successGreet",
//     },
//   });
// };

const serveSuccessGreet = async (request) => {
  const data = await request.formData();
  const greeter = data.get("greeter");
  const greeting = data.get("greeting");
  // allGreetings.push({  data.get("greeter"), greeting });
  // const { greeter, greeting } = { ...allGreetings.at(-1) };

  return new Response(`<h1>${greeter} said ${greeting}<h1>`, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const serveGreeting = (file) => {
  return new Response(file, {
    status: 303,
    headers: { "content-type": "text/html" },
    location: "successGreet",
  });
};

const handler = async (request) => {
  const url = new URL(request.url);
  const file = await Deno.readFile("index.html");

  if (url.pathname === "/greeting") {
    return serveGreeting(file);
  }

  if (url.pathname === "/successGreet" && request.method === "POST") {
    return serveSuccessGreet(request);
  }

  // // if (url.pathname === "/secretGreet" && request.method === "POST") {
  // //   return serveGreetingMsg(request);
  // // }

  // // if (url.pathname === "/successGreet") {
  // //   return serveSuccessGreet(file);
  // }
  return new Response("Not Found", { status: 404 });
};

Deno.serve({ port: 9000 }, handler);
