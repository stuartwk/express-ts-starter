import request from "supertest";
import express from "express";
import { expect } from "chai";
import { greetings } from "./greet";

describe("greetings handler", () => {
  it("should return a greeting for the provided name", async () => {
    const app = express();
    app.get("/:name", greetings);

    const res = await request(app).get("/John");

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ message: "Hello, John!" });
  });
});
