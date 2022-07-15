import express, {Request, Response, NextFunction} from 'express';

const app = express();

app.get('/status', (req: Request, res:Response, next:NextFunction) => {
  res.status(200).send("Hello World2");
})

app.listen(3000, () => {
  console.log('Executando na porta 3000')
})