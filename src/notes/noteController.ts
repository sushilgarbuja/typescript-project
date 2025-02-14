import {NextFunction, Request,Response} from 'express'
import noteModel from './noteModel'
import envConfig from '../config/config'
import createHttpError from 'http-errors'
const createNote= async(req:Request,res:Response,next:NextFunction)=>{
    try{
        createHttpError(500,'Error while creating')
        const file=req.file ? `${envConfig.backendUrl}/${req.file.filename}` : 'https://t3.ftcdn.net/jpg/04/88/23/76/360_F_488237693_FNSP61ywk1MysxipZtbnTkKy2Rht2562.jpg'
    const {title,subtitle,description}=req.body
    if(!title || !subtitle || !description || !file){
        res.status(400).json({
            message:"All fields are required"
        })
        return
    }
    await noteModel.create({
        title,
        subtitle,
        description,
        file
    });res.status(201).json({
        message:"Note created successfully"
    })
    }catch(error){
        console.log(error)
        next(createHttpError(500,'Error while creating'))
    }

}
export {createNote}