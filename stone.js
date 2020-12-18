class Stones{
    constructor(x,y,radius){
var stoneOptions={
 isStatic:false,
 restitution:0,
 friction:1,
 density:1.2 
}
this.body=Bodies.circle(x,y,40,stoneOptions)   
this.image=loadImage("stone.png")
World.add(world,this.body)
}
display(){
    imageMode(CENTER)
    image(this.image,150,550,40,40)
}
}