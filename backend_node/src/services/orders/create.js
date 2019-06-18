const express = require('express');
const router = express.Router();
const db = require('../../../configs/db')

router.get('/order', (req, res) => {
  res.send('display order')
})

router.post('/order', async(req, res) => {
  const { 
    clientId,
    codDriver,
    cod_send,
    date_order,
    observation } = req.body;
});

  const newOrder = {
    clientId,
    codDriver,
    cod_send,
    date_order,
    observation
  };

  await db.query('INSERT INTO ORDERS set ?', [newOrder]);
  res.send('received')


router.get('/', async (req, res => {
  const order = await db.query('SELECT * FROM order');
  res.send('')
}))

module.exports = create;
