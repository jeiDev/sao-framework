import { RouterI } from "@interfaces/router/router.interface";
import { hookRouters } from "./hook";

export const apiRouter: RouterI = {
    path: "/api",
    middlewares: [(req, res, next) => {
        console.log("middleware")
        next()
    }],
    routers: [hookRouters, {
        path: "/test",
        method: "post",
        controller: (req, res) => {
            res.json({test: true})
        }
    }]
}

