import { NextFunction, Request, Response } from "express"
import { MethodRouterType } from "./router.type"

export interface ControllerRouterI{
    (req: Request, res: Response, next: NextFunction): unknown
}

export interface SubRouterI{
    method?: MethodRouterType
    path: string
    middlewares?: ControllerRouterI[]
    controller?: ControllerRouterI
    routers?: SubRouterI[]
}

export interface RouterI extends SubRouterI{
    routers?: SubRouterI[]
}