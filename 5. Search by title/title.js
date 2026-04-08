app.get('/api/books/search', (req, res) => {
    const { title } = req.query;
  
    const result = books.filter(b =>
      b.title.toLowerCase().includes(title.toLowerCase())
    );
  
    res.json(result);
  });