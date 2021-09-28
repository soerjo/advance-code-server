import { compare } from "bcrypt";
import { Request, Response } from "express";
import Authentication from "../utils/Authentication";

const db = require("../db/models");

class AuthController {
  regist = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashedPassword: string = await Authentication.PasswordHash(password);
    await db.user.create({ username, password: hashedPassword });
    return res.send("registrasi sukses!");
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    let compare: boolean = false;

    //cari data by username
    const user = await db.user.findOne({ where: { username } });

    //check password
    if (user) {
      compare = await Authentication.PasswordCompare(password, user.password);
    } else {
      return res.send("user not found!");
    }

    //generate token
    if (compare) {
      let token = Authentication.GenerateToken(
        user.id,
        username,
        user.password
      );

      return res.send({ token });
    }

    return res.status(400).send("auth failed");
  };
}

export default new AuthController();
