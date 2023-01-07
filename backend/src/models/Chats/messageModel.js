import mongoose, { Schema } from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    chatId: { type: String },
    sender: { type: String },
    text: { type: String },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('messages', messageSchema);
export default Message;