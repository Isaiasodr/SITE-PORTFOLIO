const express = require("express")
const exphbs = require('express-handlebars')
const app = express()

const port = process.env.PORT || 3000;
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.use(express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
res.render("home")
})


app.listen(port,()=>{
    console.info("Aplicação Rodando em http://localhost:3000")
})