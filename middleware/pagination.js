module.exports = async function(results) {
    try {
        return async(req, res, next) => {
            const page = parseInt(req.query.page);
            const limit = parseInt(req.query.limit);

            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;

            results.slice(startIndex, endIndex);
            // next page
            if (endIndex < results.length) {
                results.next = { page: page + 1, limit }
            }

            if (startIndex > 0) {
                results.previous = { page: page - 1, limit }
            }
            res.paginatedResult = results;
            next();
        }
    } catch (e) {
        console.log(e.message)
    }
}