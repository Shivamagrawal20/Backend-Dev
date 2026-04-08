const validateYear = (req, res, next) => {
    const { year } = req.body;
  
    if (!year || isNaN(year) || year < 1000 || year > 2100) {
      return res.status(400).json({
        error: "Invalid year"
      });
    }
  
    next();
  };
  
  // use it
  app.post('/api/books', validateYear, (req, res) => {
    const { title, author, year } = req.body;
  
    const newBook = { id: nextId++, title, author, year };
    books.push(newBook);
  
    res.status(201).json(newBook);
  });