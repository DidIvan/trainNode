/**
 * Created by Ivan on 02.02.2016.
 */
var phrases = require('./../ru.json')

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(phrases.Hello +" " + who.name);
};

console.log("user is required");

exports.User = User;