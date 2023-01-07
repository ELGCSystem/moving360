import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Message from '../../models/Chats/MessageModel.js';
import { generateToken } from '../../../utils/Chats/utilsMessage.js';

const messageRouter = express.Router();

//Enviar Mensaje
messageRouter.post(
  '/new',
  expressAsyncHandler(async (req, res) => {
    const message = new Message({
      chatId: req.body.chatId,
      sender: req.body.sender,
      text: req.body.text,
    });
    try {
      const createdMessage = await message.save();
      res.status(200).send({
        chatId: createdMessage.chatId,
        sender: createdMessage.sender,
        text: createdMessage.text,
        token: generateToken(createdMessage),
      });
    } catch (err) {
      res.status(500).json(err);
    }
  })
);

//Obtener un mensaje

messageRouter.get(
  '/get/:chatId',
  expressAsyncHandler(async (req, res) => {
    try {
      const message = await Message.find({
        chatId: req.params.chatId,
      });
      res.status(200).send(message)
    } catch (err) {
      res.status(500).send(err);
    }
  })
);

export default messageRouter;
