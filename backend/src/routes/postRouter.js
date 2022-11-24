import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';
import { generateToken } from '../../utils/utilsAdmin.js';

const postRouter = express.Router();
