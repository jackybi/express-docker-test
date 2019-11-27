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

router.get('/getUser/:userId', async (req, res) => {
  try {
    let userinfosql = knex.table("users").where("id",req.params.userId).toString()
    let user = await query(userinfosql)
    utils.successRequest(res, user[0])
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

router.get('/getUserPosts/:userId', async (req, res) => {
  try {
    let postssql = knex.table("posts").where("user_id",req.params.userId).toString()
    let posts = await query(postssql)
    utils.successRequest(res, posts)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

router.get('/getPostComments/:postId', async (req, res) => {
  try {
    let commentssql = knex.table("comments").where("post_id",req.params.postId).toString()
    let comments = await query(commentssql)
    utils.successRequest(res, comments)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

router.get('/addComment/:userId/:postId/:commentId/:content', async (req, res) => {
  try {
    let commentssql = knex.table("comments").insert({
      user_id:req.params.userId,comment_id:req.params.commentId, post_id:req.params.postId, content: req.params.content}).toString()
    let comments = await query(commentssql)
    utils.successRequest(res)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

module.exports = router;
