import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  let login = false;

  if (!login) {
    return res.send("unauthentication");
  } else {
    next();
  }
};
