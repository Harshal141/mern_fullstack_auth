const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    // set error status to 404
    res.status(404);
    // pass error to next middleware
    next(error);
}

const errorHandler = (err, req, res, next) => {
    // set error status to 500
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // if error is 404, set message to 'Not Found'
    if(err.name === 'CastError' && err.kind === 'ObjectId') {
        message = 'Not Found';
        statusCode = 404;
    }

    res.status(statusCode).json({
        message: message,
        // show the deatils of error only in development mode
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });

}

export { notFound, errorHandler };