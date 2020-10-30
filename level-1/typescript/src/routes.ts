import { Response, Request } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser("Andre", "andre@teste.com", 123456);

  return res.json({ message: "Hello World" });
}
