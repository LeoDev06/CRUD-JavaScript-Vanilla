import { UserModelToLocalHost } from "../mappers/UserMapperLocalHost";
import { User } from "../models/User";

/**
 * Funcion para guardar un registro de tipo user
 * @param {User} userLike 
 */

export const saveUser = async(userLike) => {
  const user = new User(userLike);
  if(!user.firstName || !user.lastName){
    throw new Error('Fist and Last name is required');
  }

  let userUpdated;
  const userSave = UserModelToLocalHost(user);

  if(user.id){
    userUpdated = await updateUser(userSave);
  }else{
    createUser(userSave);
  }

  return UserModelToLocalHost(userUpdated);
}

/**
 * Funcion para crear un usuario
 * @param {Like<User>} user 
 */
const createUser = async(user) => {
  const url = `${ import.meta.env.VITE_BASE_URL}/users`;
  const dataUser = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const newUser = await dataUser.json();
  console.log({newUser});
  return newUser;
}

const updateUser = async(user) => {
  const url = `${ import.meta.env.VITE_BASE_URL}/users/${user.id}`;
  const dataUser = await fetch(url, {
    // Patch solo remplazlos valores necesarios
    // El Put remplaza todo el objeto
    method: 'PATCH',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const updatedUser = await dataUser.json();
  return updatedUser;
}