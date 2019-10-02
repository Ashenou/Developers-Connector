 const express = require(`express`);
 const mongoose = require(`mongoose`);

 const users = require(`./routes/api/users`);
 const posts = require(`./routes/api/posts`);
 const profile = require(`./routes/api/profile`);

 const app = express(); 

 //DB config
const db = require(`./config/keys`).mongoURI;

//connect to MongoDB
mongoose
    .connect(db)
    .then(()=>console.log(`MongoDB connected`))
    .catch((err)=> console.log(err));

    
 app.get(`/`,(req,res)=>{ res.send(`Hello`); });

 //Use Routes called by require and hand them over to express
 app.use(`/api/posts`,posts);
 app.use(`/api/profile`,profile);
 app.use(`/api/users`,users);

 const port = process.env.PORT || 5000; // process.env.PORT if we are deploying on heroku for example

 app.listen(port,()=> console.log(`Server started on port ${port}`));





