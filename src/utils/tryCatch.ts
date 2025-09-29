
import { NextFunction } from "express";

type asyncController = (req: Request,res:Response) => Promise<any>;

const trycatch = (controller: asyncController) => async (req: Request, res: Response, next: NextFunction) => {
    try{
        await controller(req,res)
    }
    catch(err){
        next(err)
    }
}

export {trycatch}