import bcrypt from "bcryptjs";

export const verifyPassword = async (password, hashedPassword) => {
  console.log("password", password, hashedPassword);
  const isMatch = await bcrypt.compare(password, hashedPassword);

  return isMatch;
};

export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};
