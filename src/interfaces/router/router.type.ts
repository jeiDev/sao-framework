import { MethodRouterEnum } from "./router.enum"

export type MethodRouterType = typeof MethodRouterEnum[keyof typeof MethodRouterEnum]