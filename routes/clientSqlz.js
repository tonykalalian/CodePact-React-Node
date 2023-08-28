const express = require("express");
const {getAllClients, getClientById, createClient, updateClient, deleteClient, authenticateClient} = require("../services/clientsSqlz");
const router = express.Router();

router.get("/getAllClients", async(req, res) =>{
  const result = await getAllClients();
  if(result){
    res.status(200).json(result);
  }else{
    res.status(500).json({message: "error getting clients"});
  } 
});

router.post("/insertClient", async (req, res)=>{
  const {firstName, lastName, username, password, email, mobile, address, gender, dob} = req.body;
  const result = await createClient(firstName, lastName, username, password, email, mobile, address, gender, dob);
  if(result){
    res.status(200).json({message: "client inserted", result});
  }else{
    res.status(500).json({message: "error inserting client"});
  }
});

router.post("/updateClient", async (req, res) => {
  const {id, firstName, lastName, username, password, email, mobile, address, gender, dob} = req.body;
  const result = await updateClient(id, firstName, lastName, username, password, email, mobile, address, gender, dob);
  if(result){
    res.status(200).json({message: "client updated", result});
  }else{
    res.status(500).json({message: "error updating client"});
  }
})

router.post("/deleteClient", async (req, res) =>{
  const {id} = req.body;
  const result = await deleteClient(id);
  if(result){
    res.status(200).json({message: "client deleted", result});
  }else{
    res.status(500).json({message: "error deleting client"});
  }
})

router.post("/authenticateClient", async (req, res)=>{
  const {username, password} = req.body;
  const result = await authenticateClient(username, password);
  res.status(200).json(result);
})

module.exports = router;
