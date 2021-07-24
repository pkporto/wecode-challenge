"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesRoutes = void 0;
const express_1 = require("express");
const AddMovieIndex_1 = require("../../AddMovie/AddMovieIndex");
const GetAllMoviesIndex_1 = require("../../GetAllMovies/GetAllMoviesIndex");
const AddWatcherIndex_1 = require("../../AddWatcher/AddWatcherIndex");
const moviesRoutes = express_1.Router();
exports.moviesRoutes = moviesRoutes;
moviesRoutes.post('/addMovie', (req, res) => {
    return AddMovieIndex_1.addMovieController.handle(req, res);
});
moviesRoutes.get('/getAllMovies', (req, res) => {
    return GetAllMoviesIndex_1.getAllMoviesController.handle(req, res);
});
moviesRoutes.post('/addWatcher', (req, res) => {
    return AddWatcherIndex_1.addWatcherController.handle(req, res);
});
