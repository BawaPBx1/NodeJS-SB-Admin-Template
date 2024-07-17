const express = require('express');
const app = express();

exports.index = (req, res) => {
    res.render('Auth');
};
exports.login = (req, res) => {
    res.render('Login');
};
