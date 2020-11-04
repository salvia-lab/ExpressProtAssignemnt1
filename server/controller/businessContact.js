//Salvia Rahman; student ID; 301114183
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Contact = require('../models/contact');

//Display the contact page
module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactList);

            res.render('businessContact/list', 
            {title: 'Business Contact List', 
            ContactList: contactList, 
            displayName: req.user ? req.user.displayName : ''});           
        }
    }).sort({"name":1});//sort the name alphabetically;
}
//Displaying the add page of contacts
module.exports.displayAddPage = (req, res, next) => {
    res.render('businessContact/add', {title: 'Add Contact',  
    displayName: req.user ? req.user.displayName : '' })            
}
//Processing the add page of contacts
module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });
    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}
//Display the update page
module.exports.displayUpdatePage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactUpdate) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the update view
            res.render('businessContact/update', {title: 'Update Contact', contact: contactUpdate,  
            displayName: req.user ? req.user.displayName : ''})
            
        }
    });
}
//Processing the update page
module.exports.processUpdatePage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}
//Perform the deletion of the contact
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the contact list
             res.redirect('/contact-list');
        }
    });
} 