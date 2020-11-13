import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@gittickets/common';
import { createOrderRouter } from './routes/createOrder';
import { getOrderByIdRouter } from './routes/getOrderById';
import { getAllOrdersRouter } from './routes/getAllOrders';
import { deleteOrderRouter } from './routes/deleteOrder';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: true, for https only
    secure: false,
  })
);
app.use(currentUser);

app.use(createOrderRouter);
app.use(getOrderByIdRouter);
app.use(getAllOrdersRouter);
app.use(deleteOrderRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
