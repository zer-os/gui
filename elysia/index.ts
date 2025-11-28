import { Elysia } from "elysia"

const app = new Elysia()

app.get("/", () => "hello vite")

app.listen({ port: 7360, hostname: "zeros" })

console.log("http://zeros:7360")
