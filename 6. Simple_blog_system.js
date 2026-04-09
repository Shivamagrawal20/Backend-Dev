let posts = [
    { id: 1, title: "Post 1", content: "Content 1" },
    { id: 2, title: "Post 2", content: "Content 2" }
  ];
  
  // List all posts
  app.get('/posts', (req, res) => {
    res.json(posts);
  });
  
  // View single post
  app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
  
    if (!post) return res.status(404).send("Not found");
  
    res.json(post);
  });
  
  // Create post
  app.post('/posts', (req, res) => {
    const { title, content } = req.body;
  
    const newPost = {
      id: posts.length + 1,
      title,
      content
    };
  
    posts.push(newPost);
  
    res.status(201).json(newPost);
  });