import { Router } from "express"
import { RouterI } from "@interfaces/router/router.interface"
import logger from "@libs/logger.lib";

export default class SetRouter {
    private recurrentSetRouter(routers: RouterI[], _router: Router){
        let router = routers.shift()
        if(!router) return

        if(!router.routers?.length && router.method && router.controller){
            _router[router.method](`${router.path}`, router.middlewares || [], router.controller)
            this.recurrentSetRouter(routers, _router)
            return
        }else if((!router.routers?.length && (!router.method || !router.controller)) || !router.routers?.length){
            logger.error("invalid router", router.path, router.method)
            this.recurrentSetRouter(routers, _router)
            return
        }
        
        let nextRouter = Router()
        _router.use(`${router.path}`, nextRouter)
        this.recurrentSetRouter(router.routers, nextRouter)
    }

    protected setRouters(routers: RouterI[]){
        let router = Router()
        this.recurrentSetRouter(routers, router)
        return router;
    }
}