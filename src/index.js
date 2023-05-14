const express=require('express');
const app=express();
const path=require('path');
const {Pool}=require('pg');
const pool=new Pool({
    user:'postgres',
    host:'localhost',
    password:'comenius28',
    database:'postgres',
    port:'5432'
});
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/myusers', async(req,res)=>{
    const sql='SELECT * FROM usuarios2';
    const response= await pool.query(sql);
    const datos=response.rows;
    res.render('usuarios',{datos});
});
app.listen(3000,()=>{
    console.log('Server is running at port 3000');
});