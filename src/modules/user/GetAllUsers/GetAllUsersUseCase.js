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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersUseCase = void 0;
const typeorm_1 = require("typeorm");
const UserRepository_1 = require("../domain/repositories/UserRepository");
class GetAllUsersUseCase {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const moviesRepository = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
            const result = yield moviesRepository.getAllUsers();
            console.log(result);
            return result;
        });
    }
}
exports.GetAllUsersUseCase = GetAllUsersUseCase;
