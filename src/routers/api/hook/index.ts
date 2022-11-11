import { RouterI } from "@interfaces/router/router.interface";
import { bcoinHookRouters } from "./bcoin";

export const hookRouters: RouterI = {
    path: "/hooks",
    routers: [
        {
            path: "/bcoin",
            routers: bcoinHookRouters
        },
        {
            path: "/ethereum",
            routers: bcoinHookRouters
        }
    ]
}

