var Animal = function(food) {
    this.food = food;
}

Animal.prototype.eat = function() {
    console.log("It's eating ");
}

Animal.prototype.sound = function() {
    console.log ("Hi, I'm eating " + food);
}

function Cat ( food, drink ) {
    Animal.call(this, food);

    this.drink = drink;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.costructor = Cat;
