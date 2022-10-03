const express= require('express');
var mongoose = require('mongoose');

const pug=require('pug');
const app= express();
const fs= require('fs');
app.use(express.urlencoded());
const path = require('path');
const { urlencoded } = require('body-parser');
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','pug');
app.set(path.join(__dirname,'./views' ));
const port = 5588;
mongoose.connect('mongodb://localhost:27017/ifhamKart');
var ifhamschema = new mongoose.Schema ({
    name:String,
    email:String,
    gender:String,
    address:String,
    more:String
});
var model = mongoose.model('colls',ifhamschema);

app.get('/',(req,res)=>{
    res.render( 'index')
});
app.get('/contact-us',(req,res)=>{
    res.render( 'contact')
});
app.post('/contact-detail',(req,res)=>{
    var data= new model(req.body);
    data.save().then(
        res.send("f s")

    ).catch(
 res.status(404).send("err")
    )

});

app.listen(port, ()=>{

   
})