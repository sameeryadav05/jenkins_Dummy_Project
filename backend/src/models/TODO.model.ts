import mongoose, { Document } from 'mongoose'

interface ToDoSchemaI extends Document{
    title:string;
}

const todoSchema = new mongoose.Schema<ToDoSchemaI>({
    title:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true})

export const TO_DO = mongoose.model<ToDoSchemaI>('To-Do',todoSchema)  