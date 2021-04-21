module.exports = (req, res, next) => {
    if (req === 'POST' || req === 'DELETE' || req === 'PUT') {
        req.method = 'GET';
        req.query = req.body;
    }
    next();
};
