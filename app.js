const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

const indexRoute = require('./routes/index');
const authRoute = require('./routes/Auth');
const chartsRoute = require('./routes/charts');
const tablesRoute = require('./routes/Tables');
const passwordRoute = require('./routes/Password');
const registerRoute = require('./routes/Register');

app.get('/', indexRoute);
app.get('/index', indexRoute);
app.get('/auth', authRoute);
app.get('/login', authRoute);
app.get('/charts', chartsRoute);
app.get('/tables', tablesRoute);
app.get('/password', passwordRoute);
app.get('/register', registerRoute);
app.post('/register', registerRoute);

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`);
});