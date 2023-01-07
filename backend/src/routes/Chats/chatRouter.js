import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Chat from '../../models/Chats/chatModel.js';
import { generateToken } from '../../../utils/Chats/utilsChat.js';

const chatRouter = express.Router();

//Generar nueva conversación
chatRouter.post(
  '/new',
  expressAsyncHandler(async (req, res) => {
    const chat = new Chat({
      members: [req.body.senderId, req.body.receiverId],
    });
    try {
      const createdChat = await chat.save();
      res.status(200).send({
        members: [createdChat.senderId, createdChat.receiverId],
        token: generateToken(createdChat),
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })
);

//Obtener conversación de un usuario

chatRouter.get(
  '/get/:userId', 
  expressAsyncHandler(async (req, res) => {
    try {
      const chat = await Chat.find({
        members: { $in: [ req.params.userId ] },
      })
      res.status(200).send(chat);
    } catch (err) {
      res.status(500).send(err)
    }
  })
);

export default chatRouter;