let posts = [
  {
    id: 1,
    title: "First posts",
    content: "the content",
    date: "02/02/2018",
    author: "John"
  },
  {
    id: 2,
    title: "Second posts",
    content: "the content",
    date: "02/02/2018",
    author: "Paul"
  },
  {
    id: 3,
    title: "Third posts",
    content: "the content",
    date: "02/02/2018",
    author: "Alice"
  }
];
var postsApi = {
  getAll: (req, res) => {
    return res.json({
      data: posts || []
    });
  },
  getByUrl: (req, res) => {
    return res.json({
      data: posts[req.params.url - 1]
    });
  },
  newPost: (req, res) => {
    let newPost = {
      id: posts.length + 1,
      title: req.body.title,
      content: req.body.content,
      date : Date.now()
    };
    posts.push(newPost);
    res.status(200);
    res.json({ data: newPost });
  },
  editPost: (req, res) => {
    var id = req.params.id;
    if (posts.indexOf(id) === -1) {
      res.status(404);
      res.send();
    }
    if (req.body.content) {
      posts[id].content = req.body.content;
    }
    if (req.body.title) {
      posts[id].title = req.body.title;
    }
    res.status(200);
    return res.send();
  },
  deletePost: (req, res) => {
    res.status(200);
    return res.send();
  }
};

module.exports = postsApi;
