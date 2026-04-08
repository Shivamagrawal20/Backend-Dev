app.get('/api/books', (req, res) => {
    const { author, year } = req.query;
  
    let result = books;
  
    if (author) {
      result = result.filter(b => b.author === author);
    }
  
    if (year) {
      result = result.filter(b => b.year == year);
    }
  
    res.json(result);
  });