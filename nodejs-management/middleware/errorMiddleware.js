const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
    })
}

const requestHandler = (req, res, next) => {
    console.log(req.path, req.method)
    next()
}

module.exports = {
    errorHandler,
    requestHandler,
}