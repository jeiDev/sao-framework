import path from "path"
import cors from "cors"
import express from "express"
import Router from "@routers"
import bodyParser from "body-parser"

export default class App{
    private readonly dirname = path.join(__dirname, "../../")
    private readonly router = new Router()
    protected readonly app = express()

    private setMiddleware(){
        this.app.use(express.static(path.join(this.dirname, "public")))

        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())

        this.app.use(cors({
            credentials: true,
            origin: (origin, next) => {
                return next(null, true);
            }
        }))

        this.app.use("/", this.router.router)
    }

    protected setApp(){
        this.setMiddleware()
    }
}