import mongoose from 'mongoose'


export async function connectDb()
{
    try {
        const url = process.env.MONGODB_URL!
        console.log(url);
        if(!url)
        {
            console.log("Database URL Not Found !");
            process.exit(1)
        }
        await mongoose.connect(url);
        console.log("Database Connected Successfully !");
        
    } catch (error) {
        if(error instanceof Error)
        {
            console.log("Database Connection Failed -> ",error.message);
            console.log(error.stack); 
        }
        process.exit(1)
    }
}