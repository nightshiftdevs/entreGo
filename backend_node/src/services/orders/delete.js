/**
  * @desc send a success message when user logout
  * @param req the request
  * @param res the response
  * @return sucess message and status
*/

const deleteOrder = async (req, res) => {
    /* const { id } = req.params;
    await db.query('DELETE FROM ORDER WHERE ID = ?' [id]); 

  return res.status(200).json({
      sucess: true,
      order : order[0]
  }); */
  res.json({ 
    id: req.params,
    message: 'Hello' })
};

module.exports = deleteOrder;
