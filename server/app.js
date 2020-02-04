require('dotenv').config();
const express = require('express');
const app = express();
require('./config/local.config')(app)
require('./config/mongoose.config')
require('./config/view-engines.config')(app)
require('./config/debug.config')(app)
require('./config/middleware.config')(app)

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))


module.exports = app;
