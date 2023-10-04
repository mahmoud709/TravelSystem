import { Router } from 'express';
import { createTour, deleteTour, gatallTours, getSingleTour, handleSearch, updateTour } from '../controllers/tourController.js';
import { signin, signup } from '../controllers/auth.js';
import { verifyAdmin, verifyUser } from '../middleware/verifyUser.js';
import { createReview, getAllReviews } from '../controllers/reviewController.js';

const route = Router();

route.post('/dashboard/create', createTour);
route.post('/signup', signup);
route.post('/signin', signin);

route.post('/review',verifyUser ,createReview);

route.put('/dashboard/update/:id', verifyAdmin, updateTour);

route.delete('/dashboard/delete/:id', verifyAdmin, deleteTour);

route.get('/tours', gatallTours);
route.get('/tours/:id', verifyUser, getSingleTour);
route.get('/tours/search', verifyUser, handleSearch);
route.get('/get/reviews',verifyUser,getAllReviews)
export default route;