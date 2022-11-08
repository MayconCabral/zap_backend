const service = require('../service/user');

const create = async (req, res) => {  
    const request = req.body;
    const response = await service.create(request);
    return res.status(201).json(response);  
};

const login = async (req, res) => {  
    const request = req.body;
    const response = await service.login(request);
    return res.status(200).json(response);
};

module.exports = {
  create,
  login,
}
