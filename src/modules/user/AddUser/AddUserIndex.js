"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserController = void 0;
const AddUserController_1 = require("./AddUserController");
const AddUserUseCase_1 = require("./AddUserUseCase");
const addUserUseCase = new AddUserUseCase_1.AddUserUseCase();
const addUserController = new AddUserController_1.AddUserController(addUserUseCase);
exports.addUserController = addUserController;
