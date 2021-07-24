"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
var express_1 = require("express");
var AddUserIndex_1 = require("../../AddUser/AddUserIndex");
var GetAllUsersIndex_1 = require("../../GetAllUsers/GetAllUsersIndex");
var usersRoutes = express_1.Router();
exports.usersRoutes = usersRoutes;
usersRoutes.post('/addUser', function (req, res) {
    return AddUserIndex_1.addUserController.handle(req, res);
});
usersRoutes.get('/getAllUsers', function (req, res) {
    return GetAllUsersIndex_1.getAllUsersController.handle(req, res);
});
