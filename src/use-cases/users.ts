import { getUsers } from "@/data-access/users";

// Business Layer
// This is where you process data before querying your database of choice

export const getUsersUseCase = async () => {
  const users = await getUsers();

  return users;
};
