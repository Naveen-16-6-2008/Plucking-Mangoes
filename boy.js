class Boy{
    constructor(x,y,r)
    {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        this.image = loadImage("boy.png");
                World.add(world,this.body);
    }
    display()
    {
        
        var boypos=this.body.position;
        push()
        translate(boypos.x,boypos.y);
        strokeWeight(3);
     
        imageMode(CENTER);
     
        image(this.image, 0, 0, 230,250);
        pop()
    }
}