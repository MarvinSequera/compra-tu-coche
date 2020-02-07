require('dotenv').config();
const express = require('express');
const app = express();
require('./config/local.config')(app)
require('./config/mongoose.config')
require('./config/view-engines.config')(app)
require('./config/debug.config')(app)
require('./config/middleware.config')(app)
require('./config/passport.config')(app)

// Routes
app.use('/api', require('./routes/index'))
app.use('/api/auth', require('./routes/auth'))


module.exports = app;
