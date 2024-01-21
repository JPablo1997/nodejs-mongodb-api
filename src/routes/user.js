const express = require("express")
const router = express.Router()
const userScheme = require("../models/user")

// create user
router.post("/users", (req, res) => {
  console.log(req.body)
  const user = userScheme(req.body)
  user.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

// Find all users
router.get("/users", (req, res) => {
  userScheme.find().then((data) => res.json(data)).catch((error) => res.json(error))
})

// Find users by Name
router.get("/users/filter/name", (req, res) => {
  const name = req.body.name
 // const name = JSON.parse(req.body.name, true)
  userScheme.find({ name: name }).then((data) => res.json(data)).catch((error) => res.json(error))
})

// Find user by Id
router.get("/users/filter/id", (req, res) => {
  userScheme.find({_id: req.body._id}).then((data) => res.json(data)).catch((error) => res.json(error))
})

// Update user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;	
  const { name, age, email } = req.body;	
  userScheme.updateOne({_id: id}, {$set: { name, age, email }}).then((data) => res.json(data)).catch((error) => res.json(error))
})

// Delete user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;	
  userScheme.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json(error))
})

// Login
router.post("/auth/login", (req, res) => {
  const { username, password } = req.body
  userScheme.findOne({ username: username, password: password }).select("-password -age").then((data) => {
          const resObject = {
		"message": "Login Successfully!",
		"user": data
	  }
	  res.json(resObject)
  }).catch((error) => res.json(error))
})



module.exports = router
