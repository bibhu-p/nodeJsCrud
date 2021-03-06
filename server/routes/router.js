const { Router } = require('express');
const express = require('express');
const route = express.Router()

const controller = require('../controller/controller');

const services= require('../services/render');

route.get('/', services.homeRoutes);

route.get('/add-user', services.add_user);

route.get('/update-user', services.update_user);


// ApI
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.get('/api/users/:id', controller.findById)
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);


module.exports = route