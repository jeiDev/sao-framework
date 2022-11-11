import { RouterI } from "@interfaces/router/router.interface";
import { hookRouters } from "./hook";

export const apiRouter: RouterI = {
    path: "/api",
    routers: [hookRouters]
}

