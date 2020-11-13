import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@gittickets/common';
import { createTicketRouter } from './routes/createTicket';
import { getTicketById } from './routes/getTicketById';
import { getAllTickets } from './routes/getAllTickets';
import { updateTicket } from './routes/updateTicket';

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

app.use(createTicketRouter);
app.use(getTicketById);
app.use(getAllTickets);
app.use(updateTicket);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
