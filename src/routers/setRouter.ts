import { Router } from "express"
import { RouterI } from "@interfaces/router/router.interface"
import logger from "@libs/logger.lib";

export default class SetRouter {
    private recurrentSetRouter(routers: RouterI[], _router: Router){
        let router = routers.shift()
        if(!router) return
        
        let _routers = router.routers || []
        let _middlewares = router.middlewares || []

        if(router.path && router.method && router.controller){
            _router[router.method](`${router.path}`, _middlewares, router.controller)
            this.recurrentSetRouter(routers, _router)
        }

        if(_routers.length){
            let nextRouter = Router()
            _router.use(router.path, _middlewares, nextRouter)
            this.recurrentSetRouter(_routers, nextRouter)
        }

        this.recurrentSetRouter(routers, _router)
    }

    protected setRouters(routers: RouterI[]){
        let router = Router()
        this.recurrentSetRouter(routers, router)
        return router;
    }
}