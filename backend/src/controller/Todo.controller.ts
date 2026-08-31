import { Request, Response } from "express";
import { TO_DO } from "../models/TODO.model.js";


export async function createToDO(req:Request,res:Response):Promise<void>
{
    try {

        const { title }= req.body

        const newTodo = await TO_DO.create({title})


        res.json({success:true,message:"Created New Task !",todo:newTodo})
        return
        
    } catch (error) {
        res.json({success:false,message:"Something went wrong"})
        return
    }
}

export async function getToDO(req:Request,res:Response)
{
    try {

        const todo = await TO_DO.find()
        res.json({success:true,message:"All Todo",todo})
        return

        
    } catch (error) {
        res.json({success:false,message:"Failed to Get todo"})
        return
    }
}

export async function DeleteTodo(req:Request,res:Response)
{
    try {
        const {id} = req.body
        await TO_DO.findByIdAndDelete(id)
        res.json({success:true,message:"Deleted todo"})
        return

        
    } catch (error) {
        res.json({success:false,message:"Failed to delete todo"})
        return
    }
}