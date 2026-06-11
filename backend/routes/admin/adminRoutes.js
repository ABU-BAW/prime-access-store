const { register_admin, login_admin, authMiddleware } = require('../../controllers/admin/adminController')
const express = require('express')
const router = express.Router()



router.post('/register',   register_admin);
router.post('/login',  login_admin);

router.get("/check-auth", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message : 'Authenticated user!!',
    user: req.user 
    });
});


module.exports = router;