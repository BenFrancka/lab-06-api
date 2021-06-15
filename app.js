const express = require('express');
const meals = require('./data.js');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/meals', (req, res) => {

    res.json(meals);
})

app.get('/meals/:id', (req, res) => {
    const id = +req.params.id;

    const meal= meals.find((mealItem) => mealItem.id === id);

    res.json(meal);
})

module.exports = app;