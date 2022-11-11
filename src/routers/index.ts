
import { RouterI } from '@interfaces/router/router.interface'
import { Router as RouterExpress } from 'express'
import { apiRouter } from './api'
import SetRouter from './setRouter'

export default class RouterServer extends SetRouter{
    public readonly router = RouterExpress()
    private readonly routers: RouterI[] = [
        apiRouter
    ]

    constructor(){
        super()
        this.set()
    }

    private set(){
        this.router.use("/", this.setRouters(this.routers))
    }
}