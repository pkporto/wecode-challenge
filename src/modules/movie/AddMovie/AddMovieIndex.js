"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovieController = void 0;
const AddMovieController_1 = require("./AddMovieController");
const AddMovieUseCase_1 = require("./AddMovieUseCase");
const addMovieUseCase = new AddMovieUseCase_1.AddMovieUseCase();
const addMovieController = new AddMovieController_1.AddMovieController(addMovieUseCase);
exports.addMovieController = addMovieController;
