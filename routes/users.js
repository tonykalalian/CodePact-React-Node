const express = require("express");
const { getAllUsers, deleteUser, insertUser, updateUser, authenticateUser, loadRefTableInfo } = require("../services/users");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authenticateToken = require("./middleware");

router.get("/getAllUsers", authenticateToken, async (req, res) => {
  const result = await getAllUsers();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error retrieving users");
  }
});

router.post("/insertUser", async (req, res) => {
    const {user} = req.body;
    const result = await insertUser(user);
    res.status(200).json(result);
});

router.post("/updateUser", async (req, res) =>{
  const {user} = req.body;
  const result = await updateUser(user);
  res.status(200).json(result);
})

router.post("/deleteUser", async (req, res) => {
  const {id} = req.body;
  try{
    res.status(200).json({message: "deleted succssfully"});
  }catch(error){
    res.status(500).json({message: "error occured while deleting the record."});
  }
  const result = await deleteUser(id);

});

router.post("/authenticateUser", async (req, res) => {
   const {user} = req.body;
   let result = await authenticateUser(user);
  if(result.message === "success"){
    // generate the JWT token and send it back to React.
    const token = jwt.sign({userId: result?.user?.client_id}, process.env.SECRET_KEY);
    result.result.token = token;
    res.status(200).json(result.result)
  }else{
    res.status(200).json("Unauthenticated");
  }

});

router.post("/loadRefernceTableInfo", async (req, res) =>{
  const {tableName, value, label} = req.body;
  const result = await loadRefTableInfo(tableName, value, label);
  res.status(200).json(result);

})

// router.delete("/deleteUser/:id", async (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     // Add your logic to delete the user using the provided ID
//   });

router.post("/register", (req, res) => {
  res.status(200).json(register(req.query));
});

module.exports = router;
