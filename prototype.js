//we'e wasting memory here because we're creating a new tellmyname for each instance of the constructor. Each time we create a new instance of the constructor, the method tellmyname is created again.
const ConstructorFunction = function(name) {
    this.myName = name;
    this.tellmyname = function() {
        console.log(this.myName);
    }
}

const myName = new ConstructorFunction("John");


myName.tellmyname();

//we can fix this by using the prototype property. that way we tellmynamme is the same for all instances

const ConstructorFunctionWithProtoype = function(name) {
    this.myName = name;
}

//tellmyname is now a property of the ConstructorFunctionWithProtoype prototype
ConstructorFunctionWithProtoype.prototype.tellmyname = function() {
    console.log(this.myName);
}

const myName2 = new ConstructorFunctionWithProtoype("Wick");

const myName3 = new ConstructorFunctionWithProtoype("parabellum");

myName2.tellmyname();

console.dir(myName);

console.dir(myName2);

console.dir(myName3);

console.log(myName3.tellmyname === myName2.tellmyname); //true


//prototypal chaining 

