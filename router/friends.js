const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  // Update the code here

  res.send(JSON.stringify({friends}, null, 4))//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
    const email = req.params.email;
  // Update the code here
  res.send(friends[email])//This line is to be replaced with actual return value
});


// POST request: Add a new friend
router.post("/",(req,res)=>{

    if(req.body.email) {
        friends[req.body.email] = {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "DOB": req.body.DOB
        }
    }
  // Update the code here
  res.send("The user" + (' ') + (req.body.firstName) + " Has been added!")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email;
  let friend = friends[email];

  if(friend) {
    if(req.body.firstName) { 
        friend["firstName"] = req.body.firstName;
    }
    if(req.body.lastName) { 
        friend["lastName"] = req.body.lastName;
    }
    if(req.body.DOB) { 
        friend["DOB"] = req.body.DOB;
    }
    friends[email] = friend;
    res.send(`Friend with the email ${email} updated`);
  } else {
    res.send("Unable to find friend");
  }
  //This line is to be replaced with actual return value
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  if(req.params.email) {
    delete friends[req.params.email];
  }
  res.send(`Friend with the email ${req.params.email} deleted`);//This line is to be replaced with actual return value
});

module.exports=router;
