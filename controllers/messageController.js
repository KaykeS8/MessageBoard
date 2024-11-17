import { messages } from "../db.js";

export async function getAllMessages(req, res) {
    res.render('index', {title: 'Message Board', messages})
}

export async function getMessage(req, res) {
    const message = messages.find((message) => message.user == req.params.messageUser)
    res.render("show", {message})
}

export async function newMessage(req, res) { res.render('form') }
export async function createMessage(req, res) {
    const {text, user} = req.body
    messages.push({text, user, added: new Date()})
    res.redirect('/')
}