"use server";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function postUserData(data) {
  const { name, email, password, isstudent, isteacher, isadmin } = data;

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    // Return a message or handle the existing user case as needed
    return { message: "User already exists", user: existingUser };
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user in the database with the hashed password
  const result = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
      isstudent: isstudent ?? true, // Default to true if not provided
      isteacher: isteacher ?? false, // Default to false if not provided
      isadmin: isadmin ?? false, // Default to false if not provided
    },
  });

  return result;
}
