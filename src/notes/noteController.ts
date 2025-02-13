import {Request,Response} from 'express'
import noteModel from './noteModel'
import envConfig from '../config/config'
const createNote= async(req:Request,res:Response)=>{
    try{
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
    }).then((note)=>{
        res.status(200).json({
            message:"Note created successfully",
            note
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"Internal server error",
            err
        })
        res.status(201).json({
            message:"Note created successfully",
        })
    })
    }catch(error){
        console.log(error)
    }

}