import { Request, Response } from "express"

export const register = (req : Request, res: Response)=>{
    const {email, password} = req.body
    console.log(email, password)
}