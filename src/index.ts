import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv } from "dotenv";

//routers
import UserRoutes from "./routers/UserRoutes";
import AuthRoutes from "./routers/AuthRoutes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(compression()); //untuk mengurangi ukuran req
    this.app.use(helmet()); //ngatur headder
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("ini menggunakan typescript bro!");
    });

    this.app.use("/api/v1/users", UserRoutes);
    this.app.use("/api/v1/auth", AuthRoutes);
  }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
  console.log("aplikasi berjalan di port: " + port);
  console.log(process.env.DB_USER);
});
