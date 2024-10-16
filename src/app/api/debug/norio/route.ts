import { NextResponse } from "next/server";

export const GET = (req: Request) => {
  const reqObject = {
    method: req.method,
    url: req.url,
    headers: Object.fromEntries(req.headers),
  };

  const response = NextResponse.json(reqObject, {
    status: 200,
  });

  response.cookies.set("cookie-1", "true");
  response.cookies.set("cookie-2", "true");

  return response;
};
