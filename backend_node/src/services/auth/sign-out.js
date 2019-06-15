/**
  * @desc send a success message when user logout
  * @param req the request
  * @param res the response
  * @return sucess message and status
*/

const logout = (req, res) => {
    return res.status(200).json({
        sucess: true,
        message: 'User has logged out successfully!'
    });
};

module.exports = logout;