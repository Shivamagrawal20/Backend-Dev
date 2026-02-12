import express from 'express';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = fs.readFileSync('./data/users.json');
        const users = JSON.parse(data);

    res.render('index', { users });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});