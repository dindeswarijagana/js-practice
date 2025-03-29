const scriptServe = () => {
  const file = Deno.readFileSync("./script.js");

  return new Response(file, {
    headers: {
      "content-type": "application/javascript",
    },
  });
};

const redirectServe = () => {
  return new Response("redirecting", {
    status: 302,
    headers: {
      location: "https://en.wikipedia.org",
    },
  });
};

const styleServe = async () => {
  const body = await Deno.readTextFile("./style.css");

  return new Response(body, {
    headers: {
      "content-type": "text/css",
    },
  });
};

const stepServe = async () => {
  const body = await Deno.readTextFile("./step.html");

  return new Response(body, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const handleGreet = () =>
  new Response("hello", {
    headers: {
      "content-type": "text/plain",
    },
  });

const handler = (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/greet") {
    return handleGreet();
  }

  if (url.pathname === "/step.html") {
    return stepServe();
  }

  if (url.pathname === "/style.css") {
    return styleServe();
  }

  if (url.pathname === "/redirect") {
    return redirectServe();
  }

  if (url.pathname === "/script.js") {
    return scriptServe();
  }
  return new Response("Not Found", { status: 404 });
};

Deno.serve({ port: 9000 }, handler);
