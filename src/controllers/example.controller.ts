import { Request, Response } from "express";

export const getMessage = (_: Request, res: Response) => {
  res.json({ message: `Hello 'World'}!` });
}