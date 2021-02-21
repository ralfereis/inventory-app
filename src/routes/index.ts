import { Router } from 'express';
import inventoriesRouter from './inventories.routes';

const routes = Router();

routes.use('/inventories', inventoriesRouter);

export default routes;
