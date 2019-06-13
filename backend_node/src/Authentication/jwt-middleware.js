/**
  * @desc verify if there is any token in headers and adds the token to req.token
  * @param req the request
  * @param res the response
  * @param next to pass the req if it is succesful
*/

const tokenInHeaders = (req, res, next) => {
    const header = req.headers['authorization'];

    if (typeof header !== undefined) {
        const bearer = header.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    };
};

module.exports = tokenInHeaders;