import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const session = await getSession();

  if (!session) {
    return <a href="/api/auth/login">Login</a>;
  }
  const { user } = session;

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}
