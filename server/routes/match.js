var listings = require('../controllers/match.js'), 
    express = require('express'), 
    router = express.Router();

router.route('/')
  .get(listings.list)
  .post(listings.create);

router.route('/:listingId')
  .get(listings.read)
  .put(listings.update)
  .delete(listings.delete);

router.param('listingId', listings.listingByID);

module.exports = router;