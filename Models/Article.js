let mysqlConfig = require("../Utilities/mysqlConfig");

let initialize = () => {
    // console.log('initialize...');
    mysqlConfig.getDB().query("create table IF NOT EXISTS articles (id INT auto_increment primary key, category VARCHAR(30), title VARCHAR(24))");

}

module.exports = {
    initialize: initialize
}
