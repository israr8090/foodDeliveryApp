import express from 'express';
import multer from 'multer';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';

const foodRouter = express.Router();

//--Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
}); 

const upload = multer({storage:storage});

//--add foods--
foodRouter.post('/add', upload.single("image"), addFood);

//--list foods--
foodRouter.get('/list', listFood);

//--remove foods--
foodRouter.post('/remove', removeFood);


export default foodRouter;
