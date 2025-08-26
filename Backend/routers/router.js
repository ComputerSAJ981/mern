import express from 'express'
import {home,signup,feedback, login} from '../controllers/controller.js';
import { validator } from '../middlewares/validator_middleware.js';
import { User } from '../validators/validators.js';
import { fbUser } from '../validators/FB_validator.js';
import { lUser } from '../validators/L_validator.js';

const router = express.Router();

router.get('/',home);

router.post("/signup",validator(User),signup);

router.post("/feedback",validator(fbUser),feedback);

router.post('/login',validator(lUser),login);

export default router;