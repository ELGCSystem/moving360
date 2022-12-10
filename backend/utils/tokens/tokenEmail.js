import mongoose, { Schema, SchemaType } from 'mongoose';

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user',
    unique: true,
  },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), expires: 3600 }, //Duración: 1 hora
});

const Token = mongoose.model('tokens', tokenSchema);
export default Token;
