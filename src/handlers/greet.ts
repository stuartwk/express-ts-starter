import { Request, Response } from "express";

export const greetings = async (req: Request, res: Response) => {
  const { name } = req.params;

  return res.json({ message: `Hello, ${name}!` });
};
