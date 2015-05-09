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

cat1.scratch();
cat2.meow();