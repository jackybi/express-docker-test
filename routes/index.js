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
    let postssql = knex.table("posts").where("user_id",req.params.userId).limit(20).toString()
    let posts = await query(postssql)
    utils.successRequest(res, posts)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

router.get('/getPostComments/:postId', async (req, res) => {
  try {
    let commentssql = knex.table("comments").where("post_id",req.params.postId).limit(20).toString()
    let comments = await query(commentssql)
    utils.successRequest(res, comments)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

router.get('/addComment/:userId/:postId', async (req, res) => {
  try {
    let randomStrings = ["B'quis' b'id' b'et' b'a' b'at' b'a'.","B'urna' b'id' b'a' b'a' b'a' b'at' b'mattis' b'a'.",
      "B'nisi' b'ut' b'a' b'fermentum' b'consectetuer' b'eget'.","B'nibh' b'et' b'a' b'a' b'a' b'a'.",
      "B'quam' b've' b'a' b'a' b'ad' b'cursus' b'a' b'mauris' b'augue' b'a' b'a' b'a' b'a' b'ad' b'a' b'nisi' b'a' b'mus' b'malesuada'.",
      "B'erat' b'in' b'a' b'dolor'.","B'nibh' b've'.","B'cras' b'ut' b'egestas' b'enim' b'a' b'a' b'auctor' b'ad' b'primis' b'cursus' b'euismod' b'a' b'sodales' b'mi' b'urna'.",
      "B'amet' b'ut'.","B'nunc' b've'.","B'cras' b'ad' b'a' b'ut' b'hac' b'ac' b'a' b'ut' b'netus' b'at' b'a' b'mi'.","B'cras' b'mi'.","B'orci' b'ad' b'a' b'a' b'id' b'mus' b'sem' b've'.",
      "B'cras' b'eu' b'a' b'eu' b'penatibus' b'id' b'a' b'aptent' b'a' b'a'.","B'diam' b'mi' b'a' b'nec' b'in' b'a' b'magna'.",
      "B'amet' b'ac' b've' b'eni' b'semper' b'velit' b'mi' b'a' b'etiam' b'id' b'in'.","B'diam' b'at' b'et' b'id' b'mi'.",
      "B'elit' b'ut' b'a' b'etiam' b'ut' b'a' b'id' b'mollis' b'a' b'a' b'a' b've'.","B'eget' b'et' b'lacinia' b'sociosqu' b'non' b'a' b'orci' b'a' b'turpis' b'sociis'.",
      "B'pede' b've' b'a'.","B'enim' b'et' b'a' b'a' b'vulputate' b'vel' b'a' b'metus' b'ad' b'at' b'sit' b'a'.","B'quis' b've'.","B'arcu' b'ut' b'a' b'a' b'sem' b'mauris'.",
      "B'pede' b'in' b'a' b'a' b'sodales' b'hac'.","B'amet' b've' b'et' b'eros' b'a' b'a'.","B'nunc' b'eu' b'a' b'magnis' b'hac' b'dui' b'mi' b'a' b'a' b'a' b'posuere' b'non' b'a'.",
      "B'quam' b'eu' b'a' b'eni' b'a'.","B'amet' b'ad' b'a' b'mauris' b'sit' b'in'.","B'erat' b'ad' b'a' b'a' b'tristique' b'eget' b'in' b'a' b'a'.","B'erat' b'in' b'conubia'.",
      "B'elit' b'eu'.","B'cras' b'id' b'eu' b'a' b'ac' b'a' b'justo' b'aliquam'.","B'urna' b'ac' b'eu'.","B'elit' b'at' b'a' b'eni' b'potenti' b'tristique' b'quis' b'id' b've'.",
      "B'nunc' b'ac' b'mi' b'dui'.","B'erat' b'ad' b'a' b'a' b'a' b'aenean' b'a'.","B'orci' b'at' b'in' b'sem' b'convallis'."]
    let commentssql = knex.table("posts").insert({
      user_id:req.params.userId,comment_id:0, post_id:req.params.postId, content: randomStrings[Math.floor(Math.random()*randomStrings.length)]}).toString()
    let comment = await query(commentssql)
    utils.successRequest(res,comment.insertId)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

router.get('/addPost/:userId', async (req, res) => {
  try {
    let randomStrings = ["B'quis' b'id' b'et' b'a' b'at' b'a'.","B'urna' b'id' b'a' b'a' b'a' b'at' b'mattis' b'a'.",
      "B'nisi' b'ut' b'a' b'fermentum' b'consectetuer' b'eget'.","B'nibh' b'et' b'a' b'a' b'a' b'a'.",
      "B'quam' b've' b'a' b'a' b'ad' b'cursus' b'a' b'mauris' b'augue' b'a' b'a' b'a' b'a' b'ad' b'a' b'nisi' b'a' b'mus' b'malesuada'.",
      "B'erat' b'in' b'a' b'dolor'.","B'nibh' b've'.","B'cras' b'ut' b'egestas' b'enim' b'a' b'a' b'auctor' b'ad' b'primis' b'cursus' b'euismod' b'a' b'sodales' b'mi' b'urna'.",
      "B'amet' b'ut'.","B'nunc' b've'.","B'cras' b'ad' b'a' b'ut' b'hac' b'ac' b'a' b'ut' b'netus' b'at' b'a' b'mi'.","B'cras' b'mi'.","B'orci' b'ad' b'a' b'a' b'id' b'mus' b'sem' b've'.",
      "B'cras' b'eu' b'a' b'eu' b'penatibus' b'id' b'a' b'aptent' b'a' b'a'.","B'diam' b'mi' b'a' b'nec' b'in' b'a' b'magna'.",
      "B'amet' b'ac' b've' b'eni' b'semper' b'velit' b'mi' b'a' b'etiam' b'id' b'in'.","B'diam' b'at' b'et' b'id' b'mi'.",
      "B'elit' b'ut' b'a' b'etiam' b'ut' b'a' b'id' b'mollis' b'a' b'a' b'a' b've'.","B'eget' b'et' b'lacinia' b'sociosqu' b'non' b'a' b'orci' b'a' b'turpis' b'sociis'.",
      "B'pede' b've' b'a'.","B'enim' b'et' b'a' b'a' b'vulputate' b'vel' b'a' b'metus' b'ad' b'at' b'sit' b'a'.","B'quis' b've'.","B'arcu' b'ut' b'a' b'a' b'sem' b'mauris'.",
      "B'pede' b'in' b'a' b'a' b'sodales' b'hac'.","B'amet' b've' b'et' b'eros' b'a' b'a'.","B'nunc' b'eu' b'a' b'magnis' b'hac' b'dui' b'mi' b'a' b'a' b'a' b'posuere' b'non' b'a'.",
      "B'quam' b'eu' b'a' b'eni' b'a'.","B'amet' b'ad' b'a' b'mauris' b'sit' b'in'.","B'erat' b'ad' b'a' b'a' b'tristique' b'eget' b'in' b'a' b'a'.","B'erat' b'in' b'conubia'.",
      "B'elit' b'eu'.","B'cras' b'id' b'eu' b'a' b'ac' b'a' b'justo' b'aliquam'.","B'urna' b'ac' b'eu'.","B'elit' b'at' b'a' b'eni' b'potenti' b'tristique' b'quis' b'id' b've'.",
      "B'nunc' b'ac' b'mi' b'dui'.","B'erat' b'ad' b'a' b'a' b'a' b'aenean' b'a'.","B'orci' b'at' b'in' b'sem' b'convallis'."]
    let title = randomStrings[Math.floor(Math.random()*randomStrings.length)]
    let description = randomStrings[Math.floor(Math.random()*randomStrings.length)]
    let content = randomStrings[Math.floor(Math.random()*randomStrings.length)]

    let commentssql = knex.table("comments").insert({
      user_id:req.params.userId,title:title, description:description, content: content,
      date: (new Date()).getFullYear()+"-"+(new Date()).getMonth()+"-"+(new Date()).getDate()}).toString()
    let comment = await query(commentssql)
    utils.successRequest(res,comment.insertId)
  } catch (e) {
    utils.failedRequest(res, e.message)
  }
})

module.exports = router;
