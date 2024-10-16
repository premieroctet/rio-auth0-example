export const GET = (req: Request) => {
  const reqObject = {
    method: req.method,
    url: req.url,
    headers: Object.fromEntries(req.headers),
  };

  return new Response(JSON.stringify(reqObject, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
