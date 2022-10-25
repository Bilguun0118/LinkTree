const asyncHandler = require("express-async-handler");
const { User } = require("../models/Users");
const { Link } = require("../models/Link");
const { MyError } = require("../utils/MyError");

const createLink = asyncHandler(async (req, res, next) => {
    const userId = req.userId;
    const user = await User.findById(userId);
    if(!user) {
        throw new MyError("iim user oldsongui!", 404);
    }
    req.body.userName = req.userName;
    const result = await Link.create({ ...req.body, userId });
    res.status(200).json({
        success: true,
        result
    });
});

const getUserLink = asyncHandler( async ( req, res, next ) => {
    const links = await Link.find( {userName: req.params.name}).populate("userId").lean();
    if(!links) {
        throw new MyError("iim user oldsongui!", 404); 
    }
    res.status(200).json({
        success: true,
        links
    });
});

module.exports = { createLink, getUserLink}