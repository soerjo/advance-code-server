import { Request, Response } from "express";

interface IController {
  index(req: Request, res: Response): Response; //menampilkan data kayak listing
  create(req: Request, res: Response): Response; //membuat data
  show(req: Request, res: Response): Response; //menampilkan 1 data doank
  update(req: Request, res: Response): Response; //buat edit data
  delete(req: Request, res: Response): Response; //buat hapus data
}

export default IController;
