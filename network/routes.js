import AuthController from "./auth/controller";

const authController = new AuthController();
export default function (app) {
    app.get('/', authController.test)
}