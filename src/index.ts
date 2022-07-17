import express from 'express';
import errorHandler from './middleware/error-handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// app configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes configurations
app.use(usersRoute);
app.use(statusRoute)

// Handlers error config
app.use(errorHandler)

//server
app.listen(3000, () => {
  console.log('Executando na porta 3000')
});