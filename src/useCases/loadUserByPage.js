import { localHostUserModel } from "../mappers/userMaper";
import { User } from "../models/User";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUserByPage = async(page = 1) => {

  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const respond = await fetch(url);
  const data = await respond.json();

  
  const users = data.map(localHostUserModel);

  /* 
    ! Lo anterior es lo mismo que esto:
    const users = data.map((user) => {
    return localHostUserModel(user);
  })
  */
  
  return users;
}
