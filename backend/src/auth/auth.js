import express from 'express';
import passport from 'passport';

const authRouter = express.Router();

authRouter.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'Inicio de Sesión Exitoso!',
      user: req.user,
      // cookies: req.cookies
    });
  }
});

authRouter.get('/login/failed', (req, res) => {
  res.status(401).json({
    error: false,
    message: 'Inicio de Sesión Fallido',
  });
});

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile'] })
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);

authRouter.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['profile'] })
);

authRouter.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);

export default authRouter;
