class Particle{
    constructor(x,y){
        var options = {
            'density' : 0.4, 
            'restitution' : 0.5
        }
        this.body = Bodies.circle(x,y, 10,options);
        this.radius = 10;
        this.color = color(random(0,255),random(0,255), random(0,255));

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        pop();
    }
}