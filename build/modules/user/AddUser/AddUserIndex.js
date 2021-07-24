"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserController = void 0;
var AddUserController_1 = require("./AddUserController");
var AddUserUseCase_1 = require("./AddUserUseCase");
var addUserUseCase = new AddUserUseCase_1.AddUserUseCase();
var addUserController = new AddUserController_1.AddUserController(addUserUseCase);
exports.addUserController = addUserController;
