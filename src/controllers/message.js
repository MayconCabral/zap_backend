const service = require('../service/message');

const sendMsg = async (req, res) => {
  const request = req.body;
  const response = await service.sendMsg(request);
  return res.status(201).json(response);
};

const getMsg = async (req, res) => {
  const request = req.body;
  const response = await service.getMsg(request);
  return res.status(200).json(response);
};

module.exports = {
  sendMsg,
  getMsg,
}
