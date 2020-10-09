//Engine = is a module in matter library
//Engine is a module which consists function and properties
//it is responsible in creating physics
const Engine = Matter.Engine;
/*World is a module in matter library
World consists of function and properties which are
responsible in creating the physical world and
adds the physics bodies in it*/
const World = Matter.World;
/*
Bodies is a module in matter library.
Bodies is a module which consists only of functions
and it would create rigid physics body objects.
*/
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;

function setup() {
    createCanvas(800, 400);
    /*it will creates engine object and make sure
    to store in the variable
     */
    engine = Engine.create();
    console.log(engine);
    /* world is a property of engine, 
     we cannot access the property just like that
     we need to access a property of an object through
     the  objects itself
     For example:= object.propertyName    
    */
    world = engine.world;
    /*objects will be stored in btw {} */
    // console.log(engine);
    /*Creating a physic Body object using
    Matter.Bodies module
    */
    /* If you want to change some of the physics properties for a body
    create the variable and change those properties before
    creating thephysics body;
    */
    var groundOptions = {
        isStatic: true
    }
    ground = Bodies.rectangle(400, height, 800, 30, { isStatic: true });
    /*Creating the physic body will be useless if we
    dont add it to the world, In World module - there is a method named as add
    We would be using that.- this method requires two parameters
    world: this should be the engine.world (that is world property stored inside the engine object)
    body : physics body created by us
    */
    World.add(world, ground);
    /*Displaying the physics body properties and 
    understand how do we access these properties */
    //console.log(ground);
    // console.log(ground.position);
    // console.log(ground.position.x);


    box1 = new Box(10, 10, 100, 100);
    //box1.boxBody = box;

}
// Function draw does not work in a loop but create frames

function draw() {
    background(0);
    //we need to update the Engine in every frame
    //Matter.Engine.update(engineObject)
    Engine.update(engine);
    //rectMode - it will change the position of the rectangle either CORNER or CENTER
    rectMode(CENTER);
    /* If you want to display the physics object ensure that you use physic object.position property*/
    rect(ground.position.x, ground.position.y, 800, 50);
    box1.display();
}