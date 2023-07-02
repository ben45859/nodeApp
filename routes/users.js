const express = require('express');
const router = express.Router();
const usersValidator = require('../controllers/Users/usersValidator');
const joiValidator = require('../middlewares/joi');

const welcomeUser = async(req, res) => {
    res.status(200).send('welcome to the user dashboard');
}

const addSymbol = async(req, res) => {
    res.status(200).send('adding symbol');
}
router.get('/', welcomeUser);

router.post('/addSymbol', joiValidator(usersValidator), addSymbol);

module.exports = router;
