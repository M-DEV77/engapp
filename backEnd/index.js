const port1 = 5300;
const port2 = 3000;
const url = "http://localhost:";
const express = require('express');
const app = express();
const cors = require('cors');

//config response
app.use(express.json());
//solve cors
app.use(cors({credentials:true, origin:url+port2}));
//public folder 
app.use(express.static('public'));
//routes
app.get("/",(req,res)=>{
    res.send('ola mundo!')
})

app.listen(port1,()=>{
    console.log(`rodando na porta ${url+port1}`)

})








