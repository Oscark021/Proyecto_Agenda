const Contact = require("../models/contact")

exports.getcontacts = async (req, res)=>{
    const contacts = await Contact.find()
    res.json({contacts})
}

exports.createcontact = async (req,res) => {
    const {name, lastname, phone, desc} = req.body
    const contact = {
        name,
        lastname,
        phone,
        desc
    }
    const newcontact = await Contact.create(contact)
    res.json({message:'contact created',newcontact})
}

exports.deletecontact = async (req,res) => {
    const {id} = req.params
    await Contact.findByIdAndDelete(id)
    res.json({message: 'Contact Deleted'})
}
exports.updatecontact = async (req,res)=>{
    const{id} = req.params
    const {updatedname, updatedlastname, updatedphone, updateddesc} = req.body
    const updatedcontact = {
        name: updatedname,
        lastname: updatedlastname,
        phone: updatedphone,
        desc: updateddesc
    }
    const userExist = await Contact.findById(id)
    if(!userExist){
        res.json({message: 'User does not exist'})
    }
    await Contact.findByIdAndUpdate(id,updatedcontact)
    res.json({message: 'Contact was Updated'})
}


//Tarea: Metodo update 
//* updatecontact 
//* recibir por params el id a actualizar EJ line:21
//* recibir por body los nuevos datos EJ line:9 & 10 - 14
//* en un const userExist = Contact.findById
//* If userExist Contact.findByIdAndUpdate 
//* (id,updatedcontact)