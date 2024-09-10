import { getServerSession } from "next-auth/next";
import { NEXT_AUTH } from "../lib/auth";  

export default async function getUserRole(req, res) {
  try {
    const session = await getServerSession(req, res, NEXT_AUTH);

    if (!session || !session.user) {
      return null;
    }

    const user = session.user;

    if (user.isadmin) {
      return "admin";
    } else if (user.isteacher) {
      return "teacher";
    } else if (user.isstudent) {
      return "student";
    }

    return null;
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
}