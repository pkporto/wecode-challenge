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
exports.AddWatcherUseCase = void 0;
const typeorm_1 = require("typeorm");
const MovieRepository_1 = require("../domain/repositories/MovieRepository");
const UserRepository_1 = require("../../user/domain/repositories/UserRepository");
const AppError_1 = __importDefault(require("../../../shared/helpers/AppError"));
class AddWatcherUseCase {
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const moviesRepository = typeorm_1.getCustomRepository(MovieRepository_1.MovieRepository);
            const usersRepository = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
            //Checking if it exists
            let movieExists = yield moviesRepository.findById(data.movie_id);
            if (!movieExists) {
                throw new AppError_1.default('O filme não está na lista.', 404);
            }
            let userExists = yield usersRepository.findById(data.user_id);
            if (!userExists) {
                throw new AppError_1.default('Usuário não cadastrado.', 404);
            }
            movieExists.watchers += 1;
            userExists.watched += 1;
            yield moviesRepository.save(movieExists);
            yield usersRepository.save(userExists);
        });
    }
}
exports.AddWatcherUseCase = AddWatcherUseCase;
