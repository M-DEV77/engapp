module.exports = class Config{
    static Response(res,status,msn){
        return res.status(status).json({message:msn}) 
    }
    static ResponseUser(res,status,msn,user){
      return res.status(status).json({message:msn,user}) 
  }

    static NotSend(content,res,status,msn){
      if(!content){
        return res.status(status).json({message:msn})
      }
      return
    }

    static MatchPass(pas,confirm,res,status,msn){
      if(pas !== confirm){
        return res.status(status).json({message:msn})
      }
      return
    }

    static UserExist(email,res,status,msn){
      if(email){
        return res.status(status).json({message:msn})
      }
      return
    }

    static UserNotExist(email,res,status,msn){
      if(!email){
        return res.status(status).json({message:msn})
      }
      return
    }
    static passwordCheck(pass,res,status,msn){
      if(!pass){
        return res.status(status).json({message:msn})
      }
      return
    }



}