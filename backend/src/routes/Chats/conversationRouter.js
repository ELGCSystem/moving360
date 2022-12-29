import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Conversation from '../../models/Chats/conversationModel.js';
import { generateToken } from '../../../utils/Chats/utilsConversation.js';

const conversationRouter = express.Router();

//Generar nueva conversación
conversationRouter.post(
  '/newChat',
  expressAsyncHandler(async (req, res) => {
    const conversation = new Conversation({
      members: [req.body.senderId, req.body.receiverId],
    });
    try {
      const createdConversation = await conversation.save();
      res.status(200).json(createdConversation);
      res.send({
        members: [createdConversation.senderId, createdConversation.receiverId],
        token: generateToken(createdConversation),
      });
    } catch (err) {
      res.status(500).json(err);
    }
  })
);

//Obtener conversación de un usuario

conversationRouter.get('/chat/userId', expressAsyncHandler(async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [ req.params.userId ] },
    })
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err)
  }
}))

export default conversationRouter;