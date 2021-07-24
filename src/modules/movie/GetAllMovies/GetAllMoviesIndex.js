"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMoviesController = void 0;
const GetAllMoviesController_1 = require("./GetAllMoviesController");
const GetAllMoviesUseCase_1 = require("./GetAllMoviesUseCase");
const getAllMoviesUseCase = new GetAllMoviesUseCase_1.GetAllMoviesUseCase();
const getAllMoviesController = new GetAllMoviesController_1.GetAllMoviesController(getAllMoviesUseCase);
exports.getAllMoviesController = getAllMoviesController;
