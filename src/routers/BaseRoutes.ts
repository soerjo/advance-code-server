import { Router, Request, Response } from "express";
import IRoute from "./RouteInterface";

abstract class BaseRoutes implements IRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}

export default BaseRoutes;
