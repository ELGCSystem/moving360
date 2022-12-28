import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import cookieSession from 'cookie-session';
import adminRouter from './src/routes/adminRouter.js';
import buyerRouter from './src/routes/buyerRouter.js';
import ownerRouter from './src/routes/ownerRouter.js';
import assistantEstate from './src/routes/assistantEstateRouter.js'
import traditionalRouter from './src/routes/realEstates/traditionalRouter.js';
import decentralizedRouter from './src/routes/realEstates/decentralizedFranchiseRouter.js';
import centralizedRouter from './src/routes/realEstates/centralizedFranchiseRouter.js';
import houseRouter from './src/routes/Estates/houseRouter.js';
import conversationRouter from './src/routes/Chats/conversationRouter.js';
import messageRouter from './src/routes/Chats/messageRouter.js';
import dateRouter from './src/routes/dateApplicationRouter.js';
import './passport.js';
import authRouter from './src/auth/auth.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DB is Connected!');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/admin', adminRouter);
app.use('/api/buyer', buyerRouter);
app.use('/api/owner', ownerRouter);
app.use('/api/assistantEstate', assistantEstate)
app.use('/api/traditional', traditionalRouter);
app.use('/api/decentralized', decentralizedRouter);
app.use('/api/centralized', centralizedRouter);
app.use('/api/house', houseRouter);
app.use('/api/conversation', conversationRouter);
app.use('/api/message', messageRouter);
app.use('/api/date', dateRouter)

app.use(
  cookieSession({
    name: 'session',
    keys: ['elgcsystem'],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
