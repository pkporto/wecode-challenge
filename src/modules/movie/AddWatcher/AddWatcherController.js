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
exports.AddWatcherController = void 0;
class AddWatcherController {
    constructor(AddWatcherUseCase) {
        this.AddWatcherUseCase = AddWatcherUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id, movie_id } = req.body;
            yield this.AddWatcherUseCase.execute({
                user_id,
                movie_id
            });
            //it will only return if everything is ok    
            return res.status(201).json({
                status: 201,
                message: 'Visualização cadastrada com sucesso.',
            });
        });
    }
}
exports.AddWatcherController = AddWatcherController;
