import { Router} from "express";
import { createTour, deleteTour, gatallTours, getSingleTour, handleSearch, updateTour } from "../controllers/tourController.js";
import { signup } from "../controllers/auth.js";

const route = new Router();

route.post('/dashboard/create',createTour);
route.post('/signup',signup);

route.put('/dashboard/update/:id',updateTour);

route.delete('/dashboard/delete/:id',deleteTour);

route.get('/tours', gatallTours);
route.get('/tours/:id', getSingleTour);

route.get('/tours/search', handleSearch);

export default route;