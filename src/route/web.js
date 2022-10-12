import express from "express";
import homeController from "../controllers/homeController"

let router = express.Router();

let initWebRoutes = (app) =>{
    router.get("/", homeController.createNewTable)

    
    router.post("/api/users", homeController.createNewUser)
    router.put("/api/users", homeController.updateUserInfo)
    router.delete("/api/users/:id", homeController.deleteUser)


    return app.use("/", router);
}

module.exports = initWebRoutes;