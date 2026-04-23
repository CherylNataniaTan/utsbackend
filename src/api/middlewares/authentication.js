const passport = require('passport');
const passportJWT = require('passport-jwt');

const Users = require('../../api/models/users-schema');

passport.use(
  'user',
  new passportJWT.Strategy(
    {
<<<<<<< HEAD
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderWithScheme('jwt'),
      secretOrKey: process.env.JWT_SECRET || 'RANDOM_STRING',
=======
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'RANDOM_STRING',
>>>>>>> 50f25fa583fe26fd06cfcc90083ee2e09abd7fa7
    },
    async (payload, done) => {
      const user = await Users.findOne({ email: payload.email });

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    }
  )
);

module.exports = passport.authenticate('user', { session: false });