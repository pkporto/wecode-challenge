"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesRoutes = void 0;
var express_1 = require("express");
var AddMovieIndex_1 = require("../../AddMovie/AddMovieIndex");
var GetAllMoviesIndex_1 = require("../../GetAllMovies/GetAllMoviesIndex");
var AddWatcherIndex_1 = require("../../AddWatcher/AddWatcherIndex");
var moviesRoutes = express_1.Router();
exports.moviesRoutes = moviesRoutes;
moviesRoutes.post('/addMovie', function (req, res) {
    return AddMovieIndex_1.addMovieController.handle(req, res);
});
moviesRoutes.get('/getAllMovies', function (req, res) {
    return GetAllMoviesIndex_1.getAllMoviesController.handle(req, res);
});
moviesRoutes.post('/addWatcher', function (req, res) {
    return AddWatcherIndex_1.addWatcherController.handle(req, res);
});
