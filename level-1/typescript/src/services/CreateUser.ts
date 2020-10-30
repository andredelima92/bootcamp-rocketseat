interface TechInterface {
  title: string;
  experience: number;
}

interface CreateUserInterface {
  name?: string;
  email: string;
  password: number;
  techs: Array<string | TechInterface>;
  schools: string[];
}

export default function createUser({
  name = "",
  email,
  password,
}: CreateUserInterface) {
  const user = { name, email, password };

  return user;
}
