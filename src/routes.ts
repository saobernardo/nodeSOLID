import { Router } from "express";
import { createUserController } from "./useCases/CreateUSer";

const routes = Router()

routes.post('/users', (request, response) => {
    return createUserController.handle(request, response)
})

export {routes}