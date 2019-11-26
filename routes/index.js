var express = require('express');
var router = express.Router();
const UserTasks  = require('../models/test')
const utils = require('../utils/utils');
const { query,knex} = require('../async_db')
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

router.get('/test1/:userId', async (req, res) => {
  try {
    let userinfosql = knex.table("users").where("id",req.params.userId).toString()
    let user = await query(userinfosql)
    utils.successRequest(res, user)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

router.get('/test2/:postId', async (req, res) => {
  try {
    let postsql = knex.table("posts").where("id",req.params.postId).toString()
    let post = await query(postsql)
    utils.successRequest(res, post)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

router.get('/test3/:postId', async (req, res) => {
  try {
    let commentssql = knex.table("comments").where("post_id",req.params.postId).toString()
    let comments = await query(commentssql)
    utils.successRequest(res, comments)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

module.exports = router;
