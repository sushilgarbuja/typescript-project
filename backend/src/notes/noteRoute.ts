import express from "express"
import { createNote, deleteNote, getAllNotes, getNote, updateNote } from "./noteController";

const noteRoute=express.Router();
import {multer,storage} from "./../middlewares/multerMiddleware"
const upload = multer({storage:storage});
noteRoute.route('/').post(upload.single('file'),createNote).get(getAllNotes)

noteRoute.route('/:id').get(getNote).delete(deleteNote).put(updateNote)

export default noteRoute