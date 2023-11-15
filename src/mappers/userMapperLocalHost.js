import { User } from "../models/User";

/**
 * 
 * @param {User} user 
 */

export const UserModelToLocalHost = (user) => {

  const {
    avatar,
    balance,
    firstName,
    gender,
    id,
    isActive,
    lastName
  } = user;

  return{
    avatar,
    balance,
    first_name: firstName,
    gender,
    id,
    isActive,
    'last-name': lastName
  }
}
