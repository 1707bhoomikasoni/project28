class Mango{
    constructor(x,y,radius){
        var mangoOptions={
            isStatic:true,
            restitution:0,
            friction:1
        }
    this.body=Bodies.circle(x,y,30,mangoOptions)
    this.image=loadImage("mango.png")
    World.add(world,this.body)
     }
     display(){
       imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,30,30)
     }
}