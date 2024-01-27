import express from 'express';
import cors from 'cors';
import {connectToDatabase} from "./utils/index.js";
import userRouter from "./routes/user.js";
import teamRouter from "./routes/team.js";

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/teams', teamRouter);

app.listen(PORT, async () => {
    try {
        await connectToDatabase();
        console.info('Database connection successful');
        console.info(`Server is running => http://localhost:${PORT}`);
    } catch (error) {
        console.error("Database connection failed", error.message  );
    }

});