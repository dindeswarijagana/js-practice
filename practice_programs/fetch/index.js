const handler = async (req) => {
  console.log(req.method, req.url);
  const url = new URL(req.url);
  if (url.pathname === "/") {
    return new Response("fetching resource....", {
      headers: {
        "content-type": "text/plain",
      },
    });
  }

  if (url.pathname === "/index.html") {
    const content = await Deno.readFile("./index.html");
    return new Response(content, {
      headers: {
        "content-type": "text/html",
      },
    });
  }

  if (url.pathname === "/fetch" && req.method === "POST") {
    console.log("hiiiiiiiii");
    const content = await Deno.readFile("./index.html");
    // console.log(await req.formData());
    const dat = await req.formData();
    // const name = dat.get("name");

    return new Response(dat, {
      headers: {
        "content-type": "text/html",
      },
    });
  }

  return new Response("Not Found", { status: 404 });
};

Deno.serve({ port: 9001 }, handler);
