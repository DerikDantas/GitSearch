import { apiUsers } from "../services/apiUsers";

export async function GetUser(user: string) {
  return await apiUsers.get(`${user}`);
}
