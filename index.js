const express = require('express');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const app = express();
const port = 3000;

app.use(express.json());

const userRoute = require('./src/routes/user.routes');

app.use('/user', userRoute);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
