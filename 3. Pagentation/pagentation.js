app.get('/api/books', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
  
    const start = (page - 1) * limit;
    const end = start + limit;
  
    const paginated = books.slice(start, end);
  
    res.json({
      page,
      limit,
      total: books.length,
      data: paginated
    });
  });