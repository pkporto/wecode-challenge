"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovieController = void 0;
var AddMovieController_1 = require("./AddMovieController");
var AddMovieUseCase_1 = require("./AddMovieUseCase");
var addMovieUseCase = new AddMovieUseCase_1.AddMovieUseCase();
var addMovieController = new AddMovieController_1.AddMovieController(addMovieUseCase);
exports.addMovieController = addMovieController;
