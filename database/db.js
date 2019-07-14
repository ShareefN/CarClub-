const Sequelize = require("sequelize");

const sequelize = new Sequelize('ClubCar', 'root', '12345678', {
    host: "localhost",
    dialect: "mysql",
    define: {
        paranoid: true
    }
});


sequelize.authenticate()
 .then(() => console.log('Database Connected!'))
 .catch(err => console.log(err))


  // Schemas 
  const Mercedes = sequelize.define('mercedes', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, require: true },
    image: { type: Sequelize.STRING, require: true },
    year: { type: Sequelize.DATE, require: true },
    color: { type: Sequelize.STRING, require: true },
    price: { type: Sequelize.INTEGER, require: true },
 })

 const Bmw = sequelize.define('bmw', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, require: true },
    image: { type: Sequelize.STRING, require: true },
    year: { type: Sequelize.DATE, require: true },
    color: { type: Sequelize.STRING, require: true },
    price: { type: Sequelize.INTEGER, require: true },
 })

 const Audi = sequelize.define('audi', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, require: true },
    image: { type: Sequelize.STRING, require: true },
    year: { type: Sequelize.DATE, require: true },
    color: { type: Sequelize.STRING, require: true },
    price: { type: Sequelize.INTEGER, require: true },
 })

 const Lambo = sequelize.define('lambo', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, require: true },
    image: { type: Sequelize.STRING, require: true },
    year: { type: Sequelize.DATE, require: true },
    color: { type: Sequelize.STRING, require: true },
    price: { type: Sequelize.INTEGER, require: true },
 })

  const Range = sequelize.define('range', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, require: true },
    image: { type: Sequelize.STRING, require: true },
    year: { type: Sequelize.DATE, require: true },
    color: { type: Sequelize.STRING, require: true },
    price: { type: Sequelize.INTEGER, require: true },
 })

 const Ferrari = sequelize.define('ferrari', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, require: true },
    image: { type: Sequelize.STRING, require: true },
    year: { type: Sequelize.DATE, require: true },
    color: { type: Sequelize.STRING, require: true },
    price: { type: Sequelize.INTEGER, require: true },
 })

 const Porsche  = sequelize.define('porsche', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, require: true },
    image: { type: Sequelize.STRING, require: true },
    year: { type: Sequelize.DATE, require: true },
    color: { type: Sequelize.STRING, require: true },
    price: { type: Sequelize.INTEGER, require: true },
 })

 sequelize.sync();

 module.exports.Mercedes = Mercedes;
 module.exports.Bmw = Bmw;
 module.exports.Audi = Audi;
 module.exports.Lambo = Lambo;
 module.exports.Range = Range;
 module.exports.Ferrari = Ferrari;
 module.exports.Porsche = Porsche;




