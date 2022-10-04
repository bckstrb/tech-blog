const router = require("express").Router();
const {Post} = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  });

  router.put('/: id', withAuth, async (req, res) => {
    try {
      const updatePost = await Post.update(req.body, {
        where: {
          id: req.params.id,
        }
      });
      res.status(200).json(updatePost);
    }
    catch (err) {
      res.status(400).json(err)}
  });

  router.post('/', withAuth, async (req, res) => {
    console.log(req.session.userId)
    try {
      const postData = await Post.create({
        ...req.body,
        userId: req.session.userId,
      });
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const data = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!data) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;