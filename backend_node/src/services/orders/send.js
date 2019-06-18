const express = require('express');
const router = express.Router();
const db = require('../../../configs/db')

router.get('/send', (req, res) => {
  res.send('display send')
});

router.post('/send', async(req, res) => {
  const { 
    description,
    dir_star_x,
    dir_star_y,
    dir_arrival_x,
    dir_arrival_y,
    rate,
    volumen
  } = req.body;

  const newSend = {
    description,
    dir_star_x,
    dir_star_y,
    dir_arrival_x,
    dir_arrival_y,
    rate,
    volumen
  };

  await db.query('INSERT INTO ORDERS set ?', [newSend]);
  res.send('received')

});
router.get('/', async (req, res) => {
  const send = await db.query('SELECT * FROM SEND');
  res.send('')
});

router.get('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM ORDER WHERE ID = ?' [id]);
  res.render('order', { order: order[0]});
});

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const order = await db.query('SELECT * FROM order WHERE id =?' [id]);
  res.render('order', { order: order[0]});
});

module.exports = create;
