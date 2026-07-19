const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const dbConnection = require('./config/dbConnect')
const adminRoutes = require('./routes/admin/adminRoutes')
const productRoutes = require('./routes/products/productRoutes')
const paymentRoutes = require('./routes/payment/paymentRoutes')
const orderRoutes = require('./routes/orders/orderRoutes')


const app = express();
dbConnection();

const port = process.env.PORT || 5001;

  
app.use(cors({ 
    origin : ["http://localhost:5173","https://prime-access-store.vercel.app"],
    methods : ['GET', 'POST', 'DELETE', 'PUT'],  
    allowedHeaders : [  
        'Content-Type', 
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma' 
    ], 
    credentials : true
})) 
  
app.use(express.json());  
app.use(cookieParser());
 
app.use('/api/admin', adminRoutes);
app.use('/api/products', productRoutes) 
app.use('/api/payment', paymentRoutes)
app.use('/api/orders', orderRoutes)
   
app.get('/api/admin', (req,res) => { 
    console.log(req);
    res.status(200).json({ msg:"welcome to the admin page"})
})

app.listen(port, () => console.log(`listening for requests on port ${port}`) );         

 