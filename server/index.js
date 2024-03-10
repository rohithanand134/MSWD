const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

//obj for express
const app=new express();
app.use(express.json());
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.yyyb3ss.mongodb.net/?retryWrites=true&w=majority');
client.connect();
const db = client.db('Sec15db');
const col = db.collection('details');

app.get('/home',(req,res)=>{
    res.send("home page");
}) 


app.post('/insert',async (req,res)=>{
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password,5);
    console.log(req.body);
    col.insertOne(req.body);
    res.send("successfully submitted");
})

app.listen(8081);
console.log("Server Is Running.......");

app.get('/showall',async(req,res)=>{
    const result =await col.find().toArray();
    res.send(result);
})


app.post('/check', async (req, res) => {
    const result1 = await col.findOne({'First_Name': req.body.un});

    if (result1 && await bcrypt.compare(req.body.pw, result1.password)) {
        // Send a response to the client indicating a successful login
        res.json({ status: 'success', message: 'Login Success' });
    } else {
        res.json({ status: 'failed', message: 'Login Failed' });
    }
});




app.post('/update',async (req,res)=>{
const result2 = await col.findOne({'First_Name':req.body.un});
    if(result2.First_Name == req.body.un){
        if(await bcrypt.compare(req.body.pw,result2.password)){
            req.body.pwd = await bcrypt.hash(req.body.pwd,5);
            col.updateOne({password:result2.password},{$set:{password:req.body.pwd}});
            res.send("New Password updated Successfully");
        }
    }
    else{
        res.send("Updation failed");
    }
})


app.post('/delete',async(req,res)=>{
    const result2 = await col.findOne({'First_Name':req.body.un})
    if (result2.First_Name == req.body.un){
    col.deleteOne({ Name:result2.Name });
        res.send("Deleted successfully");
}
else{
    res.send("deletion failed")
}
})