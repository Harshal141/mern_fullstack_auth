import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();

// get port number from .env or use 5000 if not found
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// custom error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});