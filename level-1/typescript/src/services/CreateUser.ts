export default function createUser(name = "", email: string, password: number) {
  const user = { name, email, password };

  return user;
}
