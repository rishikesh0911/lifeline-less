const express =require("express");

const app =express();
const dotenv = require("dotenv").config();

const PORT =process.env.PORT || 3300;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
const errorHandler = require("./middleware/errorhandler");
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});