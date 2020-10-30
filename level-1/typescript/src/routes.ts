import { Response, Request } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: "andre@teste",
    password: 123456,
    techs: [
      "Node.js",
      "React",
      "Laravel",
      { title: "javascript", experience: 100 },
    ],
    schools: ["Escola1", "Escola2"],
  });

  return res.json({ message: "Hello World" });
}
