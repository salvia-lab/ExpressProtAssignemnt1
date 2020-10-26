//Salvia Rahman; Student ID; 301114183
let express=require('express');
//const { Mongoose } = require('mongoose');
let router =express.Router();
let mongoose=require('mongoose');
//const { request } = require('../config/app');

let jwt = require('jsonwebtoken');

let passport = require('passport');

//Conect to our controller business contact
let contactController = require('../controller/businessContact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add',requireAuth, contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route for displaying the Update page - UPDATE Operation */
router.get('/update/:id', requireAuth, contactController.displayUpdatePage);

/* POST Route for processing the Update page - UPDATE Operation */
router.post('/update/:id', requireAuth, contactController.processUpdatePage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports=router;


