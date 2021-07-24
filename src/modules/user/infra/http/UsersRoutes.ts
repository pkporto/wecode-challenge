import { Router } from 'express';
import { addUserController } from '@modules/user/AddUser/AddUserIndex';
import { getAllUsersController } from '@modules/user/GetAllUsers/GetAllUsersIndex';

const usersRoutes = Router();

usersRoutes.post('/addUser', (req, res) => {
    return addUserController.handle(req, res);
});

usersRoutes.get('/getAllUsers', (req, res) => {
    return getAllUsersController.handle(req, res);
});



export { usersRoutes };
