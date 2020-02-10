const express = require("express");
const passport = require('passport');
const authRouter = express.Router();
const User = require("../models/User.model");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

authRouter.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      console.log("A")
      res.status(500).json({ message: 'Something went wrong authenticating user' })
      return
    }
    if (!theUser) {
      console.log("B")
      res.status(401).json(failureDetails)
      return
    }
    req.login(theUser, (err) => {
      if (err) {
        console.log("C")
        res.status(500).json({ message: 'Session save went bad.' })
        return
      }
      console.log("D")
      res.status(200).json(theUser)
      console.log(theUser)
    })
  })(req, res, next)
})

authRouter.post("/signup", (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email
  const phone = req.body.phone
  if (username === "" || password === "") {
    res.status(400).json({ message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email,
      phone
    });

    newUser.save(err => {
      if (err) {
        res.status(400).json({ message: "Saving user to database went wrong." })
        return
      }
      req.login(newUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Login after signup went bad.' })
          return
        }
        res.status(200).json(newUser)
      })
    })
  });
});

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout Success!' });
});

authRouter.get("/loggedin", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user)
    return
  }
  res.status(403).json({ message: 'Unauthorized' })
})

module.exports = authRouter;
