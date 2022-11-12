import app from "@app/test.app"
import request from "supertest"


jest.useRealTimers()

describe("/GET /api/test", () => {

    it("returns status code json and status 200 if endpoint passed", async() => {
        const res = await request(app.getApp()).post("/api/test");
        expect(res.statusCode).toEqual(200)
    })

})