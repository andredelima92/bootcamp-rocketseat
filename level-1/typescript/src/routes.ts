import { Response, Request } from "express";

export function helloWorld(req: Request, res: Response) {
  return res.json({ message: "Hello World" });
}
