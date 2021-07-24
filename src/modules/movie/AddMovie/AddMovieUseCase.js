"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMovieUseCase = void 0;
const typeorm_1 = require("typeorm");
const Movie_entity_1 = require("../infra/typeorm/entities/Movie.entity");
const MovieRepository_1 = require("../domain/repositories/MovieRepository");
const AppError_1 = __importDefault(require("../../../shared/helpers/AppError"));
class AddMovieUseCase {
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const moviesRepository = typeorm_1.getCustomRepository(MovieRepository_1.MovieRepository);
            //Checking if it exists
            const movieAlreadyExists = yield moviesRepository.findByName(data.name);
            if (movieAlreadyExists) {
                throw new AppError_1.default('O filme já está cadastrado.');
            }
            const movie = new Movie_entity_1.Movie(data);
            yield moviesRepository.save(movie);
        });
    }
}
exports.AddMovieUseCase = AddMovieUseCase;
