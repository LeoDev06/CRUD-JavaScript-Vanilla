import { localHostUserModel } from "../mappers/userMaper";

export const getUserById = async(id) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
  const respond = await fetch(url);
  const data = await respond.json();

  return localHostUserModel(data);
}
