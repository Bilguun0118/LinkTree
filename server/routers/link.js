const { Router } = require("express");
const { createLink, getUserLink } = require("../controllers/LinkController");
const { protect } = require("../middleware/protect")
const linkRouter = Router();
linkRouter.use(protect);
linkRouter.route('/createLink').post(createLink);
linkRouter.route('/getLink/:name').get(getUserLink);
module.exports = { linkRouter }