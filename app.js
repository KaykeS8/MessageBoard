import express from "express"
import path from 'node:path'
import messageRouter from './routers/messageRouter.js'

const app = express();

const _dirname = import.meta.dirname
app.set("views", path.join(_dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

app.use('/', messageRouter)
app.listen(3000)