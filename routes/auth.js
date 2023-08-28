const express = require("express");
const { register, login, authenticate } = require("../services/auth");
const jwt = require("jsonwebtoken");
const router = express.Router();
// it should be placed in the .env.
var secretKey = "cSHUl|rPef1SgvR-#zNN*6#DGs/l|/%/_2?4&({Edd:BZ9DQ[l]pDkJmvb$u%}3";

router.post("/authenticate", async(req, res)=>{
    const {data} = req.body;
    // check if the variable email is not null and not undefined
    //validation 
    if(!data){
        res.status(400).json({message: "Bad Request!"});
    }
    const result = await authenticate(data);
    console.log(result);

    if(result.status === 200){
        // generate the JWT token and send it back to React.
        const token = jwt.sign({userId: result?.user?.client_id}, secretKey);
        console.log(token);

        res.status(200).json(result.message, result.user, token);
    }
    //inappropriate request
    res.status(result.status).json(result.message);

});

router.post("/register", (req, res)=>{
    res.status(200).json(register(req.query));
});

module.exports = router;