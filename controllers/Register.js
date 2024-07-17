const express = require('express');
const app = express();

const User = require('../models/User');
const db = require('../config/db');
    
const userModel = new User(db);


exports.index = (req, res) => {
    res.render('Register');
};
exports.register = async (req, res) => {
    // const { firstName, lastName, email, password, confirmPassword } = req.body;
    // console.log("firstName : ", firstName)
    // console.log("lastName : ", lastName)
    // console.log("email : ", email)
    // console.log("password : ", password)
    // console.log("confirmPassword : ", confirmPassword)
    // // res.render('Register');

    // const formData = req.body;
    // console.log('Form Data:', formData);
    // res.send(`Form Data Received! ${JSON.stringify(formData)}`);
    try {
        const { firstName, lastName, email, password } = req.body;
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(password)
        console.log(req.body)
        const userId = await userModel.createUser(firstName, lastName, email, password);
        res.status(201).send(`User created with ID: ${userId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating user');
    }
};