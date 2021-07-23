import { Router } from 'express';
import { createUserController } from '@modules/user/CreateUser/CreateUserIndex';
import { loginUserController } from '@modules/user/UserLogin/LoginUserIndex';
// import { logoutUserController } from '../app/useCases/User/UserLogout/LogoutUserIndex';

const userRoutes = Router();

userRoutes.post('/signUp', (req, res) => {
    return createUserController.handle(req, res);
});

userRoutes.post('/login', (req, res) => {
    return loginUserController.handle(req, res);
});

export { userRoutes };
