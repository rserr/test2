const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const router = require('./routes/routes');

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT,function() {
    console.log(`Express listening on port ${PORT}`);
});