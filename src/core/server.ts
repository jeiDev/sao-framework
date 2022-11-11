import http, { Server as ServerHTTP } from "http"
import { Server as ServerHTTPS } from "https"
import App from "@app"
import { serverConfig } from "@config"
import logger from "@libs/logger.lib"

export default class Server extends App{
    private readonly server: ServerHTTP | ServerHTTPS
    private readonly port: number = serverConfig.port;

    constructor(){
        super();
        this.server = http.createServer(this.app);
    }

    private createServer(){
        this.server.listen(this.port)

        this.server.on("error", e => {
            logger.error("❌ Server error", e)
        })

        this.server.on("listening", () => {
            logger.info(`🚀 Server running @ http://localhost:${this.port}`)
        })
    }

    public run(){
        this.setApp()
        this.createServer()
    }
}