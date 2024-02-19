const express = require('express')
const router = express.Router();
const { getHomepage, getTestpage } = require('../controllers/homeController');
// router.get('/', (req, res) => {
//     res.send('Hello World!')
// })
//router.Method('/route', handler)
router.get('/', getHomepage);
router.get('/test', getTestpage);

module.exports = router;