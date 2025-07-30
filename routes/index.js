const express = require('express')
const app = express()
const PORT = 3004
const cors = require('cors')
var router =express.Router
const mongodb=require('./config/mongodb')
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:'50mb'}))
app.use(express.static(__dirname+"/public/"))

const Adminroutes=require('./routes/AdminRoutes')
app.get("/",(req,res)=>{
  res.send("welocme to this automation app for testing")
})
app.use('/admin',Adminroutes)

const seeder=require('./config/seeder')
seeder.addUser()
 const CustomerRoutes=require('./routes/UserRoutes')
app.use('/customer',CustomerRoutes)

app.listen(PORT, '0.0.0.0', ( ) => {
    console.log("Server Listerning to port ", PORT)
})
module.exports=router
console.log('server running at 3004')