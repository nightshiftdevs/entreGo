const create = async (req, res) => {
  await res.json({
    data: req.body,
    msg: 'coords!'
  });
};

module.exports = create;
