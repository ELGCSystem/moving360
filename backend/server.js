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
import apartmentRouter from './src/routes/Estates/apartmentRouter.js';
import phApartmentRouter from './src/routes/Estates/phApartmentRouter.js';
import garageRouter from './src/routes/Estates/garageRouter.js';
import officeRouter from './src/routes/Estates/officeRouter.js';
import shopRouter from './src/routes/Estates/shopRouter.js';
import shedRouter from './src/routes/Estates/shedRouter.js';
import goodwillRouter from './src/routes/Estates/goodwillRouter.js';
import fieldRouter from './src/routes/Estates/fieldRouter.js';
import countryHouseRouter from './src/routes/Estates/countryHouseRouter.js';
import terrainRouter from './src/routes/Estates/terrainRouter.js';
import hotelRouter from './src/routes/Estates/hotelRouter.js';
import plotsNichesVaultsRouter from './src/routes/Estates/plotsNichesVaultsRouter.js';
import nauticalBedsRouter from './src/routes/Estates/nauticalBedsRouter.js';

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
app.use('/api/apartment', apartmentRouter);
app.use('/api/phApartment', phApartmentRouter);
app.use('/api/garage', garageRouter);
app.use('/api/office', officeRouter);
app.use('/api/shop', shopRouter);
app.use('/api/shed', shedRouter);
app.use('/api/goodwill', goodwillRouter);
app.use('/api/field', fieldRouter);
app.use('/api/countryHouse', countryHouseRouter);
app.use('/api/terrain', terrainRouter);
app.use('/api/hotel', hotelRouter);
app.use('/api/plotsNichesVaults', plotsNichesVaultsRouter);
app.use('/api/nauticalBeds', nauticalBedsRouter);
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
