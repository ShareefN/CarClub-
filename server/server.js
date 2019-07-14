const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const users = require('./api');
const path = require("path")

const port = process.env.PORT || 4040;
const app = express().use('*', cors());

app.use('/static', express.static(path.join(__dirname, '../build//static')));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); 
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 next();
  });
 
const authMiddleware = (req, res, next) => {
 if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
     console.log(req.headers.authorization.split(' ')[0]);
      next();
    } else {
      console.log('else');
      next();
    }
};

app.use('/', authMiddleware, (req, res, next) => {
 userRoutes(app);
 next()
})

app.listen(port, () => {
	console.log(`Conneceted to port ${port}`);
});