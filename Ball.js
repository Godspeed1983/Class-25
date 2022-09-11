class Ball{

    constructor(x,y,r){

    var ball_options={
        restitution:0.95
    }

          this.radius=r;

          this.body = Bodies.circle(x,y,this.radius,ball_options);
          World.add(world,this.body);
    }


 display(){

  ellipseMode(RADIUS)
     ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

 }
 

}