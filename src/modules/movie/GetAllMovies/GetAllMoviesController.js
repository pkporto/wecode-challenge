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
exports.GetAllMoviesController = void 0;
class GetAllMoviesController {
    constructor(getAllMoviesMoviesUseCase) {
        this.getAllMoviesMoviesUseCase = getAllMoviesMoviesUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Get All Movies Controller');
                const movies = yield this.getAllMoviesMoviesUseCase.execute();
                return res.status(200).json({
                    status: 200,
                    message: 'Todos os filmes.',
                    data: movies,
                });
            }
            catch (error) {
                return res.status(400).json({
                    message: 'controller ' + error.message || 'Erro desconhecido.',
                });
            }
        });
    }
}
exports.GetAllMoviesController = GetAllMoviesController;
