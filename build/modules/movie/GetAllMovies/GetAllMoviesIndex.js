"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMoviesController = void 0;
var GetAllMoviesController_1 = require("./GetAllMoviesController");
var GetAllMoviesUseCase_1 = require("./GetAllMoviesUseCase");
var getAllMoviesUseCase = new GetAllMoviesUseCase_1.GetAllMoviesUseCase();
var getAllMoviesController = new GetAllMoviesController_1.GetAllMoviesController(getAllMoviesUseCase);
exports.getAllMoviesController = getAllMoviesController;
