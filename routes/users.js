const express = require('express');
const router = express.Router();
const servicesUsers = require('../services/servicesUsers');

router.get('/', async (req,res)=>{
  const getAllUsers = await servicesUsers.getAllUsers(req,res);
  res.json(getAllUsers)
});

module.exports = router;