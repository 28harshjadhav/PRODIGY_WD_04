const express = require('express');

const path = require('path');
const app = express();
const port = 8000;

app.use('/static', express.static('static') );
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});