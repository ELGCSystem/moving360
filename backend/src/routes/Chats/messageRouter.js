import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Message from '../../models/Chats/MessageModel.js';
import { generateToken } from '../../../utils/Chats/utilsConversation.js';

const messageRouter = express.Router();

//Enviar Mensaje
messageRouter.post(
  '/sendMessage',
  expressAsyncHandler(async (req, res) => {
    const message = new Message({
      conversationId: req.body.conversationId,
      sender: req.body.sender,
      text: req.body.text,
    });
    try {
      const createdMessage = await conversation.save();
      res.status(200).json(createdConversation);
    } catch (err) {
      res.status(500).json(err);
    }
  })
);

//Obtener un mensaje

messageRouter.get(
  '/receiveMessage/:conversationId',
  expressAsyncHandler(async (req, res) => {
    try {
      const message = await Message.find({
        conversationId: req.params,
      });
      res.status(200).json(message)
    } catch (err) {
      res.status(500).json(err);
    }
  })
);

export default messageRouter;
