const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("should return ok status", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(res.body.message).toBe("Hello from CSP451");
  });
});

describe("GET /health", () => {
  it("should return healthy status with uptime", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("healthy");
    expect(typeof res.body.uptime).toBe("number");
  });
});
