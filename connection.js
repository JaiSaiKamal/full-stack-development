const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        //mongodb connection string
        const con=await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
        })

        console.log('MongoDB connected:${con.connected.host}');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB
