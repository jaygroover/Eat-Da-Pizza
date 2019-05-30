const orm = require('../config/orm');

const pizza = {
    all: function(cb){
        orm.all('pizzas', function(res){
            cb(res);
        })
    }
}

module.exports = pizza;