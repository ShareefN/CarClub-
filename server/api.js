const router = require('express').Router();
const ctrl = require('./controllers');

// Get and Post api's

router.route('/addMerc').post((req, res) => {
    ctrl.addMerc(req, res)
})

router.route('/getMerc').get((req, res) => {
    ctrl.getMerc(req, res)
})

router.route('/addBmw').post((req, res) => {
  ctrl.addBmw(req, res)
})

router.route('/getBmw').get((req, res) => {
  ctrl.getBmw(req, res)
})

router.route('/addRange').post((req, res) => {
  ctrl.addRange(req, res)
})

router.route('/getRange').get((req, res) => {
  ctrl.getRange(req, res)
})

router.route('/addFerrari').post((req, res) => {
  ctrl.addFerrari(req, res)
})

router.route('/getFerrari').get((req, res) => {
  ctrl.getFerrari(req, res)
})

router.route('/addLambo').post((req, res) => {
  ctrl.addLambo(req, res)
})

router.route('/getLambo').get((req, res) => {
  ctrl.getLambo(req, res)
})

router.route('/addAudi').post((req, res) => {
  ctrl.addAudi(req, res)
})

router.route('/getAudi').get((req, res) => {
  ctrl.getAudi(req, res)
})

router.route('/addPorsche').post((req, res) => {
  ctrl.addPorsche(req, res)
})

router.route('/getPorsche').get((req, res) => {
  ctrl.getPorsche(req, res)
})

router.route('/sendRequest').post((req, res) => {
  ctrl.sendRequest(req, res)
})

router.route('/receiveRequests').get((req, res) => {
  ctrl.receiveRequests(req, res)
})

module.exports.router = router;