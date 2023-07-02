const https = require('https');
const express = require('express');
const router = express.Router();

const app = express();
const port = 3000
const host = "localhost"

const auth = require('./middlewares/auth')
const notFoundError = require('./middlewares/404')
//const validationError = require('./middlewares/Validation')

const gitHubRoute = require('./routes/github')
const userRoute = require('./routes/users')
const guestsRoute = require('./routes/guests')

app.use(express.urlencoded({extended: false}));

app.use(notFoundError)
//app.use(validationError)

app.use('/', guestsRoute)
app.use('/', userRoute)
app.use('/', gitHubRoute)

app.listen(port, host, () => {
    console.log(`listening on port ${port}`)
})