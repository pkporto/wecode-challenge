import { AddWatcherController } from './AddWatcherController';
import { AddWatcherUseCase } from './AddWatcherUseCase';

const addWatcherUseCase = new AddWatcherUseCase();

const addWatcherController = new AddWatcherController(addWatcherUseCase);

export { addWatcherController };
