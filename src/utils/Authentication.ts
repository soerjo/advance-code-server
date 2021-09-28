import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

interface IGenerate {
  id: number;
  username: string;
  password: string;
}

class Authentication {
  public static PasswordHash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };

  public static PasswordCompare = async (
    password: string,
    hashpasw: string
  ): Promise<boolean> => {
    return await bcrypt.compare(password, hashpasw);
  };

  public static GenerateToken = (
    id: number,
    username: string,
    password: string
  ) => {
    const secretKey = process.env.JWT_SECRET_KEY || "rahasia";

    const token: string = jwt.sign({ id, username, password }, secretKey);
    return token;
  };
}

export default Authentication;
