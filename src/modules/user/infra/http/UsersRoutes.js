"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const AddUserIndex_1 = require("../../AddUser/AddUserIndex");
const GetAllUsersIndex_1 = require("../../GetAllUsers/GetAllUsersIndex");
const usersRoutes = express_1.Router();
exports.usersRoutes = usersRoutes;
usersRoutes.post('/addUser', (req, res) => {
    return AddUserIndex_1.addUserController.handle(req, res);
});
usersRoutes.get('/getAllUsers', (req, res) => {
    return GetAllUsersIndex_1.getAllUsersController.handle(req, res);
});
