export const deleteUserById = async(user) => {
  const url = `${ import.meta.env.VITE_BASE_URL}/users/${user.id}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });

  const deleteResolve = await response.json();
  console.log({deleteResolve})
  return true;
}