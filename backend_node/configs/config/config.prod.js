module.exports = {
    hostname: 'localhost',
    port: process.env.PORT || 3000,
    JWT: {
        expiresIn: '24h',
        secret: 'worldisfullofdevelopers',
    }
};