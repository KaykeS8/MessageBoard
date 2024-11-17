import { Router } from "express";
import {createMessage, getAllMessages, newMessage, getMessage} from "../controllers/messageController.js"

const messageRouter = Router();

messageRouter.get('/', getAllMessages)
messageRouter.get('/messages/:messageUser', getMessage)
messageRouter.get('/new', newMessage)
messageRouter.post('/new', createMessage)

export default messageRouter;