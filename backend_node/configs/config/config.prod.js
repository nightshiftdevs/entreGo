module.exports = {
    hostname: 'localhost',
    port: process.env.PORT || 4000,
    JWT: {
        expiresIn: '24h',
        secret: 'worldisfullofdevelopers',
    }
};
