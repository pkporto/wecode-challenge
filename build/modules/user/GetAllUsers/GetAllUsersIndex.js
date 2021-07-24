"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersController = void 0;
var GetAllUsersController_1 = require("./GetAllUsersController");
var GetAllUsersUseCase_1 = require("./GetAllUsersUseCase");
var getAllUsersUseCase = new GetAllUsersUseCase_1.GetAllUsersUseCase();
var getAllUsersController = new GetAllUsersController_1.GetAllUsersController(getAllUsersUseCase);
exports.getAllUsersController = getAllUsersController;
