const mongoose = require('mongoose')
async function main(){
    await mongoose.connect( 'mongodb://localhost:27017/engapp');
        console.log('conectou ao banco de dados!!'); 
}
main().catch((err)=>console.log(err));

module.exports = mongoose;
