const express = require('express');
const renderPage = require('../middlewares/renderMiddleware');
const router  = express.Router();


router.get('*', renderPage);


module.exports = router;