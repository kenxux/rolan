const fs = require('fs');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userRoutes = require('./routes/user');
const examRoutes = require('./routes/exam');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/exams', examRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Rolan Exam Management System');
});

const serverOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

sequelize.sync().then(() => {
  https.createServer(serverOptions, app).listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.use(errorHandler);
