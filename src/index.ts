import { Hono } from "hono"

const app = new Hono()
  .get("/", (c) => {
    console.log("ninja...")
    return c.text("Hello Hono!")
  })
  .get("/", (c) => {
    console.log("log...")
    return c.json({ ok: true })
  })

export default app
