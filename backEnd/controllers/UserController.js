
const Config = require('../class/config');
const createUserToken = require('../helpers/createUserToken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');


    module.exports = class UserController{
        static async register(req,res){  ///register registra o usuário
    
                const {name,lastName,professionType,email,phoneWhatsApp,password,confirmPassword}= req.body;
                const userEx = await User.findOne({email:email})
            ///validations not send
                Config.NotSend(name,res,422,"O nome é obrigatório!");
                Config.NotSend(lastName,res,422,"O Sobre nome é obrigatório!");
                Config.NotSend(professionType,res,422,"Área de atuação é obrigatório!");
                Config.NotSend(email,res,422,"O e-mail é obrigatório!");
                Config.NotSend(phoneWhatsApp,res,422,"O telefone é obrigatório!");
                Config.NotSend(password,res,422,"A senha é obrigatório");
                Config.NotSend(confirmPassword,res,422,"A confirmação de senha é obrigatório");
                

            ///match password
                Config.MatchPass(password,confirmPassword,res,422,"As senha tem que ser iguais!");
            ///user exists 
            
                
            ///cripto password  
                const salt = await bcrypt.genSalt(12);
                const passWordHash = await bcrypt.hash(password,salt);
            ///create user
                const user = new User({
                     name,
                     lastName,
                     professionType,
                     email,
                     phoneWhatsApp,
                     password:passWordHash,
                })
                try {
                    if(userEx){
                        Config.ResponseUser(res,201,"Usuário já cadastrado!",userEx.email)
                    }else{
                        const newUser = await user.save();
                        await createUserToken(newUser,req,res)
                    }
                    
                } catch (error) {
                   Config.Response(res,500,error) 
                }
            
        }

        static async login(req,res){    ///login do usuário
            const {email,password} =req.body
            const userEx = await User.findOne({email:email})
            const checkPassword = await bcrypt.compare(password,userEx.password)
            //validation 
            Config.NotSend(email,res,422,"O e-mail é obrigatório!");
            Config.NotSend(password,res,422,"A senha é obrigatório");
            Config.UserNotExist(userEx,res,422,"Usuário não cadastrado!")
            //check if password mach
            Config.passwordCheck(checkPassword,res,422,"Senha invalida!")
            await createUserToken(userEx,req,res)

        }

    }