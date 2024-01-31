const port1 = 5300; //port backend
const port2 = 3000; //port frontend
const url = "http://localhost:";
const express = require('express');
const app  = express();
const cors = require('cors');
const UserRouter = require('./routes/UserRouter')




//config response
app.use(express.json());
//solve cors
app.use(cors({credentials:true, origin:url+port2}));
//public folder 
app.use(express.static('public'));
//routes
app.use('/001',UserRouter);


app.listen(port1,()=>{
    console.log(`rodando na porta ${url+port1}`)

})








