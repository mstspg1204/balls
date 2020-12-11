class Paper {
    constructor(x,y,radius)
    {var options={
        isStatic:false,
        restitution:0.3,
        fraction:0.5,
        density:1.2

    }
    this.body = bodies.ellipse(x,y,radius,options) 
    this.width = width ;
    this.height= height ;
    World.add(world, this.body);
}}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    ellipse(0,0, this.radius);
    pop();
}