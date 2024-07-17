const express = require('express');
const app = express();

exports.index = (req, res) => {
    res.render('Charts');
};