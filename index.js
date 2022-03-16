const express = require('express');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(express.json());
app.use(cors());

const userRoute = require('./src/routes/user.routes');

app.use('/user', userRoute);

const taskRoute = require('./src/routes/task.routes');
app.use('/tasks', taskRoute);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
