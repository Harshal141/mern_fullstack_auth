import asyncHandler from 'express-async-handler';
// desc   Auth user
// route  POST /api/users/auth
// access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'User Authenticated'
    });
});

export { authUser }  