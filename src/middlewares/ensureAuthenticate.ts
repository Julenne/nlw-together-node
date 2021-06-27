import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticate(
  request: Request, 
  response: Response,
  next: NextFunction){
    //Receber o token
    const authToken = request.headers.authorization

    //Validar se o token está preenchido
    if(!authToken) {
      return response.status(401).end();
    }

    const [,token] = authToken.split(" ")

    try{
      //Saber se o token é válido
      const {sub} = verify(
        token, 
        "cccea551ad38644a61f0b630a6db0faa"
      ) as IPayload
      
      //Recuperar info do usuário
      request.user_id = sub;

      return next();
    }catch(err){
      return response.status(401).end();
    }
    
    
}
