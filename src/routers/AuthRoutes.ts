import BaseRoutes from "./BaseRoutes";
import validate from "../middlewares/AuthVlidator";

//Controllers
import AuthController from "../controllers/AuthController";

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/register", validate, AuthController.regist);
    this.router.post("/login", validate, AuthController.login);
  }
}

export default new UserRoutes().router;
