const express = require('express')
const app = express()

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs')

// view engine
app.use(express.static('views'))


app.get('/', (req, res) => {
    res.render('index')
})

app.use('/', require('./routes/index'))
   
const port = 3000;
app.listen(port, () => console.log(`Server started on ${port}`))