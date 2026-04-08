//assignment 3
const users = [
    { id: 1, role: 'user' },
    { id: 2, role: 'moderator' },
    { id: 3, role: 'admin' }
  ];
  
  const posts = [];
  
  const isAuthenticated = (req, res, next) => {
    req.user = users[0]; // simulate
    next();
  };
  
  const requireRole = (role) => (req, res, next) => {
    if (req.user.role !== role)
      return res.status(403).json({ error: "Access denied" });
    next();
  };
  
  const isOwnerOrModerator = (req, res, next) => {
    const post = posts.find(p => p.id == req.params.id);
  
    if (post.authorId === req.user.id || req.user.role !== 'user') {
      req.post = post;
      return next();
    }
  
    res.status(403).json({ error: "Not allowed" });
  };
  
  app.post('/posts', isAuthenticated, (req, res) => {
    posts.push({ id: posts.length + 1, authorId: req.user.id });
    res.json(posts);
  });
  
  app.put('/posts/:id', isAuthenticated, isOwnerOrModerator, (req, res) => {
    res.json({ message: "Updated" });
  });
  
  app.delete('/posts/:id',
    isAuthenticated,
    requireRole('moderator'),
    (req, res) => res.json({ message: "Deleted" })
  );