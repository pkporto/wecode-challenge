"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addWatcherController = void 0;
var AddWatcherController_1 = require("./AddWatcherController");
var AddWatcherUseCase_1 = require("./AddWatcherUseCase");
var addWatcherUseCase = new AddWatcherUseCase_1.AddWatcherUseCase();
var addWatcherController = new AddWatcherController_1.AddWatcherController(addWatcherUseCase);
exports.addWatcherController = addWatcherController;
