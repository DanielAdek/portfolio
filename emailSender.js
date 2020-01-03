const router = require('express').Router();
const { Sender } = require('./mail');

router.post('/email/send', async (req, res) => {
  try {
    await Sender({ from: req.body.email, message: req.body.message, name: req.body.name });
    return res.status(200).json({ message: 'Thank you for your patronage!', status: 'Your Email has been sent. Daniel will reply you soon!' });
  } catch (error) {
    return res.status(500).json('Oops! something went wrong');
  }
});

module.exports = router;