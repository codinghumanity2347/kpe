class Box {
    constructor(x, y, w, h) {
        var boxOptions = {
            restitution: 1.0
        };
        this.boxBody = Bodies.rectangle(x, y, w, h, boxOptions);
        World.add(world, this.boxBody);
        this.width = w;
        this.height = h;
    }
    display() {
        rectMode(CENTER);
        rect(this.boxBody.position.x, this.boxBody.position.y, this.width, this.height);
    }
}