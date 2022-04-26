const express = require ('express');
const res = require('express/lib/response');

const app = express ()
const port = process.env.port


app.use(express.static('public'));
app.set ('view engine', 'ejs')

const homeRouter = require('./routes/homeRouter');
app.use('/', homeRouter);


app.listen(port || 3000, () => {
    console.log('Example app listerning on port');
}); 