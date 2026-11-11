const express =require("express");

const app =express();
const dotenv = require("dotenv").config();

const PORT =process.env.PORT || 3300;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});