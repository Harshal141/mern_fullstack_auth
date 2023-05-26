import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// get port number from .env or use 5000 if not found
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});