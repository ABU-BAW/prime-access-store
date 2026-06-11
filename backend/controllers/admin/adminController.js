//register_admin //login_admin
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const Admin = require("../../models/admin");

const register_admin = async(req, res) => {

    const {username, password, email } = req.body;
    
    try {
        
        const checkUser = await Admin.findOne({email});
        if(checkUser) return res.json({'success' : false, 'mesage':'user already exists with this email, please try again!!'})

        const hashedPassword = await bcrypt.hash(password, 7)
        const newAdmin = new Admin({username, email, password : hashedPassword})
        await newAdmin.save()
        res.status(200).json({'success' : true,  'message' : 'registration completed successfully!!'});


    } catch (error) {
            console.log(error);
    }

}

const login_admin = async(req, res) => {

    const { email, password } = req.body;

    try {
        
        const checkUser = await Admin.findOne({email});
        if(!checkUser) return res.status(401).json({'success' : false, 'message' : 'user does not exist please register!!' })
        
        const verifyPassword = await bcrypt.compare(password, checkUser.password);
        if(!verifyPassword) return res.status(401).json({'success' : false , 'message': 'password incorrect !! please try again'})


        const token = jwt.sign(
            { id : checkUser._id, email : checkUser.email },
            process.env.PRIVATE_KEY,
            { expiresIn : '60m' }
        )

        res.cookie('token', token, { httpOnly : true, secure : false, sameSite : 'lax', path : '/' }).json({
            'success' : true,
            'message' : 'login successful!!',
            admin : {
                email : checkUser.email,
                id : checkUser._id,
                username : checkUser.username
            }
        })

        

    } catch (error) {
        console.log(error);
    }

}


const authMiddleware = async(req, res, next) => {
    const token = req.cookies?.token;

    if(!token) return res.status(401).json({
        success : false,
        message : 'unauthorized user!!'
    })

    try {

        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);

        req.user = decoded

        next();
        
    } catch (error) {
        res.status(401).json({
            success : false, 
            message : 'unauthorized user!'
        })
    }
}

module.exports = {
    register_admin, 
    login_admin,
    authMiddleware
}