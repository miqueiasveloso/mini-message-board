const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await Message.find({});
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', async function(req, res, next) {
  const {user, text} = req.body;
  const newMessage = new Message({text: text, user: user, added: new Date()});
  await newMessage.save();
  res.redirect('/');
});

module.exports = router;
