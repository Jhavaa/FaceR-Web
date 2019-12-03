/* Dependencies */
var testimonials = require('../controllers/testimonials.server.controller.js'),
    express = require('express'), //refers to Express the middleware helper for Node.js
    router = express.Router(); //refers to the Router() function in Express the middleware helper for Node.js
let locks= require('../controllers/locks.server.controller.js')

//These routes handle is getting the testimonials data from the database, as well as creating new testimonials in the database
router.route('/Testimonials')
  .get(testimonials.list)
  .post(testimonials.create)

//These routes handle reading individual testimonials, updating individual testimonials, and deleting individual testimonials
router.route('/Testimonials/:testimonialId')
  .get(testimonials.read)
  .put(testimonials.update)
  .delete(testimonials.delete)

router.param('testimonialId', testimonials.testimonialByID);

//get lock information whenever a get request is sent to /About/Locks
router.route('/Locks')
  .get(locks.list)

//update lock info on the following request
router.route('/Locks/:lockid')
  .get(locks.read)
  .put(locks.update)

router.param('lockid', locks.locksByID)

module.exports = router;
