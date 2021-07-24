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
exports.AddUserUseCase = void 0;
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../infra/typeorm/entities/User.entity");
const UserRepository_1 = require("../domain/repositories/UserRepository");
const AppError_1 = __importDefault(require("../../../shared/helpers/AppError"));
class AddUserUseCase {
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
            //Checking if it exists
            const userAlreadyExists = yield usersRepository.findByName(data.name);
            if (userAlreadyExists) {
                throw new AppError_1.default('O usuário já está cadastrado.');
            }
            const user = new User_entity_1.User(data);
            yield usersRepository.save(user);
        });
    }
}
exports.AddUserUseCase = AddUserUseCase;
