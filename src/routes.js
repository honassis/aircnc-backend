const express = require('express');
const multer  = require('multer');
const uploadConfig = require("./config/upload");

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router(); 
const upload = multer(uploadConfig);
//rota para login:
routes.post('/sessions', SessionController.store);
//rota para visualizar spots :
routes.get('/spots', SpotController.index);
//rota para os donos de spots visualizarem seus spots, aceitarem/recusarem visitas visitas, etc :
routes.get('/dashboard', DashboardController.show);
//rota para cadastrar novo spot
routes.post('/spots', upload.single('thumbnail'),SpotController.store);
//rota para solicitar convite de um spot
routes.post('/spots/:spot_id/bookings', BookingController.store)
//rottas para aceitar/recusar visitar de um dono de spot
routes.post('/bookings/:booking_id/approvals',BookingController.aprove);
routes.post('/bookings/:booking_id/rejections',BookingController.reject);
module.exports = routes;