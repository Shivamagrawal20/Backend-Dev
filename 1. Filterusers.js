//1. Route with Query Parameters (Filter Users)
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Alice" }
  ];
  
  app.get('/users', (req, res) => {
    const { name } = req.query;
  
    let result = users;
  
    if (name) {
      result = users.filter(u =>
        u.name.toLowerCase() === name.toLowerCase()
      );
    }
  
    res.json(result);
  });