var Cat = function(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.scratch = function() {
    console.log(this.name + ", the " + this.color + " cat, scratch the sofa");
}

Cat.prototype.meow = function() {
    console.log("The " + this.color + " cat, called " + this.name + ", meowed at the moon.");
}

var cat1 = new Cat("Kaka", "white");
var cat2 = new Cat("Keko", "black");
var catFunction = cat1.scratch;

// logs "Kaka, the white cat, scratch the sofa"
cat1.scratch();

// logs "The black cat, called Keko, meowed at the moon."
cat2.meow();

// logs ", the undefined cat, scratch the sofa" (or fails
// with a TypeError in strict mode)
catFunction();

//logs true
console.log(catFunction === cat1.scratch);

//logs true
console.log(catFunction === Cat.prototype.scratch);

//logs "Kaka, the white cat, scratch the sofa"
catFunction.call(cat1);