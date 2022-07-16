import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// app configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes configurations
app.use(usersRoute);
app.use(statusRoute)

//server
app.listen(3000, () => {
  console.log('Executando na porta 3000')
});