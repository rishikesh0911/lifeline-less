const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        title: getErrorTitle(statusCode),
        message: err.message,
        stackTrace: err.stack,
    });
};

const getErrorTitle = (statusCode) => {
    switch (statusCode) {
        case 400:
            return "Validation Failed";
        case 401:
            return "Unauthorized";
        case 403:
            return "Forbidden";
        case 404:
            return "Not Found";
        case 500:
        default:
            return "Server Error";
    }
};

module.exports = errorHandler;