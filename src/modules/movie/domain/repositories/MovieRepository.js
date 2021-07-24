"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepository = void 0;
const typeorm_1 = require("typeorm");
const Movie_entity_1 = require("../../infra/typeorm/entities/Movie.entity");
let MovieRepository = class MovieRepository {
    save(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield typeorm_1.getRepository(Movie_entity_1.Movie).save(movie);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield typeorm_1.getRepository(Movie_entity_1.Movie).findOne({
                    where: { name },
                });
                return user;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield typeorm_1.getRepository(Movie_entity_1.Movie).findOne({
                    where: { id },
                });
                return user;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    getAllMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movies = yield typeorm_1.getRepository(Movie_entity_1.Movie).find({
                    order: {
                        id: 'ASC',
                    }
                });
                return movies;
            }
            catch (error) {
                return error.message;
            }
        });
    }
};
MovieRepository = __decorate([
    typeorm_1.EntityRepository(Movie_entity_1.Movie)
], MovieRepository);
exports.MovieRepository = MovieRepository;
