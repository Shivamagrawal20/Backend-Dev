// 3. Contact form using EJS
app.get('/contact', (req, res) => {
    res.render('contact');
  });
  
  app.post('/contact', (req, res) => {
    const { name, email } = req.body;
  
    res.send(`Received from ${name} (${email})`);
  });


  // Apply this to views.ejs
  /**
  <form action="/contact" method="POST">
  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <button type="submit">Submit</button>
  </form>
  */