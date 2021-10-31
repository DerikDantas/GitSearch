import { apiUsers } from "../services/apiUsers";

export async function GetUser(user: string) {
  return await apiUsers.get(`${user}`);
}

export async function GetRepositorys(user: string) {
  return await apiUsers.get(`${user}/repos`);
}
