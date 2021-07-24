"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersController = void 0;
const GetAllUsersController_1 = require("./GetAllUsersController");
const GetAllUsersUseCase_1 = require("./GetAllUsersUseCase");
const getAllUsersUseCase = new GetAllUsersUseCase_1.GetAllUsersUseCase();
const getAllUsersController = new GetAllUsersController_1.GetAllUsersController(getAllUsersUseCase);
exports.getAllUsersController = getAllUsersController;
