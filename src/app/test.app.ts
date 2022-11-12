import App from "@app";

class AppTest extends App{
    constructor(){
        super()
        this.setApp()
    }

    public getApp(){
        return this.app
    }
}

export default new AppTest();