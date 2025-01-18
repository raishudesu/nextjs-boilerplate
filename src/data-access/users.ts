import prisma from "../../prisma/prisma";

// Persistence Layer
// This is where your app queries your database of choice

export const getUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};
