import {ErrorRequestHandler} from "express"

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Internal Server Error"

    res.status(status).json({Error: message})
}

export {errorHandler}