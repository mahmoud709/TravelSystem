import { Router} from "express";
import { createTour, deleteTour, gatallTours, getSingleTour, handleSearch, updateTour } from "../controllers/tourController.js";

const route = new Router();

route.post('/dashboard/create',createTour);

route.put('/dashboard/update/:id',updateTour);

route.delete('/dashboard/delete/:id',deleteTour);

route.get('/tours', gatallTours);
route.get('/dashboard/tours/:id', getSingleTour);

route.get('/tours/search', handleSearch)
export default route;