const { Mercedes, Bmw, Porsche, Lambo, Ferrari, Audi, Range} = require('../database/db');

// Adding and getting car datas from and to database

exports.addMerc = function(req, res){
  Mercedes.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getMerc = function(req, res){
	Mercedes.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.addBmw = function(req, res){
	Bmw.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getBmw = function(req, res){
	Bmw.findAll().then(data => {
		return res.send(data)	
	}).catch(err => {
		console.log(err)
	})
}

exports.addAudi = function(req, res){
	Audi.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getAudi = function(req, res){
	Audi.find().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.addFerrari = function(req, res){
  Ferrari.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getFerrari = function(req, res){
	Ferrari.find().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.addRange = function(req, res){
  Range.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getRange = function(req, res){
	Range.find().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.addLambo = function(req, res){
  Lambo.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getLambo = function(req, res){
	Lambo.find().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.addPorsche = function(req, res){
  Porsche.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getPorsche = function(req, res){
	Porsche.find().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}