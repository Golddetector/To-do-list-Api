import {ErrorRequestHandler} from "express"
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library"

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Internal Server Error"

    if(err instanceof PrismaClientKnownRequestError){
        if (err.code === "P2025") {
        // Record not found
        return res.status(404).json({ error: "Record not found" });
        }
        if (err.code === "P2002") {
        // Unique constraint
        return res.status(409).json({ error: "Duplicate field value" });
        }
    }

    res.status(status).json({Error: message})
}

export {errorHandler}