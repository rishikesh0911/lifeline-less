const getContacts = (req,res) => {
    res.status(200).json({message:"Hello world!"});
}

const createContact = (req,res) => {
    const{name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    console.log(req.body)
    res.status(201).json({message:"Created!"});
}

const getContact = (req,res) => {
    res.status(200).json({message:`contact for ${req.params.id}`});
}

const deleteContact = (req, res) =>{
    res.status(200).json({message:`deleted contact ${req.params.id}`});
}

const updateContact = (req,res) =>{
    res.status(200).json({message:`updated contact ${req.params.id}`});
}



module.exports = {getContacts, createContact, getContact, deleteContact, updateContact};