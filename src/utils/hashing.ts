import bcrypt from 'bcryptjs';

//Hashes passwords before inserting them into the database
export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 12);
};

//Verifies and decrypts the password that the user provided, if it matches it continues the login process
export const verifyPassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};