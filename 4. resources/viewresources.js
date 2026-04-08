let authors = [];
let authorId = 1;

// CREATE
app.post('/api/authors', (req, res) => {
  const { name } = req.body;

  const newAuthor = { id: authorId++, name };
  authors.push(newAuthor);

  res.status(201).json(newAuthor);
});

// READ ALL
app.get('/api/authors', (req, res) => {
  res.json(authors);
});

// READ ONE
app.get('/api/authors/:id', (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.status(404).json({ error: "Not found" });

  res.json(author);
});

// UPDATE
app.put('/api/authors/:id', (req, res) => {
  const index = authors.findIndex(a => a.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Not found" });

  authors[index].name = req.body.name;
  res.json(authors[index]);
});

// DELETE
app.delete('/api/authors/:id', (req, res) => {
  authors = authors.filter(a => a.id != req.params.id);
  res.json({ message: "Deleted" });
});