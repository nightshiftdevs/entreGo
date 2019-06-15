const signUpDrivers = async (req, res) => {
    db.query('SELECT * FROM accounts WHERE username = ? AND password = ?');
}

module.exports = signUpDrivers;