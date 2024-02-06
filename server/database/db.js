import mongoose from 'mongoose';




 const Connection=async(username,password)=>{
    // const URL = `mongodb://${username}:${password}@ac-xb55ocz-shard-00-00.vzia9kq.mongodb.net:27017,ac-xb55ocz-shard-00-01.vzia9kq.mongodb.net:27017,ac-xb55ocz-shard-00-02.vzia9kq.mongodb.net:27017/?ssl=true&replicaSet=atlas-iskbme-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL = `mongodb://${username}:${password}@ac-xb55ocz-shard-00-00.vzia9kq.mongodb.net:27017,ac-xb55ocz-shard-00-01.vzia9kq.mongodb.net:27017,ac-xb55ocz-shard-00-02.vzia9kq.mongodb.net:27017/?ssl=true&replicaSet=atlas-iskbme-shard-0&authSource=admin&retryWrites=true&w=majority`
try{
    
await mongoose.connect(URL,{useNewUrlParser:true})
console.log('database connected succesfully');
}
catch(error){
console.log('error while connecting with the database',error);
}
 }
export default Connection;
