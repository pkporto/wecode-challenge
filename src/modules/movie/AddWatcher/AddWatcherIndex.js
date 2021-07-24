"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addWatcherController = void 0;
const AddWatcherController_1 = require("./AddWatcherController");
const AddWatcherUseCase_1 = require("./AddWatcherUseCase");
const addWatcherUseCase = new AddWatcherUseCase_1.AddWatcherUseCase();
const addWatcherController = new AddWatcherController_1.AddWatcherController(addWatcherUseCase);
exports.addWatcherController = addWatcherController;
