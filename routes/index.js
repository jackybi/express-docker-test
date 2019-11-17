var express = require('express');
var router = express.Router();
const UserTasks  = require('../models/test')
const utils = require('../utils/utils');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', async (req, res) => {
  try {
    let newTask = new UserTasks({test_key1: "test"})
    let insertRes = await newTask.save()
    utils.successRequest(res, task)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

module.exports = router;
