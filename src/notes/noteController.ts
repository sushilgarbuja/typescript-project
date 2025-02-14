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

const getAllNotes=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const notes=await noteModel.find();
        res.status(200).json({
            message:"Notes fetched successfully",
            data:notes
        })
    }catch(error){
        next(createHttpError(500,'Error while getting all notes'))
    }
}

const getNote=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        // const {id}=req.params
        const note=await noteModel.findById(req.params.id);
        if(!note){
            res.status(404).json({
                message:"Note not found"
            })
            return
        }
        res.status(200).json({
            message:"Note fetched successfully",
            data:note
        })
    }catch(error){
        next(createHttpError(500,'Error while getting note'))
    }
}

const deleteNote=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        await noteModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"Note deleted successfully"
        })
    }catch(error){
        next(createHttpError(500,'Error while deleting note'))
    }
}
export {createNote,getAllNotes,getNote,deleteNote}