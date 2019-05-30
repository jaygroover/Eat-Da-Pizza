var orm = require('../config/orm');

var pizza = {
    all: function(cb){
        orm.all('pizzas', function(res){
            cb(res);
        })
    }
}

module.exports = pizza;