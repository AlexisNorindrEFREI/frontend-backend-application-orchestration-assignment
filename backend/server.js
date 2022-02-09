const express = require('express');
const session = require('express-session');
const cors = require('cors')

// App
const app = express();
const PORT = 5000;
const HOST = '0.0.0.0';

app.use(cors())

app.use(session({
    secret: 'secret string',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    if (!req.session.pageCountByCurrentUser)
        req.session.pageCountByCurrentUser = 0;
    req.session.pageCountByCurrentUser++;
    res.send({
        pageCount: req.session.pageCountByCurrentUser
    })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);