import { NextFunction, Request, Response} from "express";
import DatabaseError from "../models/errors/database.error.model";

function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  if(error instanceof DatabaseError)  {
    res.sendStatus(400)
  } else {
    console.log(error)
    res.sendStatus(500)
  }
}

export default errorHandler;