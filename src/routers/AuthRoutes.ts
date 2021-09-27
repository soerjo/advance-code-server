import BaseRoutes from "./BaseRoutes";

//Controllers
import AuthController from "../controllers/AuthController";

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/register", AuthController.create);
    this.router.post("/login", AuthController.create);
  }
}

export default new UserRoutes().router;
